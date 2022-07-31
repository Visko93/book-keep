import { Modal } from "~/components"
import { useBooksContext } from "~/context/BooksContext"
import { Props } from "./BookForm.types"
import { BookEdit } from "./components/BookEdit"
import { BookCreate } from "./components/BookCreate"

export default function BookForm({ handleClose, isOpen, id }: Props) {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen}>
      {id ? (
        <BookEdit handleClose={handleClose} id={id} />
      ) : (
        <BookCreate handleClose={handleClose} />
      )}
    </Modal>
  )
}
