type HTTPResponse<T> = {
  success: T;
  error: {
    messages: string[];
  };
};

type AbstractResponse<T> = {
  statusCode: 200;
  response: HTTPResponse<T>;
};

type CompanyHTTPRequestData = {
  id?: number;
};

type CompanyDTO = {
  id: number;
};

export default class CompanyController {
  public async save(
    requestData: CompanyHTTPRequestData
  ): Promise<AbstractResponse<CompanyDTO>> {
    const companyDTO: CompanyDTO = { id: requestData.id || 0 };

    return {
      statusCode: 200,
      response: { success: companyDTO, error: { messages: [''] } },
    };
  }
}
