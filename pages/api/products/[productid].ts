import type { NextApiRequest, NextApiResponse } from "next";
import { methods } from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
      product: true,
    });
  },
});
