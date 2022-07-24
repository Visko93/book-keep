import type { Props } from "./Nav.type";

import styles from "./style.module.css";
export function Nav({ children }: Props) {
  return <nav className={styles.nav}>{children}</nav>;
}
