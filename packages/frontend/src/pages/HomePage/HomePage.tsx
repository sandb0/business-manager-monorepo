import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination } from '@material-ui/lab';

import CompanyPresenter from '../../core/infrastructure/Presenters/CompanyPresenter';
import CompanyDTO from '../../core/infrastructure/Repositories/CompanyDTO';
import { CompanyReduxStore } from '../../core/infrastructure/StateManagers/Redux/CompanyRedux';

import {
  CompanyListItemComponent,
  TitleComponent,
} from '../../design/components';
import { ButtonElement } from '../../design/elements';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled, CompaniesListWrapperStyled } from './styles';
import { useHistory, useParams } from 'react-router-dom';

type RouterParamsProps = {
  page?: string;
};

type Props = {
  presenter: CompanyPresenter;
};

const pageSize = 8;

const HomePage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;
  const { page } = useParams<RouterParamsProps>();

  const dispatch = useDispatch();
  const history = useHistory();

  const companies = useSelector(
    (companyState: CompanyReduxStore) => companyState.company.companies
  );

  const getPage = () => {
    const zeroOrPage = parseInt(page || '0');
    return zeroOrPage <= 0 ? 0 : zeroOrPage - 1;
  };

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('name') || '';

  useEffect(() => {
    (async () => {
      const zeroOrPage = getPage();

      dispatch(
        await presenter.findAll({
          size: pageSize,
          page: zeroOrPage,
          searchTerm,
        })
      );
    })();
  }, [dispatch, page]);

  const handlePagination = (event: any, value: any) => {
    history.push(value.toString() + `?name=${searchTerm}`);
  };

  const cardsCompaniesComponents = companies?.companies?.length
    ? companies.companies.map((company: CompanyDTO, index: number) => (
        <CompanyListItemComponent
          key={index}
          id={company.id}
          name={company.name}
          about={company.about}
        />
      ))
    : 'N??o h?? nenhuma empresa cadastrada';

  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Gerenciador de Empresa">
          <ButtonElement label="Adicionar nova Empresa" to="/company" />
        </TitleComponent>

        <Pagination
          className="pagination"
          page={getPage() + 1}
          count={Math.ceil((companies?.count || pageSize) / pageSize)}
          shape="rounded"
          onChange={handlePagination}
        />

        <CompaniesListWrapperStyled>
          {cardsCompaniesComponents}
        </CompaniesListWrapperStyled>
      </MainSection>
    </ContainerStyled>
  );
};

export default HomePage;
