import { Connection } from 'typeorm';
import Company from '../../../domain/Company';
import ICompanyRepository from '../ICompanyRepository';
import { CompanyModel } from './models';

export default class CompanyRepository implements ICompanyRepository {
  private connection: Connection;

  public constructor(connection: Connection) {
    this.connection = connection;
  }

  public async save(company: Company): Promise<Company> {
    const companyORMRepository = this.connection.getRepository(CompanyModel);

    const companyModel = new CompanyModel();
    companyModel.id = company.id;

    await companyORMRepository.save(companyModel);

    return company;
  }
}
