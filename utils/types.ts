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
  description: string;
  episodeUrl: string;
};
