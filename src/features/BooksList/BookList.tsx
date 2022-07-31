import { useEffect } from "react"
import { useBooksContext } from "~/context/BooksContext"
import { actionTypes } from "~/context/BooksContext/actions"
import { IBook } from "~/context/BooksContext/types"
import { fecthBooks } from "~/services/books.server"
import { Props } from "./BookList.types"
import { BookCard } from "./components/BookCard"
import styles from "./style.module.css"

export default function BookList({ handleOpen, handleCurrentId }: Props) {
  const { state, dispatch } = useBooksContext()

  const handleEdit = (id: string) => {
    handleCurrentId(id)
    handleOpen()
  }

  const handleDelete = (id: string) => {
    dispatch({
      type: actionTypes.delete,
      payload: { id },
    })
  }
  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <ul>
        {state?.books.map((book: IBook) => (
          <BookCard
            key={book.id}
            data={book}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}
