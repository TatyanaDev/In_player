import { PlaylistInfo } from "./PlayListInfo/PlayListInfo.js";
import { TrackList } from "./TrackList/TrackList.js";

export function PlayList(somePlaylist) {
  const { playlistInfo, tracks } = somePlaylist;

  const container = document.createElement("article");
  container.classList.add("playlist");

  container.append(PlaylistInfo(playlistInfo), TrackList(tracks));

  return container;
}
