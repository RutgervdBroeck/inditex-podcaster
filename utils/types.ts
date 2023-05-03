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

export type PodcastEntry = {
  artistId: number;
  artistName: string;
  collectionId: string;
  collectionName: string;
  artworkUrl600: string;
  description: string; // TODO: The description doesn't seem to be there in the response?
};

export type EpisodeEntry = {
  trackId: string;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  description: string;
  episodeUrl: string;
};

export type PlaylistResponseData = {
  feed: {
    entry: PlaylistEntry[];
  };
};
