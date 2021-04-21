import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CompanyPresenter from '../../core/infrastructure/Presenters/CompanyPresenter';
import { CompanyReduxStore } from '../../core/infrastructure/StateManagers/Redux/CompanyRedux';

import { TitleComponent } from '../../design/components';
import { annualBillingOptions } from '../../design/constants';
import { ButtonElement } from '../../design/elements';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled } from './styles';

type RouterParamsProps = {
  companyId?: string;
};

type Props = {
  presenter: CompanyPresenter;
};

const SingleCompanyPage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;
  const { companyId } = useParams<RouterParamsProps>();

  const dispatch = useDispatch();

  const company = useSelector(
    (companyState: CompanyReduxStore) => companyState.company.selectedCompany
  );

  useEffect(() => {
    (async () => {
      dispatch(await presenter.findById(parseInt(companyId || '0')));
    })();
  }, [dispatch]);

  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Informações da Empresa" backTo="/">
          <ButtonElement label="Editar" to={`/company/${companyId}/edit`} />
        </TitleComponent>

        <section>
          <div>
            <h4>Nome da Empresa</h4>
            <p>{company?.name}</p>
          </div>

          <div>
            <h4>CNPJ da Empresa</h4>
            <p>{company?.cnpj}</p>
          </div>

          <div>
            <h4>Demanda (Valor Monetário)</h4>
            <p>R$ {company?.demandValue.toLocaleString('pt-BR')}</p>
          </div>

          <div>
            <h4>Faturamento Anual</h4>

            {annualBillingOptions.map((option, index) => {
              if (index === company?.annualBilling) {
                return <p>{option}</p>;
              }

              return '';
            })}
          </div>

          <div>
            <h4>Sobre a Empresa</h4>
            <p>{company?.about}</p>
          </div>
        </section>
      </MainSection>
    </ContainerStyled>
  );
};

export default SingleCompanyPage;
