import * as React from "react";
import { Key } from "readline";
import type { Props } from "./Modal.type";

import styles from "./style.module.css";

export function Modal({ children, isOpen, handleClose }: Props) {
  React.useEffect(() => {
    const closeOnEscapeKey = (event: KeyboardEvent) =>
      event.key === "Escape" ? handleClose() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey, false);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey, false);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <>
      <dialog className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalClose}>
            <button onClick={handleClose}>x</button>
          </div>
          {children}
        </div>
      </dialog>
      <div className={styles.modalBackdrop}></div>
    </>
  );
}
