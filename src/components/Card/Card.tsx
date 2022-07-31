import type { Props } from "./Card.type"

import styles from "./style.module.css"

export function Card({ children, ...rest }: Props) {
  return (
    <li className={styles.card} {...rest}>
      {children}
    </li>
  )
}
