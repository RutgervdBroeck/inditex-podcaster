import styles from "@/styles/Index.module.css";
import SearchBox from "@/components/molecules/search-box/SearchBox";
import { GetServerSideProps } from "next";
import { useCallback, useMemo, useState } from "react";
import { filterPlaylistData } from "@/utils/helpers";
import TileList from "@/components/organisms/tile-list/TileList";
import Tile from "@/components/molecules/tile/Tile";

// TODO: Check where these interfaces and types needs to move to..
export type PlaylistEntry = {
  title: {
    label: string;
  };
  id: PlaylistIDEntry;
  "im:artist": PlaylistAuthorEntry;
  "im:image": [PlaylistImageEntry, PlaylistImageEntry, PlaylistImageEntry];
};

type PlaylistKeyEntry = {
  label: string;
};

type PlaylistIDEntry = PlaylistKeyEntry & {
  attributes: {
    "im:id": string;
  };
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

  return (
    <div className={styles.index}>
      <div className={styles.searchBoxContainer}>
        <SearchBox
          resultCount={filteredPlaylistData.length}
          onSubmit={handleSearchBoxSubmit}
        />
      </div>
      <TileList>
        {filteredPlaylistData.map((entry) => {
          const id = entry.id.attributes["im:id"];

          return (
            <Tile
              key={id}
              href={`/podcast/${id}`}
              title={entry.title.label}
              author={entry["im:artist"].label}
              imageSrc={entry["im:image"][2].label}
            />
          );
        })}
      </TileList>
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
