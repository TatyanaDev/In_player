import { AddPlaylistPanel } from "./AddPlaylistPanel/AddPlaylistPanel.js";
import { createElement } from "../../../../../utils/createElement.js";
import { PlayLists } from "./PlayLists/PlayLists.js";

export function Main(someData) {
  const container = createElement("main");

  container.append(AddPlaylistPanel(), PlayLists(someData));

  return container;
}
