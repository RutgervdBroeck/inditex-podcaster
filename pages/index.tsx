import styles from "@/styles/Index.module.css";
import SearchBox from "@/components/molecules/search-box/SearchBox";
import { GetServerSideProps } from "next";
import { useCallback, useMemo, useState } from "react";
import { filterPlaylistData } from "@/utils/helpers";

// TODO: Check where this interface needs to move to.
export type PlaylistEntry = {
  title: {
    label: string;
  };
  "im:artist": PlaylistAuthorEntry;
  "im:image": [PlaylistImageEntry, PlaylistImageEntry, PlaylistImageEntry];
};

type PlaylistKeyEntry = {
  label: string;
};

type PlaylistImageEntry = PlaylistKeyEntry & {
  attributes: {
    height: string;
  };
};

type PlaylistAuthorEntry = PlaylistKeyEntry & {
  attributes: {
    href: string;
  };
};

type PlaylistResponseData = {
  feed: {
    entry: PlaylistEntry[];
  };
};

interface HomePageProps {
  playlistData: PlaylistEntry[];
}

const Home = ({ playlistData }: HomePageProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchBoxSubmit = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);
  const filteredPlaylistData = useMemo(
    () => filterPlaylistData(playlistData, searchQuery),
    [playlistData, searchQuery]
  );

  console.log({ searchQuery, filteredPlaylistData });

  return (
    <div className={styles.index}>
      <div className={styles.searchBoxContainer}>
        <SearchBox
          resultCount={filteredPlaylistData.length}
          onSubmit={handleSearchBoxSubmit}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  const data: PlaylistResponseData = await request.json();

  return {
    props: {
      // TODO: Maybe format this data to what is only required on the homepage to display.
      playlistData: data.feed.entry,
    },
  };
};

export default Home;
