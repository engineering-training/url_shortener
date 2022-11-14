import { HttpStatusCode } from './http_status_code';
import type { IncomingHttpHeaders } from 'http';

const BASE_HEADERS: IncomingHttpHeaders = {
  'content-type': 'application/json',
};

export type HttpResponseSettings = {
  statusCode?: HttpStatusCode | number;
  headers?: IncomingHttpHeaders;
};

export type HttpResponseBody = {
  isError: boolean;
  errorMessage?: string;
  data?: unknown;
};

export interface HttpResponseBase {
  body: string;
  statusCode: HttpStatusCode | number;
  headers: IncomingHttpHeaders;
}

/**
 * A group of settings used to increase the scalability and clarity of response.
 *
 * @example
 * // simple response
 * return new HttpResponse(
 *      { foo: 'bar' },
 * }
 *
 * // response with settings
 * return new HttpResponse(
 *      { foo: 'bar' },
 *      { statusCode: HttpStatusCode.ACCEPTED }
 * );
 *
 * @see {@link https://www.ibm.com/docs/en/cics-ts/5.2?topic=protocol-http-responses}
 */
export class HttpResponse implements HttpResponseBase {
  /**
   * The response body contains stringified data that could be sent by the API endpoint to your client.
   * The body includes data of type HttpResponseBody.
   * @see {@link https://en.wikipedia.org/wiki/HTTP_message_body}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify}
   */
  body: string;
  /**
   * The response status code indicate whether a specific HTTP request has been successfully completed.
   * The default status code is 200 and it is not recommanded to change.
   * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
   */
  statusCode: HttpStatusCode | number = HttpStatusCode.OK;

  /**
   * The response headers are an HTTP headers that can be used in an HTTP response and that doesn't relate to the content of the message.
   * Response headers are used to give a more detailed context of the response.
   * The headers contains 'content-type': 'application/json' by default.
   * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Response_header}
   */
  headers: IncomingHttpHeaders = BASE_HEADERS;

  constructor(body?: unknown, options?: HttpResponseSettings) {
    this.statusCode = options?.statusCode || this.statusCode;

    const customHeaders = options?.headers || {};

    this.headers = {
      ...this.headers,
      ...customHeaders,
    };

    const customBody: HttpResponseBody = {
      isError: false,
      data: body,
    };

    this.body = JSON.stringify(customBody);
  }
}

/**
 * It is the response error helper class to unify and simplify work with API communication.
 *
 * An HTTP response is made by a server to a client.
 * The aim of the response is to provide the client with the resource it requested,
 * or inform the client that the action it requested has been carried out.
 *
 * @example
 * // simple response
 * return new HttpError('Parameter `Foo` is not valid!');
 *
 * // response with settings
 * return new HttpError(
 *      'Parameter `Foo` is not valid!',
 *      { statusCode: HttpStatusCode.BAD_REQUEST }
 * );
 *
 * @see {@link https://www.ibm.com/docs/en/cics-ts/5.2?topic=protocol-http-responses}
 */
export class HttpError implements HttpResponseBase {
  /**
   * The response body contains stringified data that could be sent by the API endpoint to your client.
   * The body includes data of type HttpResponseBody.
   * @see {@link https://en.wikipedia.org/wiki/HTTP_message_body}
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify}
   */
  body: string;

  /**
   * The response status code indicate whether a specific HTTP request has been successfully completed.
   * The default status code is 400 and it is not recommanded to change.
   * @see {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}
   */
  statusCode: HttpStatusCode | number = HttpStatusCode.BAD_REQUEST;

  /**
   * The response headers are an HTTP headers that can be used in an HTTP response and that doesn't relate to the content of the message.
   * Response headers are used to give a more detailed context of the response.
   * The headers contains 'Access-Control-Allow-Origin': '*' by default.
   * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Response_header}
   */
  headers: IncomingHttpHeaders = BASE_HEADERS;

  constructor(message?: string, options?: HttpResponseSettings) {
    this.statusCode = options?.statusCode || this.statusCode;

    const customHeaders = options?.headers || {};

    this.headers = {
      ...this.headers,
      ...customHeaders,
    };

    const customBody: HttpResponseBody = {
      isError: true,
      errorMessage: message,
    };

    this.body = JSON.stringify(customBody);
  }
}
