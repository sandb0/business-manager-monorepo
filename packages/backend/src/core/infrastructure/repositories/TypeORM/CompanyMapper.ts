import Company from '../../../domain/Company';
import CompanyDTO from '../../CompanyDTO';
import ICompanyMapper from '../ICompanyMapper';
import { CompanyModel } from './models';

export default class CompanyMapper implements ICompanyMapper {
  /**
   * Domain Entity to TypeORM Model parsing.
   *
   * @param company Domain Entity
   * @returns TypeORM Model
   */
  public toPersist(company: Company): CompanyModel {
    const { id, name, about, cnpj, demandValue, annualBilling } = company;
    const companyModel = new CompanyModel();

    companyModel.id = id;
    companyModel.name = name;
    companyModel.about = about;
    companyModel.cnpj = cnpj;
    companyModel.demandValue = demandValue;
    companyModel.annualBilling = annualBilling;

    return companyModel;
  }

  /**
   * TypeORM Model to Domain Entity parsing.
   *
   * @param companiesModel TypeORM Model
   * @returns Domain Entity.
   */
  public toDomain(
    companiesModel: CompanyModel | CompanyModel[]
  ): Company | Company[] {
    let companies: Company | Company[] = [];

    if (Array.isArray(companiesModel)) {
      companies = companiesModel.map((companyModel) => {
        const {
          id,
          name,
          about,
          cnpj,
          demandValue,
          annualBilling,
        } = companyModel;

        return new Company({
          id,
          name,
          about,
          cnpj,
          demandValue,
          annualBilling,
        });
      });
    } else {
      const {
        id,
        name,
        about,
        cnpj,
        demandValue,
        annualBilling,
      } = companiesModel;

      companies = new Company({
        id,
        name,
        about,
        cnpj,
        demandValue,
        annualBilling,
      });
    }

    return companies;
  }

  /**
   * Domain Entity to Data Transfer Object parsing.
   *
   * @param companies Domain Entity
   * @returns Data Transfer Object
   */
  public toDTO(companies: Company | Company[]): CompanyDTO | CompanyDTO[] {
    let companiesDTO: CompanyDTO | CompanyDTO[] = [];

    if (Array.isArray(companies)) {
      companiesDTO = companies.map((company) => {
        const { id, name, about, cnpj, demandValue, annualBilling } = company;
        const companyDTO: CompanyDTO = {
          id,
          name,
          about,
          cnpj,
          demandValue,
          annualBilling,
        };

        return companyDTO;
      });
    } else {
      const { id, name, about, cnpj, demandValue, annualBilling } = companies;
      const companyDTO: CompanyDTO = {
        id,
        name,
        about,
        cnpj,
        demandValue,
        annualBilling,
      };

      companiesDTO = companyDTO;
    }

    return companiesDTO;
  }
}
