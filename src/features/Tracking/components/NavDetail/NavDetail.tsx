import type { Props } from "./NavDetail.type";

import styles from "./style.module.css";
export function NavDetail({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <span className={styles.icon}>X</span>
        <h4 className={styles.value}>64</h4>
      </div>
      <div className={styles.detail}>
        <span className={styles.icon}>X</span>
        <h4 className={styles.value}>02</h4>
      </div>
    </div>
  );
}
