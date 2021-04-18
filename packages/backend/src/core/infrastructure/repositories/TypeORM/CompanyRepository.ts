import { Connection } from 'typeorm';

import Company from '../../../domain/Company';
import ICompanyRepository from '../ICompanyRepository';
import CompanyMapper from './CompanyMapper';
import { CompanyModel } from './models';

export default class CompanyRepository implements ICompanyRepository {
  private connection: Connection;
  private mapper: CompanyMapper;

  public constructor(connection: Connection, mapper: CompanyMapper) {
    this.connection = connection;
    this.mapper = mapper;
  }

  public async save(company: Company): Promise<Company> {
    const companyORMRepository = this.connection.getRepository(CompanyModel);
    const companyModel = this.mapper.toPersist(company);

    if (company.id) {
      const updatedCompanyModel = await this.update(companyModel);

      if (updatedCompanyModel) {
        return updatedCompanyModel;
      }
    }

    const createdCompanyModel = await companyORMRepository.save(companyModel);

    return this.mapper.toDomain(createdCompanyModel) as Company;
  }

  public async findAll(): Promise<Company | Company[]> {
    const companyORMRepository = this.connection.getRepository(CompanyModel);

    const companiesModel = await companyORMRepository.find();

    return this.mapper.toDomain(companiesModel);
  }

  public async findById(companyId: number): Promise<Company | undefined> {
    const companyORMRepository = this.connection.getRepository(CompanyModel);

    const companyModel = await companyORMRepository.findOne(companyId);

    if (companyModel) {
      return this.mapper.toDomain(companyModel) as Company;
    }
  }

  public async delete(companyId: number): Promise<boolean | undefined> {
    const companyORMRepository = this.connection.getRepository(CompanyModel);

    const companyModel = await companyORMRepository.delete(companyId);

    if (companyModel.affected) {
      return true;
    }
  }

  private async update(companyModel: CompanyModel) {
    const companyORMRepository = this.connection.getRepository(CompanyModel);

    if (companyModel.id) {
      const updatedCompanyModel = await companyORMRepository.update(
        companyModel.id,
        companyModel
      );

      if (updatedCompanyModel.affected) {
        const findedUpdatedCompanyModel = await companyORMRepository.findOne(
          companyModel.id
        );

        if (findedUpdatedCompanyModel) {
          return this.mapper.toDomain(findedUpdatedCompanyModel) as Company;
        }
      }
    }
  }
}
