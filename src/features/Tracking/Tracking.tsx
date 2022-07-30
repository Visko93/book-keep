import { Nav } from "~/components"
import styles from "./style.module.css"
import { NavDetail, NavUser } from "./components"

export default function Tracking() {
  return (
    <div className={styles.container}>
      <Nav>
        <NavUser></NavUser>
        <NavDetail></NavDetail>
      </Nav>
    </div>
  )
}
