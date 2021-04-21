import CompanyService from '../../application/CompanyService';
import CompanyDTO from '../Repositories/CompanyDTO';
import CompanyActions from '../StateManagers/Redux/CompanyActions';

export default class CountryPresenter {
  private applicationService: CompanyService;
  private reduxActions: CompanyActions;

  public constructor(
    applicationService: CompanyService,
    reduxActions: CompanyActions
  ) {
    this.applicationService = applicationService;
    this.reduxActions = reduxActions;
  }

  public async findAll() {
    const companies = await this.applicationService.findAll();

    return this.reduxActions.findAll(companies);
  }

  public async findById(companyId: number) {
    const company = await this.applicationService.findById(companyId);

    if (company) {
      return this.reduxActions.findById(company);
    }
  }

  public async save(formData: CompanyDTO) {
    return await this.applicationService.save(formData);
  }
}
