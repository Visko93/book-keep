import { Card } from "~/components/Card"
import { useBooksContext } from "~/context/BooksContext"
import { IBook } from "~/context/BooksContext/types"
import { BookCard } from "./components/BookCard"
import styles from "./style.module.css"

export default function BookList() {
  const { state } = useBooksContext()

  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <ul>
        {state?.books.map((book: IBook) => (
          <BookCard key={book.id} data={book} />
        ))}
      </ul>
    </div>
  )
}
