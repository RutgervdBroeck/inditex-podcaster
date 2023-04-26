import Link from "@/components/atoms/link/Link";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">Podcaster</Link>
  </header>
);

export default Header;
