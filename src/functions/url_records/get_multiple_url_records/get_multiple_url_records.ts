import { HttpStatusCode } from 'services/http/http_status_code';

import type { NextApiRequest, NextApiResponse } from 'next';

export const getMultipleUrlRecords = (request: NextApiRequest, response: NextApiResponse) => {
  response.status(HttpStatusCode.OK).json({ fooo: 'bar' });
};
