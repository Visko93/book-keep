import { Card } from "~/components/Card"
import type { Props } from "./BookCard"

import styles from "./style.module.css"
export function BookCard({
  data: { author, title, createdAt, rating, status, user },
  ...rest
}: Props) {
  return (
    <Card {...rest}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className={styles.rating}>{rating}</div>
        </div>
        <div className={styles.actions}>
          <button>Edit</button>
          <span className={styles.status}>{status}</span>
        </div>
      </div>
    </Card>
  )
}
