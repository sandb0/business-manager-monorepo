type CompanyProps = {
  id: number;
};

export default class Company {
  private _id: number;

  public constructor(props: CompanyProps) {
    const { id } = props;

    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}
