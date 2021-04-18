import Company from '../../domain/Company';

export default interface ICompanyRepository {
  save(companyDTO: Company): Promise<Company>;
  findAll(): Promise<Company | Company[]>;
  findById(companyId: number): Promise<Company | undefined>;
  delete(companyId: number): Promise<boolean | undefined>;
}
