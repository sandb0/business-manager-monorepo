import Company from '../../../domain/Company';
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
    const { id } = company;
    const companyModel = new CompanyModel();

    companyModel.id = id;

    return companyModel;
  }

  /**
   * TypeORM Model to Domain Entity parsing.
   *
   * @param companyModel TypeORM Model
   * @returns Domain Entity.
   */
  public toDomain(companyModel: CompanyModel): Company {
    const { id } = companyModel;

    return new Company({ id });
  }
}
