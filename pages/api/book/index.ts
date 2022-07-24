import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    handleGET(req, res);
  } else if (req.method === "POST") {
    handlePOST(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// POST /api/book
// Required fields in body: title, author, userId
async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, userId } = req.body;
  const result = await db.book.create({
    data: {
      title,
      author,
      userId,
      status: "TO_READ",
    },
  });
  res.json(result);
}

// GET /api/book
async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  debugger;
  const result = await db.book.findMany({
    select: {
      author: true,
      finished: true,
      finishedDate: true,
      id: true,
      onProgress: true,
      rating: true,
      status: true,
      title: true,
    },
  });
  res.json(result);
}
