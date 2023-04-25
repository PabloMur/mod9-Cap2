import type { NextApiRequest, NextApiResponse } from "next";
import { method } from "micro-method-router";

export default method({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json("prod");
  },
});
