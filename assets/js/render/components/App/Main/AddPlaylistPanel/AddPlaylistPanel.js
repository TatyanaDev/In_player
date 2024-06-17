import { createElement } from "../../../../../../utils/createElement.js";

export function AddPlaylistPanel() {
  const container = createElement("div", { class: "add-playlist-panel" });
  const appHeader = createElement("h1", { class: "title", innerText: "My playlists" });
  const addButton = createElement("button", { class: "button", innerText: "Add Playlist" });

  container.append(appHeader, addButton);

  return container;
}
