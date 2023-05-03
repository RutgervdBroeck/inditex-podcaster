import Link from "@/components/atoms/link/Link";
import styles from "./Header.module.css";
import RouteIndicator from "@/components/atoms/route-indicator/RouteIndicator";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">Podcaster</Link>
    <RouteIndicator />
  </header>
);

export default Header;
