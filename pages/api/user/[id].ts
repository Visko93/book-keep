import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

import type { User } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.id as unknown as Pick<User, "id">;
  if (req.method === "GET") {
    handleGET(userId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

export const handleGET = async (id: Pick<User, "id">, res: NextApiResponse) => {
  const result = await db.user.findFirst({ where: { id: Number(id) } });
  res.json(result);
};
