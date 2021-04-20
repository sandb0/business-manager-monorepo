import CompanyService from '../../application/CompanyService';
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
}
