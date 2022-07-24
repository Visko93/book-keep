import type { Props } from "./NavUser.type";

import styles from "./style.module.css";
export function NavUser({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className="avatar"></div>
      <button className="button"></button>
    </div>
  );
}
