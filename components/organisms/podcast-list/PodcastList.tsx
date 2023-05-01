import { PropsWithChildren } from "react";
import styles from "./PodcastList.module.css";

const PodcastList = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <span className={styles.title}>Title</span>
      <span className={styles.date}>Date</span>
      <span className={styles.duration}>Duration</span>
    </div>
    <ul className={styles.list}>{children}</ul>
  </div>
);

export default PodcastList;
