import type { Props } from "./NavActions.type";

import styles from "./style.module.css";
export function NavActions({ children }: Props) {
  return (
    <div className={styles.container}>
      <button className="button">Register a new book</button>
    </div>
  );
}
