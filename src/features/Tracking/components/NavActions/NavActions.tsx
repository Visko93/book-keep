import type { Props } from "./NavActions.type";

import styles from "./style.module.css";
export function NavActions({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className="avatar"></div>
      <button className="button"></button>
    </div>
  );
}
