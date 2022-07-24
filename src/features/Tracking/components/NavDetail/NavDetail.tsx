import type { Props } from "./NavDetail.type";

import styles from "./style.module.css";
export function NavDetail({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className="detail">
        <span className="icon">X</span>
        <h4 className="value">64</h4>
      </div>
      <div className="detail">
        <span className="icon">X</span>
        <h4 className="value">02</h4>
      </div>
    </div>
  );
}
