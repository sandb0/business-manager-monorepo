import HTTPStatusCode from './HTTPStatusCode';

export type HTTPResponse<T = undefined> = {
  success?: T;
  error?: {
    messages: string[];
  };
};

export type AbstractResponse<T = undefined> = {
  statusCode: HTTPStatusCode;
  response: HTTPResponse<T>;
};
