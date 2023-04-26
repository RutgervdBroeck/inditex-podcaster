import styles from "./Badge.module.css";

interface BadgeProps {
  children: string;
}

const Badge = ({ children }: BadgeProps) => (
  <span className={styles.badge}>{children}</span>
);

export default Badge;
