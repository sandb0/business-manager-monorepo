import { AxiosStatic } from 'axios';
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

    return this.repositoryMapper.toDomain(companiesResponse);
  }
}
