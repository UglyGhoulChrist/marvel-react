import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a
          href="https://www.marvel.com/"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          © Marvel
        </a>
      </nav>
    </header>
  );
}

export default Header;
