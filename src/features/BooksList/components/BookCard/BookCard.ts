import { ComponentPropsWithoutRef } from "react"
import { Props as CardProps } from "src/components/Card/Card.type"
import { IBook } from "~/context/BooksContext/types"

export interface Props extends CardProps {
  data: Pick<
    IBook,
    "author" | "rating" | "title" | "user" | "createdAt" | "status"
  >
}
