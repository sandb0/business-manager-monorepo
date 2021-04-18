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
    const { id, name, cnpj, demandValue, annualBilling } = company;
    const companyModel = new CompanyModel();

    companyModel.id = id;
    companyModel.name = name;
    companyModel.cnpj = cnpj;
    companyModel.demandValue = demandValue;
    companyModel.annualBilling = annualBilling;

    return companyModel;
  }

  /**
   * TypeORM Model to Domain Entity parsing.
   *
   * @param companyModel TypeORM Model
   * @returns Domain Entity.
   */
  public toDomain(companyModel: CompanyModel): Company {
    const { id, name, cnpj, demandValue, annualBilling } = companyModel;

    return new Company({ id, name, cnpj, demandValue, annualBilling });
  }

  /**
   * Domain Entity to Data Transfer Object parsing.
   *
   * @param company Domain Entity
   * @returns Data Transfer Object
   */
  public toDTO(company: Company): CompanyDTO {
    const { id, name, cnpj, demandValue, annualBilling } = company;
    const companyDTO: CompanyDTO = {
      id,
      name,
      cnpj,
      demandValue,
      annualBilling,
    };

    return companyDTO;
  }
}
