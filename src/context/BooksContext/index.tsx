import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react"
import { fecthBooks } from "~/services/books.server"
import { actionTypes } from "./actions"
import { booksReducer, initialState } from "./reducer"
import type { BooksContextValue, IBook, Props, ReducerProps } from "./types"

type BooksContextProps = {
  children: React.ReactElement
}

const BooksContext = createContext<BooksContextValue>({
  state: initialState,
  dispatch: () => null,
})
BooksContext.displayName = "Books Context"

function BooksContextProvider({ children }: BooksContextProps) {
  const [state, dispatch] = useReducer(booksReducer, initialState)

  useEffect(() => {
    // prettier-ignore
    (async () => {
      const books = await fecthBooks()
      dispatch({ type: actionTypes.firstLoad, payload: { data: books } })
    })()
  }, [])
  console.log(state)

  const value = { state, dispatch }

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

function useBooksContext() {
  const context = useContext(BooksContext)

  if (!context) {
    throw new Error(
      "useBooksContext must be wrapped in a BooksContextProvider provider"
    )
  }

  return context
}

export { useBooksContext, BooksContextProvider }
