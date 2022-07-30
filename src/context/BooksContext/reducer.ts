import { actionTypes } from "./actions"
import { ReducerProps } from "./types"
import type { IBook, Props } from "./types"

export const initialState = {
  user: null,
  books: [],
}

export const booksReducer = (state: Props, { payload, type }: ReducerProps) => {
  switch (type) {
    case actionTypes.create: {
      const { data } = payload
      if (state.books.length === 0) {
        return { ...state, books: [data] }
      }
      return { ...state, books: [...state.books, data] }
    }

    case actionTypes.delete: {
      if (state.books.length === 0) return
      const { id } = payload
      const newBooksRecord = state.books.filter((book: IBook) => book.id !== id)
      return { ...state, books: newBooksRecord }
    }

    case actionTypes.update: {
      return { ...state }
    }
    case actionTypes.loading: {
      return { ...state }
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
