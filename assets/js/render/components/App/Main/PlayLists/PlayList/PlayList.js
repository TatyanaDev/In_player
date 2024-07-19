import { createElement } from "../../../../../../../utils/createElement.js";
import { PlayListInfo } from "./PlayListInfo/PlayListInfo.js";
import { TrackList } from "./TrackList/TrackList.js";

export function PlayList(data) {
  const { playlistInfo, tracks } = data;

  const container = createElement("article", { class: "playlist" });

  container.append(PlayListInfo(playlistInfo), TrackList(tracks));

  return container;
}
