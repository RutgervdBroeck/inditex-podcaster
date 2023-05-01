import styles from "@/styles/Podcast.module.css";
import { GetServerSideProps } from "next";

interface PodcastPageProps {
  podcastData: any;
}

const PodcastPage = ({ podcastData }: PodcastPageProps) => {
  console.log(podcastData);
  return <div className={styles.podcast}></div>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${query.id}&media=podcast&entity=podcastEpisode&limit=30`
  );
  const data = await request.json();

  return {
    props: {
      // TODO: Maybe format this data to what is only required on the podcast to display.
      podcastData: data,
    },
  };
};

export default PodcastPage;
