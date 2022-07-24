import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

// POST /api/user
// Required fields in body: name, email
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await db.user.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
}
