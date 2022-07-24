import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bookId = req.query.id as string;

  if (req.method === "GET") {
    handleGET(bookId, res);
  } else if (req.method === "DELETE") {
    handleDELETE(bookId, res);
  } else if (req.method === "PUT") {
    handlePUT(bookId, req.body, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/post/:id
async function handleGET(bookId: string, res: NextApiResponse) {
  const post = await db.book.findUnique({
    where: { id: bookId },
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
  res.json(post);
}

// DELETE /api/post/:id
async function handleDELETE(bookId: string, res: NextApiResponse) {
  const post = await db.book.delete({
    where: { id: bookId },
  });
  res.json(post);
}

// PUT /api/post/:id
async function handlePUT(
  bookId: string,
  bookUpdate: any,
  res: NextApiResponse
) {
  const post = await db.book.update({
    where: { id: bookId },
    data: {
      ...bookUpdate,
    },
  });
  res.json(post);
}
