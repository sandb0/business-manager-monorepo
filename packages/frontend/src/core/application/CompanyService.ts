import Company from '../domain/Company';
import CompanySearchProps from '../infrastructure/CompanySearchProps';
import CompanyDTO from '../infrastructure/Repositories/CompanyDTO';
import CompanyHTTPRepository from '../infrastructure/Repositories/CompanyHTTPRepository';

export default class CompanyService {
  private remoteRepository: CompanyHTTPRepository;

  public constructor(remoteRepository: CompanyHTTPRepository) {
    this.remoteRepository = remoteRepository;
  }

  public async findAll(searchProps: CompanySearchProps) {
    return await this.remoteRepository.findAll(searchProps);
  }

  public async findById(companyId: number) {
    return await this.remoteRepository.findById(companyId);
  }

  public async save(companyDTO: CompanyDTO) {
    const company = new Company(companyDTO);

    return await this.remoteRepository.save(company);
  }
}
