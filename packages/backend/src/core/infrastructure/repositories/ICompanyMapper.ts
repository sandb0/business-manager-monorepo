import Company from '../../domain/Company';
import { CompanyModel } from './TypeORM/models';

export default interface ICompanyMapper {
  toPersist(company: Company): CompanyModel;
  toDomain(company: CompanyModel): Company;
}
