import CompanyHTTPRepository from '../infrastructure/Repositories/CompanyHTTPRepository';

export default class CompanyService {
  private remoteRepository: CompanyHTTPRepository;

  public constructor(remoteRepository: CompanyHTTPRepository) {
    this.remoteRepository = remoteRepository;
  }

  public async findAll() {
    return await this.remoteRepository.findAll();
  }
}
