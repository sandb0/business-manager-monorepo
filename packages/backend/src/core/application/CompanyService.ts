import Company from '../domain/Company';
import CompanyDTO from '../infrastructure/CompanyDTO';
import ICompanyMapper from '../infrastructure/repositories/ICompanyMapper';
import ICompanyRepository from '../infrastructure/repositories/ICompanyRepository';

export default class CompanyService {
  private repository: ICompanyRepository;
  private mapper: ICompanyMapper;

  public constructor(repository: ICompanyRepository, mapper: ICompanyMapper) {
    this.repository = repository;
    this.mapper = mapper;
  }

  public async save(companyDTO: CompanyDTO): Promise<CompanyDTO> {
    const { id, name, cnpj, demandValue, annualBilling } = companyDTO;
    const company = new Company({ id, name, cnpj, demandValue, annualBilling });

    const createdCompany = await this.repository.save(company);

    return this.mapper.toDTO(createdCompany);
  }
}