import styles from "./EpisodeDetail.module.css";

interface EpisodeDetailProps {
  title: string;
  description: string;
  episodeSrc: string;
}

const EpisodeDetail = ({
  title,
  description,
  episodeSrc,
}: EpisodeDetailProps) => (
  <div className={styles.episodeDetail}>
    <h1 className={styles.title}>{title}</h1>
    <p
      dangerouslySetInnerHTML={{ __html: description }}
      className={styles.description}
    />
    <audio controls>
      <source src={episodeSrc} />
    </audio>
  </div>
);

export default EpisodeDetail;
