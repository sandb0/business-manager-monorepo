import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useParams } from 'react-router-dom';

import CompanyPresenter from '../../core/infrastructure/Presenters/CompanyPresenter';
import CompanyDTO from '../../core/infrastructure/Repositories/CompanyDTO';
import { CompanyReduxStore } from '../../core/infrastructure/StateManagers/Redux/CompanyRedux';

import { TitleComponent } from '../../design/components';
import { HeaderSection, MainSection } from '../../design/sections';

import { ContainerStyled } from './styles';

const initialFormDataState: CompanyDTO = {
  id: 0,
  name: '',
  about: '',
  cnpj: '',
  demandValue: 0,
  annualBilling: 0,
};

type RouterParamsProps = {
  companyId?: string;
};

type Props = {
  presenter: CompanyPresenter;
};

const FormsCompanyPage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;
  const [formData, setFormData] = useState<CompanyDTO>(initialFormDataState);
  const { companyId } = useParams<RouterParamsProps>();

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const isEditPage = location.pathname.split('/')[3];
  const company = useSelector(
    (companyState: CompanyReduxStore) => companyState.company.selectedCompany
  );

  useEffect(() => {
    // Load Company data on Edit Page.
    if (isEditPage) {
      (async () => {
        dispatch(await presenter.findById(parseInt(companyId || '0')));
      })();

      if (company) {
        setFormData({
          id: company.id,
          name: company.name,
          about: company.about,
          cnpj: company.cnpj,
          demandValue: company.demandValue,
          annualBilling: company.annualBilling,
        });
      }
    }
  }, [dispatch]);

  const handleEditSubmit = async () => {
    // Add `companyId` on API request.
    const editedFormData = { ...formData, id: parseInt(companyId || '0') };

    const company = await presenter.save(editedFormData);

    if (company) {
      history.goBack();
    }
  };

  const handleCreateSubmit = async () => {
    const company = await presenter.save(formData);

    if (company) {
      history.push('/');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isEditPage) {
      handleEditSubmit();
    } else {
      handleCreateSubmit();
    }
  };

  const titleComponent = isEditPage ? (
    <TitleComponent title="Alterar Empresa" backTo={`/company/${companyId}`} />
  ) : (
    <TitleComponent title="Adicionar Nova Empresa" backTo="/" />
  );

  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        {titleComponent}

        <form className="forms" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <h4>Nome da Empresa</h4>
            <input
              type="text"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </div>

          <div>
            <h4>CNPJ da Empresa</h4>
            <input
              type="text"
              value={formData.cnpj}
              onChange={(event) =>
                setFormData({ ...formData, cnpj: event.target.value })
              }
            />
          </div>

          <div>
            <h4>Demanda (Valor Monetário) da Empresa</h4>
            <input
              type="text"
              value={formData.demandValue}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  demandValue: parseInt(event.target.value || '0'),
                })
              }
            />
          </div>

          <div>
            <h4>Faturamento Anual da Empresa</h4>

            <input
              type="text"
              value={formData.annualBilling}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  annualBilling: parseInt(event.target.value || '0'),
                })
              }
            />
          </div>

          <div>
            <h4>Sobre a Empresa</h4>
            <textarea
              value={formData.about}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  about: event.target.value,
                })
              }
            ></textarea>
          </div>

          <button type="submit">Confirmar</button>
        </form>
      </MainSection>
    </ContainerStyled>
  );
};

export default FormsCompanyPage;
