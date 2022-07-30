import { useBooksContext } from "~/context/BooksContext"
import { IBook } from "~/context/BooksContext/types"
import styles from "./style.module.css"

export default function BookList() {
  const { state } = useBooksContext()

  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <ul>
        {state?.books.map((book: IBook) => (
          <li key={book.id}>
            <div>
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
              <span>{book.status}</span>
            </div>
            <div>{book.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
