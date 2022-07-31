import { actionTypes } from "./actions"
import { ReducerProps } from "./types"
import { v4 as uuid } from "uuid"
import type { IBook, Props } from "./types"

export const initialState = {
  user: null,
  books: [],
}

export const booksReducer = (state: Props, { payload, type }: ReducerProps) => {
  switch (type) {
    case actionTypes.create: {
      const { data } = payload
      const id = uuid()
      if (state.books.length === 0) {
        return { ...state, books: [{ id: String(id), ...data }] }
      }
      return {
        ...state,
        books: [...state.books, { id: String(id), ...data }],
      }
    }

    case actionTypes.delete: {
      if (state.books.length === 0) return
      const { id } = payload
      const newBooksRecord = state.books.filter((book: IBook) => book.id !== id)
      return { ...state, books: newBooksRecord }
    }

    case actionTypes.update: {
      const { data, id } = payload
      const updatedBookRecord = state.books.map((book: IBook) =>
        book.id === id ? { ...book, ...data } : book
      )
      return { ...state, books: updatedBookRecord }
    }
    case actionTypes.loading: {
      return { ...state }
    }
    case actionTypes.firstLoad: {
      return { ...state, books: payload.data }
    }
    case actionTypes.error: {
      return {
        ...state,
      }
    }
    case actionTypes.reset: {
      return { ...initialState }
    }
    default: {
      throw new Error(`Unsupported type: ${type}`)
    }
  }
}
