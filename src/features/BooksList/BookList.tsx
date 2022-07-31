import { useBooksContext } from "~/context/BooksContext"
import { IBook } from "~/context/BooksContext/types"
import { Props } from "./BookList.types"
import { BookCard } from "./components/BookCard"
import styles from "./style.module.css"

export default function BookList({ handleOpen, handleCurrentId }: Props) {
  const { state } = useBooksContext()

  const handleEdit = (id: string) => {
    handleCurrentId(id)
    handleOpen()
  }
  return (
    <div className={styles.container}>
      <h1>Book List</h1>
      <ul>
        {state?.books.map((book: IBook) => (
          <BookCard key={book.id} data={book} handleEdit={handleEdit} />
        ))}
      </ul>
    </div>
  )
}
