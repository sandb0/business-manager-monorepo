import Company from '../Company';

const companyProps = {
  id: 2,
  name: 'Name',
  cnpj: '0001',
  demandValue: 2,
  annualBilling: 2,
};

describe('Domain - Company', () => {
  it('should return expecteds Company values', () => {
    const SUT = new Company(companyProps);

    expect(SUT.id).toBe(companyProps.id);
    expect(SUT.name).toBe(companyProps.name);
    expect(SUT.cnpj).toBe(companyProps.cnpj);
    expect(SUT.demandValue).toBe(companyProps.demandValue);
    expect(SUT.annualBilling).toBe(companyProps.annualBilling);
  });
});
