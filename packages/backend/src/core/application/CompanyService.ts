import Company from '../domain/Company';
import CompanyDTO from '../domain/CompanyDTO';
import ICompanyRepository from '../infrastructure/repositories/ICompanyRepository';

export default class CompanyService {
  private repository: ICompanyRepository;

  public constructor(repository: ICompanyRepository) {
    this.repository = repository;
  }

  public async save(companyDTO: CompanyDTO): Promise<CompanyDTO> {
    const company = new Company({ id: companyDTO.id });

    await this.repository.save(company);

    return companyDTO;
  }
}
