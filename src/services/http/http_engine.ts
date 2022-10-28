import type { IncomingHttpHeaders } from 'http';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}

export type HttpEngineOptions = {
  headers?: IncomingHttpHeaders;
};

export interface HttpEngine {
  sendJson: <T>(
    url: string,
    method: HttpMethod,
    options?: HttpEngineOptions,
    body?: Record<string | number, unknown> | unknown[],
  ) => Promise<T>;
}
