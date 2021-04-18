import Company from '../../domain/Company';
import CompanyDTO from '../CompanyDTO';
import { CompanyModel } from './TypeORM/models';

export default interface ICompanyMapper {
  toPersist(company: Company): CompanyModel;
  toDomain(companyModel: CompanyModel | CompanyModel[]): Company | Company[];
  toDTO(company: Company | Company[]): CompanyDTO | CompanyDTO[];
}
