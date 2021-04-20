import Company from '../../domain/Company';
import CompanyDTO from '../../infrastructure/CompanyDTO';
import CompanyService from '../CompanyService';

const CompanyRepositoryMock = jest.fn();
const companyRepositoryMock = new CompanyRepositoryMock();

const CompanyMapperMock = jest.fn();
const companyMapperMock = new CompanyMapperMock();

const expectedCompanyDTO: CompanyDTO = {
  id: 0,
  name: 'Company',
  about: 'About',
  cnpj: '0001',
  demandValue: 1,
  annualBilling: 2,
};

const expectedCompany = new Company({
  id: 0,
  name: 'Company',
  about: 'About',
  cnpj: '0001',
  demandValue: 1,
  annualBilling: 2,
});

describe('Application - CompanyService', () => {
  describe('Create a new Company: `save()`', () => {
    it('should call the expected Repository and Mapper methods with correct company data and return a CompanyDTO', async () => {
      companyRepositoryMock.save = jest.fn().mockReturnValue(expectedCompany);
      companyMapperMock.toDTO = jest.fn().mockReturnValue(expectedCompanyDTO);

      const SUT = new CompanyService(companyRepositoryMock, companyMapperMock);

      const companyDTO = await SUT.save(expectedCompanyDTO);

      expect(companyRepositoryMock.save).toBeCalledTimes(1);
      expect(companyRepositoryMock.save).toBeCalledWith(expectedCompany);

      expect(companyMapperMock.toDTO).toBeCalledTimes(1);
      expect(companyMapperMock.toDTO).toBeCalledWith(expectedCompany);

      expect(companyDTO).toEqual(expectedCompanyDTO);
    });
  });

  describe('Get all Companies: `findAll()`', () => {
    it('should call the expected Repository and Mapper methods with correct company data and return a list of CompanyDTO', async () => {
      companyRepositoryMock.findAll = jest
        .fn()
        .mockReturnValue([expectedCompany, expectedCompany]);
      companyMapperMock.toDTO = jest.fn().mockReturnValue(expectedCompanyDTO);

      const SUT = new CompanyService(companyRepositoryMock, companyMapperMock);

      const companiesDTO = await SUT.findAll();

      expect(companyRepositoryMock.findAll).toBeCalledTimes(1);

      expect(companyMapperMock.toDTO).toBeCalledTimes(1);
      expect(companyMapperMock.toDTO).toBeCalledWith([
        expectedCompany,
        expectedCompany,
      ]);

      expect(companiesDTO).toEqual(expectedCompanyDTO);
    });
  });

  describe('Get all Companies: `findById()`', () => {
    it('should call the expected Repository and Mapper methods with correct company data and return a CompanyDTO', async () => {
      companyRepositoryMock.findById = jest
        .fn()
        .mockReturnValue(expectedCompany);
      companyMapperMock.toDTO = jest.fn().mockReturnValue(expectedCompanyDTO);

      const SUT = new CompanyService(companyRepositoryMock, companyMapperMock);

      const companyId = '100';
      const companyDTO = await SUT.findById(companyId);

      expect(companyRepositoryMock.findById).toBeCalledTimes(1);
      expect(companyRepositoryMock.findById).toBeCalledWith(
        parseInt(companyId)
      );

      expect(companyMapperMock.toDTO).toBeCalledTimes(1);
      expect(companyMapperMock.toDTO).toBeCalledWith(expectedCompany);

      expect(companyDTO).toEqual(expectedCompanyDTO);
    });

    it('should return undefined when not find a Company', async () => {
      companyRepositoryMock.findById = jest.fn().mockReturnValue(undefined);

      const SUT = new CompanyService(companyRepositoryMock, companyMapperMock);

      const companyId = undefined;
      const companyDTO = await SUT.findById(companyId);

      expect(companyDTO).toEqual(undefined);
    });
  });

  describe('Delete a Company: `delete()`', () => {
    it('should call the expected Repository and Mapper methods with correct company data and return a status', async () => {
      const expectedStatus = true;
      companyRepositoryMock.delete = jest.fn().mockReturnValue(expectedStatus);

      const SUT = new CompanyService(companyRepositoryMock, companyMapperMock);

      const companyId = '100';
      const status = await SUT.delete(companyId);

      expect(companyRepositoryMock.delete).toBeCalledTimes(1);
      expect(companyRepositoryMock.delete).toBeCalledWith(parseInt(companyId));

      expect(status).toEqual(expectedStatus);
    });

    it('should return undefined when not find a Company to delete it', async () => {
      const expectedStatus = undefined;
      companyRepositoryMock.delete = jest.fn().mockReturnValue(expectedStatus);

      const SUT = new CompanyService(companyRepositoryMock, companyMapperMock);

      const companyId = undefined;
      const status = await SUT.delete(companyId);

      expect(status).toBe(undefined);
    });
  });
});
