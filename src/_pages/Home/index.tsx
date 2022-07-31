import { useEffect, useMemo, useState } from "react"
import Head from "next/head"
import { Tracking } from "~/features/Tracking"
import { BookForm } from "~/features/BookForm"
import { BookList } from "~/features/BooksList"
import { useModal } from "~/hooks/useModal"
import styles from "~/styles/Home.module.css"
import { fecthBooks } from "~/services/books.server"
import { useBooksContext } from "~/context/BooksContext"

export function Home() {
  const [id, setId] = useState<string | undefined>()
  const { open, handleOpen, handleClose } = useModal(id)

  useEffect(() => {
    if (open === false) {
      setId(undefined)
    }
  }, [open])

  const handleCurrentId = (id: string) => {
    setId(id)
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Book Keeper</title>
          <meta name="description" content="Book keeper | Tracking" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Tracking />
          <hr />
          <div>
            <button className="button" onClick={handleOpen}>
              Register a new book
            </button>
          </div>
          <BookList handleOpen={handleOpen} handleCurrentId={handleCurrentId} />
        </main>

        <footer className={styles.footer}></footer>
      </div>
      <BookForm isOpen={open} handleClose={handleClose} id={id} />
    </>
  )
}
