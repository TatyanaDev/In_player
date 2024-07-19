import { createElement } from "../../../../../../utils/createElement.js";
import { PlayList } from "./PlayList/PlayList.js";

export function PlayLists(data) {
  const { playlists } = data;

  const container = createElement("section", { class: "playlists" });

  for (let i = 0; i < playlists.length; i++) {
    container.append(PlayList(playlists[i]));
  }

  return container;
}
