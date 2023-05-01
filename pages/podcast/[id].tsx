import PodcastItem from "@/components/molecules/podcast-item/PodcastItem";
import ProfileAside from "@/components/molecules/profile-aside/ProfileAside";
import PodcastList from "@/components/organisms/podcast-list/PodcastList";
import styles from "@/styles/Podcast.module.css";
import { formatDate, formatMilliseconds } from "@/utils/helpers";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type PodcastEntry = {
  artistId: number;
  artistName: string;
  collectionName: string;
  artworkUrl600: string;
  description: string; // TODO: The description doesn't seem to be there in the response?
};

type EpisodeEntry = {
  trackId: string;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
};

interface PodcastPageProps {
  asideData: PodcastEntry;
  episodesData: EpisodeEntry[];
}

const PodcastPage = ({ asideData, episodesData }: PodcastPageProps) => {
  const router = useRouter();

  return (
    <div className={styles.podcast}>
      <ProfileAside
        imageSrc={asideData.artworkUrl600}
        title={asideData.collectionName}
        author={asideData.artistName}
        description={asideData.description}
      />
      <PodcastList>
        {episodesData.map(
          ({ trackId, trackName, releaseDate, trackTimeMillis }, id) => (
            <PodcastItem
              key={id}
              title={trackName}
              href={`${router.asPath}/episode/${trackId}`}
              date={formatDate(releaseDate)}
              duration={formatMilliseconds(trackTimeMillis)}
            />
          )
        )}
      </PodcastList>
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
      asideData: data.results[0],
      episodesData: data.results.slice(1, data.results.length),
    },
  };
};

export default PodcastPage;
