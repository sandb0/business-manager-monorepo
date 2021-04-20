import Company from '../../domain/Company';
import CompanyDTO from './CompanyDTO';

export default class CompanyMapper {
  public toDomain(
    companiesRaw: CompanyDTO | CompanyDTO[]
  ): Company | Company[] {
    if (Array.isArray(companiesRaw)) {
      const companies = companiesRaw.map((company: CompanyDTO) => {
        const { id, name, about, cnpj, demandValue, annualBilling } = company;

        return new Company({
          id,
          name,
          about,
          cnpj,
          demandValue,
          annualBilling,
        });
      });

      return companies;
    }

    const { id, name, about, cnpj, demandValue, annualBilling } = companiesRaw;

    return new Company({
      id,
      name,
      about,
      cnpj,
      demandValue,
      annualBilling,
    });
  }

  public toDTO(companiesRaw: Company | Company[]): CompanyDTO | CompanyDTO[] {
    if (Array.isArray(companiesRaw)) {
      const companies = companiesRaw.map((company: Company) => {
        const { id, name, about, cnpj, demandValue, annualBilling } = company;

        return {
          id,
          name,
          about,
          cnpj,
          demandValue,
          annualBilling,
        };
      });

      return companies;
    }

    const { id, name, about, cnpj, demandValue, annualBilling } = companiesRaw;

    return {
      id,
      name,
      about,
      cnpj,
      demandValue,
      annualBilling,
    };
  }
}
