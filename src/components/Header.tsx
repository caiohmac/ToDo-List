import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <h1 
        className={styles.header}>
            My Todo List
        </h1>
    </header>
  )
}