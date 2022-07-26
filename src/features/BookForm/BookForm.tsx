import { Modal } from "~/components";
import { Props } from "./BookForm.types";
import styles from "./style.module.css";

export default function BookForm({ handleClose, isOpen }: Props) {
  return (
    <Modal handleClose={handleClose} isOpen={isOpen}>
      <div>
        <h1>Book Registration</h1>
      </div>
      <hr />
      <form>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="author">Autor:</label>
        <input type="text" id="author" name="author" />
        <button type="submit">Register</button>
      </form>
    </Modal>
  );
}
