import Company from '../../domain/Company';

export default interface ICompanyRepository {
  save(companyDTO: Company): Promise<Company>;
  findAll(): Promise<Company | Company[]>;
}
