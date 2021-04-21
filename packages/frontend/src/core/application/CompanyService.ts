import Company from '../domain/Company';
import CompanyDTO from '../infrastructure/Repositories/CompanyDTO';
import CompanyHTTPRepository from '../infrastructure/Repositories/CompanyHTTPRepository';

export default class CompanyService {
  private remoteRepository: CompanyHTTPRepository;

  public constructor(remoteRepository: CompanyHTTPRepository) {
    this.remoteRepository = remoteRepository;
  }

  public async findAll() {
    return await this.remoteRepository.findAll();
  }

  public async findById(companyId: number) {
    return await this.remoteRepository.findById(companyId);
  }

  public async save(companyDTO: CompanyDTO) {
    const company = new Company(companyDTO);

    return await this.remoteRepository.save(company);
  }
}
