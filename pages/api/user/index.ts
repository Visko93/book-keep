import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

import type { User } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    handlePOST(req, res);
  } else if (req.method === "GET") {
    handleGET(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// POST /api/user
// Required fields in body: name, email
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;
  const result = await db.user.create({
    data: {
      email,
      name,
    },
  });
  res.json(result);
}

// GET /api/user
export const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await db.user.findMany({
    select: { name: true, books: true, email: true, id: true },
  });
  res.json(result);
};
