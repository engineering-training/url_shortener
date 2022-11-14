import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpError, HttpResponse } from 'services/http/http_response';

export type MiddlewareEvent = (req: NextApiRequest, res: NextApiResponse) => void;
export type MiddlewareErrorEvent = (
  error: Error,
  req: NextApiRequest,
  res: NextApiResponse,
) => void;

export type MiddlewareFunctionReturnType = {
  onInvoke?: MiddlewareEvent;
  onInvokeEnd?: MiddlewareEvent;
  onError?: MiddlewareErrorEvent;
};

export type MiddlewareFunction = () => MiddlewareFunctionReturnType;

export type HandlerFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
) => HttpResponse | HttpError;

export const middleware = (handler: HandlerFunction, middlewares: MiddlewareFunction[]) => {
  let handlerWithMiddlewares = handler;
  let tempMiddleware = handler;

  for (const middlewareFunction of middlewares) {
    const { onInvoke, onError, onInvokeEnd } = middlewareFunction();

    handlerWithMiddlewares = (req: NextApiRequest, res: NextApiResponse) => {
      let httpResponse = new HttpResponse();

      try {
        if (onInvoke) onInvoke(req, res);

        httpResponse = tempMiddleware(req, res);

        if (onInvokeEnd) onInvokeEnd(req, res);
      } catch (err) {
        if (onError) onError(err, req, res);
        else throw err;
      }

      return httpResponse;
    };

    tempMiddleware = handlerWithMiddlewares;
  }

  return handlerWithMiddlewares;
};
