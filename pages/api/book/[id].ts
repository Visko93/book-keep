import { db } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id as string;

  if (req.method === "GET") {
    handleGET(postId, res);
  } else if (req.method === "DELETE") {
    handleDELETE(postId, res);
  } else if (req.method === "PUT") {
    handlePUT(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/post/:id
async function handleGET(bookId: string, res: NextApiResponse) {
  const post = await db.book.findUnique({
    where: { id: Number(bookId) },
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
    where: { id: Number(bookId) },
  });
  res.json(post);
}

// PUT /api/post/:id
async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
  const { body, query } = req;
  const post = await db.book.delete({
    where: { id: Number(query.id) },
    include: { ...body },
  });
  res.json(post);
}
