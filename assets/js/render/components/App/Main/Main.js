import { AddPlaylistPanel } from "./AddPlaylistPanel/AddPlaylistPanel.js";
import { PlayLists } from "./PlayLists/PlayLists.js";

export function Main(someData) {
  const container = document.createElement("main");

  container.append(AddPlaylistPanel(), PlayLists(someData));

  return container;
}
