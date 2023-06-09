import PodcastItem from "@/components/molecules/podcast-item/PodcastItem";
import ProfileAside from "@/components/molecules/profile-aside/ProfileAside";
import PodcastList from "@/components/organisms/podcast-list/PodcastList";
import styles from "@/styles/Podcast.module.css";
import { formatDate, formatMilliseconds } from "@/utils/helpers";
import { EpisodeEntry, PodcastEntry } from "@/utils/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface PodcastPageProps {
  podcastData: PodcastEntry;
  episodesData: EpisodeEntry[];
}

const PodcastPage = ({ podcastData, episodesData }: PodcastPageProps) => {
  const router = useRouter();

  return (
    <div className={styles.podcast}>
      <ProfileAside
        imageSrc={podcastData.artworkUrl600}
        title={podcastData.collectionName}
        author={podcastData.artistName}
        description={podcastData.description} // TODO: The description doesn't seem to be in the first item of the response?
        profileSlug={router.asPath}
      />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Episodes: {episodesData.length}</h1>
        </div>
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=59"
  );

  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${query["podcast-id"]}&media=podcast&entity=podcastEpisode&limit=50`
  );
  const data = await request.json();

  if (!data) {
    console.warn("Required page data is missing");
  }

  return {
    props: {
      // TODO: Maybe format this data to what is only required on the podcast to display, since there is a lot more keys in the respose.
      podcastData: data?.results[0] || undefined,
      episodesData: data?.results.slice(1, data.results.length) || undefined,
    },
  };
};

export default PodcastPage;
