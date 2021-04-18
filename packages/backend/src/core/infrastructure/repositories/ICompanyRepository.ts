import CompanyDTO from '../../domain/CompanyDTO';

export default interface ICompanyRepository {
  save(companyDTO: CompanyDTO): Promise<CompanyDTO>;
}
