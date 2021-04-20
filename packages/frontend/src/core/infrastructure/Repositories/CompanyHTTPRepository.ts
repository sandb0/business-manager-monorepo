import { AxiosStatic } from 'axios';
import Company from '../../domain/Company';
import CompanyDTO from './CompanyDTO';
import CountryMapper from './CompanyMapper';

export default class CompanyHTTPRepository {
  private httpClient: AxiosStatic;
  private repositoryMapper: CountryMapper;

  public constructor(httpClient: AxiosStatic, repositoryMapper: CountryMapper) {
    this.httpClient = httpClient;
    this.repositoryMapper = repositoryMapper;
  }

  public async findAll() {
    const response = await this.httpClient.get(
      process.env.REACT_APP_API_URL + '/companies'
    );

    let companiesResponse: CompanyDTO[] = [];
    const responseData = response.data;

    if (responseData.success) {
      companiesResponse = responseData.success as CompanyDTO[];
    }

    return this.repositoryMapper.toDomain(companiesResponse) as Company[];
  }

  public async save(company: Company) {
    const companyDTO = this.repositoryMapper.toDTO(company);

    const response = await this.httpClient.post(
      process.env.REACT_APP_API_URL + '/companies',
      { ...companyDTO }
    );

    let companyResponse: CompanyDTO;
    const responseData = response.data;

    if (responseData.success) {
      companyResponse = responseData.success as CompanyDTO;

      return this.repositoryMapper.toDomain(companyResponse) as Company;
    }
  }
}
