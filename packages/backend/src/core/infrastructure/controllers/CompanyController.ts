import AbstractController from '../../../abstractions/infrastructure/AbstractController';
import { AbstractResponse } from '../../../abstractions/infrastructure/AbstractRespose';

import CompanyDTO from '../CompanyDTO';
import CompanyService from '../../application/CompanyService';

type CompanyHTTPRequestData = {
  id?: number;
};

export default class CompanyController extends AbstractController {
  private applicationService: CompanyService;

  public constructor(applicationService: CompanyService) {
    super();

    this.applicationService = applicationService;
  }

  public async save(
    requestData: CompanyHTTPRequestData
  ): Promise<AbstractResponse<CompanyDTO | undefined>> {
    const companyDTO: CompanyDTO = { id: requestData.id || 0 };

    try {
      const response = await this.applicationService.save(companyDTO);

      return this.ok<CompanyDTO>(response);
    } catch (error) {
      return this.serverError();
    }
  }
}
