import AbstractController from '../../../abstractions/infrastructure/AbstractController';
import { AbstractResponse } from '../../../abstractions/infrastructure/AbstractRespose';

import CompanyDTO from '../CompanyDTO';
import CompanyService from '../../application/CompanyService';
import CompanySearchProps from '../CompanySearchProps';
import { request } from 'express';

type CompanyHTTPRequestData = {
  id?: number;
  name?: string;
  about?: string;
  cnpj?: string;
  demandValue?: number;
  annualBilling?: number;
};

type CompanyFindAllHTTPResponseData = {
  companies?: CompanyDTO[];
  count?: number;
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
    const { id, name, about, cnpj, demandValue, annualBilling } = requestData;
    const companyDTO: CompanyDTO = {
      id: id || 0,
      name: name || '',
      about: about || '',
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

  public async findAll(
    requestData: CompanySearchProps
  ): Promise<AbstractResponse<CompanyFindAllHTTPResponseData | undefined>> {
    const searchProps: CompanySearchProps = {
      searchTerm: requestData.searchTerm || '',
      page: requestData.page || 0,
      size: requestData.size || 3,
    };

    try {
      const [companies, count] = await this.applicationService.findAll(
        searchProps
      );

      return this.ok<CompanyFindAllHTTPResponseData>({
        companies,
        count,
      });
    } catch (error) {
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
      return this.serverError();
    }
  }

  public async delete(
    companyId?: string
  ): Promise<AbstractResponse<boolean | undefined>> {
    try {
      const response = await this.applicationService.delete(companyId);

      return this.ok<boolean | undefined>(response);
    } catch (error) {
      return this.serverError();
    }
  }
}
