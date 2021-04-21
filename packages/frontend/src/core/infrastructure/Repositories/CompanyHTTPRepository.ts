import { AxiosStatic } from 'axios';
import Company from '../../domain/Company';
import CompanySearchProps from '../CompanySearchProps';
import CompanyDTO from './CompanyDTO';
import CompanyMapper from './CompanyMapper';

export default class CompanyHTTPRepository {
  private httpClient: AxiosStatic;
  private repositoryMapper: CompanyMapper;

  public constructor(httpClient: AxiosStatic, repositoryMapper: CompanyMapper) {
    this.httpClient = httpClient;
    this.repositoryMapper = repositoryMapper;
  }

  public async findAll(searchProps: CompanySearchProps) {
    const { size, page } = searchProps;

    const response = await this.httpClient.get(
      process.env.REACT_APP_API_URL + `/companies?page=${page}&size=${size}`
    );

    let companiesResponse: CompanyDTO[] = [];
    let count = 0;
    const responseData = response.data;

    if (responseData.success) {
      companiesResponse = responseData.success.companies as CompanyDTO[];
      count = responseData.success.count;
    }

    return {
      companies: this.repositoryMapper.toDomain(companiesResponse) as Company[],
      count,
    };
  }

  public async findById(companyId: number) {
    const response = await this.httpClient.get(
      process.env.REACT_APP_API_URL + '/companies/' + companyId
    );

    const responseData = response.data;

    if (responseData.success) {
      const companyResponse = responseData.success as CompanyDTO;

      return this.repositoryMapper.toDomain(companyResponse) as Company;
    }
  }

  public async save(company: Company) {
    const companyDTO = this.repositoryMapper.toDTO(company);

    const response = await this.httpClient.post(
      process.env.REACT_APP_API_URL + '/companies',
      { ...companyDTO }
    );

    const responseData = response.data;

    if (responseData.success) {
      const companyResponse = responseData.success as CompanyDTO;

      return this.repositoryMapper.toDomain(companyResponse) as Company;
    }
  }
}
