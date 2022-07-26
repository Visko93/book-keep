import type { Props } from "./NavUser.type";

import styles from "./style.module.css";
export function NavUser({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.avatar}>XX</div>
        <h2 className="button">John Doe</h2>
      </div>
      <button className="logout">Logout</button>
    </div>
  );
}
