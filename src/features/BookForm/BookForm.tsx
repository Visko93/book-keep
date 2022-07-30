import React, { SelectHTMLAttributes, useState } from "react"
import { Modal } from "~/components"
import { useBooksContext } from "~/context/BooksContext"
import { Props } from "./BookForm.types"
import styles from "./style.module.css"
import { ReadStatus } from "~/context/BooksContext/types"
import { actionTypes } from "~/context/BooksContext/actions"

export default function BookForm({ handleClose, isOpen }: Props) {
  const { dispatch } = useBooksContext()
  const [{ author, finishedDate, rating, status, title }, setFormState] =
    useState(() => ({
      title: "",
      author: "",
      finishedDate: "",
      rating: 0,
      status: ReadStatus.TO_READ,
    }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      status: value as unknown as ReadStatus,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const bookData = {
      author,
      title,
      finishedDate: finishedDate !== "" ? finishedDate : null,
      rating: rating !== 0 ? rating : 0,
      status,
      createdAt: new Date().toISOString(),
    }
    dispatch({
      type: actionTypes.create,
      payload: { data: bookData },
    })
  }

  return (
    <Modal handleClose={handleClose} isOpen={isOpen}>
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
    </Modal>
  )
}
