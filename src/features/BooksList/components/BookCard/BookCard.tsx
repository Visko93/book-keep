import { Card } from "~/components"
import { Props } from "./BookCard.types"
import styles from "./style.module.css"

export function BookCard({
  data: { author, title, createdAt, rating, status, user, id },
  handleEdit,
  handleDelete,
  ...rest
}: Props) {
  return (
    <Card {...rest}>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className={styles.rating}>
            {new Array(Number(rating)).fill(`⭐`)}
          </div>
        </div>
        <div className={styles.actions}>
          <div>
            <button
              onClick={() => handleEdit(id as string)}
              style={{ marginRight: "1rem", backgroundColor: "InfoBackground" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(id as string)}
              style={{ backgroundColor: "darkred" }}
            >
              Delete
            </button>
          </div>
          <span className={styles.status}>{status}</span>
        </div>
      </div>
    </Card>
  )
}
