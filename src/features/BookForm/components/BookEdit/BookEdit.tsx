import { useState, ChangeEvent, FormEvent, useCallback, useMemo } from "react"
import { Modal } from "~/components"
import { useBooksContext } from "~/context/BooksContext"
import { Props } from "./BookEdit.types"
import styles from "./style.module.css"
import { ReadStatus } from "~/context/BooksContext/types"
import { actionTypes } from "~/context/BooksContext/actions"

export function BookEdit({ handleClose, id }: Props) {
  const { dispatch, state } = useBooksContext()
  const book = state.books.find((book) => book.id === id)
  const [{ author, finishedDate, rating, status, title }, setFormState] =
    useState(() => ({
      title: book?.title ?? "",
      author: book?.author ?? "",
      finishedDate: book?.finishedDate ?? "",
      rating: book?.rating ?? 0,
      status: book?.status ?? ReadStatus.TO_READ,
    }))

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
        type: actionTypes.update,
        payload: { id: id, data: bookData },
      })
      handleClose()
    } catch (error) {
      throw new Error("Failed to save new book.")
    }
  }

  const handleDelete = (id: string) => {
    try {
      dispatch({
        type: actionTypes.delete,
        payload: { id: id },
      })
      handleClose()
    } catch (error) {
      throw new Error("Failed to save new book.")
    }
  }

  const starRating = useMemo(() => Array(Number(rating)).fill(`⭐`), [rating])

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
        <label htmlFor="rating" className={styles.rate}>
          Rating:
          <input
            type="range"
            id="rating"
            name="rating"
            min={0}
            max={5}
            step={1}
            value={rating}
            onChange={handleChange}
          />
          <div>{starRating}</div>
        </label>
        <label htmlFor="readState">Status of this book:</label>
        <select id="readState" name="readState" onChange={handleStatusChange}>
          <option value={ReadStatus.TO_READ}>To read</option>
          <option value={ReadStatus.READING}>Reading</option>
          <option value={ReadStatus.READED}>Finished</option>
        </select>
        <label htmlFor="finishedDate">Finish Date:</label>
        <input
          type="date"
          id="finishedDate"
          name="finishedDate"
          defaultValue={finishedDate ?? new Date().toISOString()}
          onChange={handleChange}
          disabled={status !== ReadStatus.READED}
        />
        <div className={styles.actions}>
          <button onClick={() => handleDelete(id)} className={styles.button}>
            Delete
          </button>
          <button type="submit" className={styles.button}>
            Edit
          </button>
        </div>
      </form>
    </>
  )
}
