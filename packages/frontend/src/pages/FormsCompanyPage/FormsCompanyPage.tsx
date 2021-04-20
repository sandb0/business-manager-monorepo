import React, { useState } from 'react';
import { useHistory } from 'react-router';

import CompanyPresenter from '../../core/infrastructure/Presenters/CompanyPresenter';
import CompanyDTO from '../../core/infrastructure/Repositories/CompanyDTO';

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

type Props = {
  presenter: CompanyPresenter;
};

const FormsCompanyPage: React.FC<Props> = (props: Props) => {
  const { presenter } = props;
  const [formData, setFormData] = useState<CompanyDTO>(initialFormDataState);

  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const company = presenter.save(formData);

    if (company) {
      history.push('/');
    }
  };

  return (
    <ContainerStyled>
      <HeaderSection />

      <MainSection>
        <TitleComponent title="Adicionar Nova Empresa" backTo="/" />

        <form onSubmit={(event) => handleSubmit(event)}>
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
