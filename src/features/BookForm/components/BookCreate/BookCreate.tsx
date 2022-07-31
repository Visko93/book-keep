import { useState, ChangeEvent, FormEvent } from "react"
import { Modal } from "~/components"
import { useBooksContext } from "~/context/BooksContext"
import { Props } from "./BookCreate.types"
import styles from "./style.module.css"
import { ReadStatus } from "~/context/BooksContext/types"
import { actionTypes } from "~/context/BooksContext/actions"

const INITAL_FORM_STATE = {
  title: "",
  author: "",
  finishedDate: "",
  rating: 0,
  status: ReadStatus.TO_READ,
}

export function BookCreate({ handleClose }: Props) {
  const { dispatch } = useBooksContext()
  const [{ author, finishedDate, rating, status, title }, setFormState] =
    useState(() => INITAL_FORM_STATE)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    if (type === "number") {
      setFormState((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }))
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: String(value),
    }))
  }

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      status: value as unknown as ReadStatus,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const bookData = {
      author,
      title,
      finishedDate: finishedDate !== "" ? finishedDate : null,
      rating: rating !== 0 ? rating : 0,
      status,
      createdAt: new Date().toISOString(),
    }

    try {
      dispatch({
        type: actionTypes.create,
        payload: { data: bookData },
      })
      setFormState(INITAL_FORM_STATE)
      handleClose()
    } catch (error) {
      throw new Error("Failed to save new book.")
    }
  }

  return (
    <>
      <div>
        <h1>Book Registration</h1>
      </div>
      <hr />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={title}
          onChange={handleChange}
        />
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          name="author"
          defaultValue={author}
          onChange={handleChange}
        />
        <label htmlFor="readState">Status of this book:</label>
        <select id="readState" name="readState" onChange={handleStatusChange}>
          <option value={ReadStatus.TO_READ}>To read</option>
          <option value={ReadStatus.READING}>Reading</option>
          <option value={ReadStatus.READED}>Finished</option>
        </select>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </>
  )
}
