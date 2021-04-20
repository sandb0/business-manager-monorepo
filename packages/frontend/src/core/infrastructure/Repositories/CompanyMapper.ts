import Company from '../../domain/Company';
import CompanyDTO from './CompanyDTO';

export default class CompanyMapper {
  public toDomain(companiesRaw: CompanyDTO[]): Company[] {
    const companies = companiesRaw.map((company: CompanyDTO) => {
      const { id, name, about, cnpj, demandValue, annualBilling } = company;

      return new Company({ id, name, about, cnpj, demandValue, annualBilling });
    });

    return companies;
  }
}
