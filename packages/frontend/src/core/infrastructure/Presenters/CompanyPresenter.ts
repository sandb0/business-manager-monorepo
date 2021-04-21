import CompanyService from '../../application/CompanyService';
import CompanySearchProps from '../CompanySearchProps';
import CompanyDTO from '../Repositories/CompanyDTO';
import CompanyActions from '../StateManagers/Redux/CompanyActions';

export default class CompanyPresenter {
  private applicationService: CompanyService;
  private reduxActions: CompanyActions;

  public constructor(
    applicationService: CompanyService,
    reduxActions: CompanyActions
  ) {
    this.applicationService = applicationService;
    this.reduxActions = reduxActions;
  }

  public async findAll(searchProps: CompanySearchProps) {
    const { companies, count } = await this.applicationService.findAll(
      searchProps
    );

    return this.reduxActions.findAll(companies, count);
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
