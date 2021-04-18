import AbstractController from '../../../abstractions/infrastructure/AbstractController';
import { AbstractResponse } from '../../../abstractions/infrastructure/AbstractRespose';

import CompanyDTO from '../CompanyDTO';
import CompanyService from '../../application/CompanyService';

type CompanyHTTPRequestData = {
  id?: number;
  name?: string;
  cnpj?: string;
  demandValue?: number;
  annualBilling?: number;
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
    const { id, name, cnpj, demandValue, annualBilling } = requestData;
    const companyDTO: CompanyDTO = {
      id: id || 0,
      name: name || '',
      cnpj: cnpj || '',
      demandValue: demandValue || 0,
      annualBilling: annualBilling || 0,
    };

    try {
      const response = await this.applicationService.save(companyDTO);

      return this.ok<CompanyDTO>(response);
    } catch (error) {
      return this.serverError();
    }
  }
}