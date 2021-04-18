import { AbstractResponse } from './AbstractRespose';
import HTTPStatusCode from './HTTPStatusCode';

export default class AbstractController {
  protected async ok<T>(response: T): Promise<AbstractResponse<T>> {
    return {
      statusCode: HTTPStatusCode.Ok,
      response: { success: response },
    };
  }

  protected async serverError(): Promise<AbstractResponse> {
    return {
      statusCode: HTTPStatusCode.ServerError,
      response: {},
    };
  }
}
