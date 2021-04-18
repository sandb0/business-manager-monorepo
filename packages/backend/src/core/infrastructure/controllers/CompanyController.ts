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
      console.error(error);

      return this.serverError();
    }
  }

  public async findAll(): Promise<
    AbstractResponse<CompanyDTO | CompanyDTO[] | undefined>
  > {
    try {
      const response = await this.applicationService.findAll();

      return this.ok<CompanyDTO | CompanyDTO[]>(response);
    } catch (error) {
      console.error(error);

      return this.serverError();
    }
  }

  public async findById(
    companyId?: string
  ): Promise<AbstractResponse<CompanyDTO | undefined>> {
    try {
      const response = await this.applicationService.findById(companyId);

      return this.ok<CompanyDTO | undefined>(response);
    } catch (error) {
      console.error(error);

      return this.serverError();
    }
  }
}
