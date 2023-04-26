import { PlaylistEntry } from "@/pages";

export const filterPlaylistData = (
  list: PlaylistEntry[],
  search: string
): PlaylistEntry[] =>
  list.filter(
    (entry) =>
      entry.title.label.toLowerCase().includes(search.toLowerCase()) ||
      entry["im:artist"].label.toLowerCase().includes(search.toLowerCase())
  );
