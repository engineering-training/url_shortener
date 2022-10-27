import type { NextApiRequest, NextApiResponse } from "next";

export const urlShortenerHandler = (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  response.status(200).json({ fooo: "bar" });
};
