import type { NextApiRequest, NextApiResponse } from "next";
import { send } from "micro";
import { methods, get } from "micro-method-router";

export default methods(
  get(async (req, res) => {
    const data = {
      message:
        "Este es un ejemplo de endpoint GET con micro-method-router y TypeScript",
    };
    send(res, 200, data);
  })
);
