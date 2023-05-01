import ProfileAside from "@/components/molecules/profile-aside/ProfileAside";
import styles from "@/styles/Podcast.module.css";
import { GetServerSideProps } from "next";

type PodcastEntry = {
  artistId: number;
  artistName: string;
  collectionName: string;
  artworkUrl600: string;
  description: string;
};

interface PodcastPageProps {
  podcastData: PodcastEntry[];
}

const PodcastPage = ({ podcastData }: PodcastPageProps) => {
  const asideData = podcastData[0];

  return (
    <div className={styles.podcast}>
      <ProfileAside
        imageSrc={asideData.artworkUrl600}
        title={asideData.collectionName}
        author={asideData.artistName}
        description={asideData.description}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${query.id}&media=podcast&entity=podcastEpisode&limit=30`
  );
  const data = await request.json();

  return {
    props: {
      // TODO: Maybe format this data to what is only required on the podcast to display.
      podcastData: data.results,
    },
  };
};

export default PodcastPage;
