type Actions = {
  id?: string
  data?: Partial<IBook>
  status?: ReadStatus
  loading?: boolean
  error?: boolean | Error
}

export enum ReadStatus {
  TO_READ = "TO_READ",
  READING = "READING",
  READED = "READED",
}

type Props = { user: IUser | null; books: IBook[] | [] }

type IUser = {
  id: string
  email: string
  name: string
  createdAt?: string | null
  books?: IBook[]
}

type IBook = {
  id: string | null
  title: string
  author: string | null
  createdAt?: string | null
  finished?: boolean
  onProgress?: boolean
  finishedDate?: string
  rating?: number
  status?: ReadStatus
  user?: IUser
}

type ReducerProps = {
  type: string
  payload: Actions
}

type BooksContextValue = {
  state: Props
  dispatch: React.Dispatch<any>
}

export type { ReducerProps, Props, IBook, IUser, BooksContextValue }
