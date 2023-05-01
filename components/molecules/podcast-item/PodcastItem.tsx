import Link from "next/link";
import styles from "./PodcastItem.module.css";

interface PodcastItemProps {
  title: string;
  href: string;
  date: string;
  duration: string;
}

const PodcastItem = ({ title, href, date, duration }: PodcastItemProps) => (
  <li className={styles.item}>
    <Link href={href}>{title}</Link>
    <span className={styles.date}>{date}</span>
    <span className={styles.duration}>{duration}</span>
  </li>
);

export default PodcastItem;
