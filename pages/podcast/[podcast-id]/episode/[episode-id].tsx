import EpisodeDetail from "@/components/molecules/episode-detail/EpisodeDetail";
import ProfileAside from "@/components/molecules/profile-aside/ProfileAside";
import styles from "@/styles/Episode.module.css";
import { EpisodeEntry, PodcastEntry } from "@/utils/types";
import { GetServerSideProps } from "next";

interface EpisodePageProps {
  podcastData: PodcastEntry;
  episodeData: EpisodeEntry;
}

const EpisodePage = ({ podcastData, episodeData }: EpisodePageProps) => (
  <div className={styles.episode}>
    <ProfileAside
      imageSrc={podcastData.artworkUrl600}
      title={podcastData.collectionName}
      author={podcastData.artistName}
      description={podcastData.description}
    />
    <EpisodeDetail
      title={episodeData.trackName}
      description={episodeData.description}
      episodeSrc={episodeData.episodeUrl}
    />
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${query["podcast-id"]}&media=podcast&entity=podcastEpisode&limit=50`
  );
  const data = await request.json();

  return {
    props: {
      // TODO: Maybe format this data to what is only required on the podcast to display, since there is a lot more keys in the respose.
      podcastData: data.results[0],
      episodeData: data.results.filter(
        (episode: EpisodeEntry) => `${episode.trackId}` === query["episode-id"]
      )[0],
    },
  };
};

export default EpisodePage;
