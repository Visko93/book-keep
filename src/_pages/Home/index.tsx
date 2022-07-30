import * as React from "react"
import { Tracking } from "~/features/Tracking"
import Head from "next/head"
import styles from "~/styles/Home.module.css"
import { useRouter } from "next/router"
import { BookForm } from "~/features/BookForm"
import { BookList } from "~/features/BooksList"

export function Home() {
  let navigate = useRouter()
  const [bookForm, setBookForm] = React.useState(false)

  const handleProfileOpen = () => {
    setBookForm(true)
    // navigate.push("/profile/" + id, { });
  }

  const handleProfileClose = () => {
    setBookForm(false)
    // navigate.push("/");
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
            <button className="button" onClick={handleProfileOpen}>
              Register a new book
            </button>
          </div>
          <BookList />
        </main>

        <footer className={styles.footer}></footer>
      </div>
      <BookForm isOpen={bookForm} handleClose={handleProfileClose} />
    </>
  )
}
