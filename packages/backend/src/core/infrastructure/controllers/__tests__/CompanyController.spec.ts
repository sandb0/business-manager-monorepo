import HTTPStatusCode from '../../../../abstractions/infrastructure/HTTPStatusCode';
import CompanyDTO from '../../CompanyDTO';
import CompanyController from '../CompanyController';

const CompanyServiceMock = jest.fn();
const companyServiceMock = new CompanyServiceMock();

const expectedCompanyDTO: CompanyDTO = {
  id: 0,
  name: 'Company',
  cnpj: '0001',
  demandValue: 1,
  annualBilling: 2,
};

describe('Infrastructure - CompanyController', () => {
  describe('Create a new Company: `save()`', () => {
    it('should call the expected Application Service method with correct company data and return a response', async () => {
      companyServiceMock.save = jest.fn().mockReturnValue(expectedCompanyDTO);

      const SUT = new CompanyController(companyServiceMock);

      const company = await SUT.save(expectedCompanyDTO);

      expect(companyServiceMock.save).toBeCalledTimes(1);
      expect(companyServiceMock.save).toBeCalledWith(expectedCompanyDTO);
      expect(company).toEqual({
        statusCode: HTTPStatusCode.Ok,
        response: { success: expectedCompanyDTO },
      });
    });
  });

  describe('Get all Companies: `findAll()`', () => {
    it('should call the expected Application Service method with correct company data and return a response', async () => {
      companyServiceMock.findAll = jest
        .fn()
        .mockReturnValue([expectedCompanyDTO, expectedCompanyDTO]);

      const SUT = new CompanyController(companyServiceMock);

      const companies = await SUT.findAll();

      expect(companyServiceMock.findAll).toBeCalledTimes(1);
      expect(companies).toEqual({
        statusCode: HTTPStatusCode.Ok,
        response: { success: [expectedCompanyDTO, expectedCompanyDTO] },
      });
    });
  });

  describe('Get a Company By Id: `findById()`', () => {
    it('should call the expected Application Service method with correct company data and return a response', async () => {
      companyServiceMock.findById = jest
        .fn()
        .mockReturnValue(expectedCompanyDTO);

      const SUT = new CompanyController(companyServiceMock);

      const companyId = '100';
      const company = await SUT.findById(companyId);

      expect(companyServiceMock.findById).toBeCalledTimes(1);
      expect(companyServiceMock.findById).toBeCalledWith(companyId);
      expect(company).toEqual({
        statusCode: HTTPStatusCode.Ok,
        response: { success: expectedCompanyDTO },
      });
    });
  });

  describe('Delete a Company By Id: `delete()`', () => {
    it('should call the expected Application Service method with correct company data and return a response', async () => {
      companyServiceMock.delete = jest.fn().mockReturnValue(true);

      const SUT = new CompanyController(companyServiceMock);

      const companyId = '100';
      const companies = await SUT.delete(companyId);

      expect(companyServiceMock.delete).toBeCalledTimes(1);
      expect(companyServiceMock.delete).toBeCalledWith(companyId);
      expect(companies).toEqual({
        statusCode: HTTPStatusCode.Ok,
        response: { success: true },
      });
    });
  });
});
