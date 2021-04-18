type CompanyProps = {
  id?: number;
  name: string;
  cnpj: string;
  demandValue: number;
  annualBilling: number;
};

export default class Company {
  private _id?: number;
  private _name: string;
  private _cnpj: string;
  private _demandValue: number;
  private _annualBilling: number;

  public constructor(props: CompanyProps) {
    const { id, name, cnpj, demandValue, annualBilling } = props;

    this._id = id;
    this._name = name;
    this._cnpj = cnpj;
    this._demandValue = demandValue;
    this._annualBilling = annualBilling;
  }

  get id(): number | undefined {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get cnpj(): string {
    return this._cnpj;
  }

  get demandValue(): number {
    return this._demandValue;
  }

  get annualBilling(): number {
    return this._annualBilling;
  }
}
