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

export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const formattedMM = mm < 10 ? `0${mm}` : mm;
  const formattedDD = dd < 10 ? `0${dd}` : dd;

  return `${formattedDD}/${formattedMM}/${yyyy}`;
};

export const formatMilliseconds = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};
