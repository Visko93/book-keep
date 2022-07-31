import { IBook } from "~/context/BooksContext/types"

export type Props = {
  data: Pick<
    IBook,
    "author" | "rating" | "title" | "user" | "createdAt" | "status" | "id"
  >
  handleEdit: (id: string) => void
}
