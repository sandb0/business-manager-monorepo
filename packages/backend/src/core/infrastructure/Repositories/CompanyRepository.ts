import CompanyDTO from '../../domain/CompanyDTO';
import ICompanyRepository from './ICompanyRepository';

export default class CompanyRepository implements ICompanyRepository {
  public async save(companyDTO: CompanyDTO): Promise<CompanyDTO> {
    return companyDTO;
  }
}
