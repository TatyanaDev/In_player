import { createElement } from "../../../../../../../utils/createElement.js";
import { PlaylistInfo } from "./PlayListInfo/PlayListInfo.js";
import { TrackList } from "./TrackList/TrackList.js";

export function PlayList(somePlaylist) {
  const { playlistInfo, tracks } = somePlaylist;

  const container = createElement("article", { class: "playlist" });

  container.append(PlaylistInfo(playlistInfo), TrackList(tracks));

  return container;
}
