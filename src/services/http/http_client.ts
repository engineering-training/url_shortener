import { IncomingHttpHeaders } from 'http';
import { HttpEngine, HttpEngineOptions, HttpMethod } from './http_engine';

export type HttpClientOptions = {
  queryParams?: Record<string, string>;
  customHeaders?: IncomingHttpHeaders;
};

export type HttpClientOpts = {
  customHttpEngine?: HttpEngine;
  customBaseUrl?: string;
};

export class HttpClient {
  // TODO: Set default HttpEngine
  private readonly engine: HttpEngine;
  private readonly baseUrl: string = '';

  constructor({ customHttpEngine, customBaseUrl }: HttpClientOpts) {
    this.engine = customHttpEngine || this.engine;
    this.baseUrl = customBaseUrl || this.baseUrl;
  }

  get<T>(path: string, options: HttpClientOptions = {}): Promise<T> {
    const url = this.generateUrl(path, options.queryParams);
    const headers = { ...this.getHeaders(), ...options.customHeaders };

    const requestOptions: HttpEngineOptions = {
      headers,
    };

    return this.engine.sendJson(url, HttpMethod.GET, requestOptions);
  }

  post<T>(
    path: string,
    data: Record<string | number, unknown> | unknown[],
    options: HttpClientOptions = {},
  ): Promise<T> {
    const url = this.generateUrl(path);
    const headers = { ...this.getHeaders(), ...options.customHeaders };

    const requestOptions: HttpEngineOptions = {
      headers,
    };

    return this.engine.sendJson(url, HttpMethod.GET, requestOptions, data);
  }

  private generateUrl(path: string, queryParams: Record<string, string> = {}): string {
    // TODO: Create url from path, base url and queryParams
    return ``;
  }

  private getHeaders(): IncomingHttpHeaders {
    const headers: IncomingHttpHeaders = {
      // TODO: Auth in the future
    };

    return headers;
  }
}
