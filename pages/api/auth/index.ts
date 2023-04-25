import type { NextApiRequest, NextApiResponse } from "next";
import { methods } from "micro-method-router";

// export default function poli(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method == "POST") {
//     res
//       .status(200)
//       .send(
//         "Recibe un email y encuentra/crea un user con ese email y le envía un código vía email."
//       );
//   } else {
//     res.status(405).send("Method not allowed");
//   }
// }

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    res
      .status(200)
      .json(
        "Recibe un email y encuentra/crea un user con ese email y le envía un código vía email."
      );
  },
  async post(req: NextApiRequest, res: NextApiResponse) {
    res
      .status(200)
      .send(
        "Recibe un email y encuentra/crea un user con ese email y le envía un código vía email."
      );
  },
});
