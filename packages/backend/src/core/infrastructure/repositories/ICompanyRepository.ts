import Company from '../../domain/Company';
import CompanySearchProps from '../CompanySearchProps';

export default interface ICompanyRepository {
  save(companyDTO: Company): Promise<Company>;
  findAll(searchProps: CompanySearchProps): Promise<[Company[], number]>;
  findById(companyId: number): Promise<Company | undefined>;
  delete(companyId: number): Promise<boolean | undefined>;
}
