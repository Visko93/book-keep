import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    handleGET(req, res);
  } else if (req.method === "DELETE") {
    handlePOST(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// POST /api/book
// Required fields in body: title, author, userId
// Optional fields in body: content
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, userId } = req.body;
  const result = await db.book.create({
    data: {
      title,
      author,
      userId,
    },
  });
  res.json(result);
}

// GET /api/book
// Required fields in body: userId
async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body;
  const result = await db.book.findMany({
    where: { userId },
  });
  res.json(result);
}
