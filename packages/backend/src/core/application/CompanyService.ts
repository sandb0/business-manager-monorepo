import CompanyDTO from '../domain/CompanyDTO';
import ICompanyRepository from '../infrastructure/Repositories/ICompanyRepository';

export default class CompanyService {
  private repository: ICompanyRepository;

  public constructor(repository: ICompanyRepository) {
    this.repository = repository;
  }

  public async save(companyDTO: CompanyDTO): Promise<CompanyDTO> {
    return companyDTO;
  }
}
