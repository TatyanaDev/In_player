import { PlayList } from "./PlayList/PlayList.js";

export function PlayLists(someData) {
  const container = document.createElement("div");
  container.classList.add("playlists");

  for (let i = 0; i < someData.playlists.length; i++) {
    container.append(PlayList(someData.playlists[i]));
  }

  return container;
}
