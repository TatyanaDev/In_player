import { AddPlayListPanel } from "./AddPlayListPanel/AddPlayListPanel.js";
import { createElement } from "../../../../../utils/createElement.js";
import { PlayLists } from "./PlayLists/PlayLists.js";

export function Main(data) {
  const container = createElement("main", { class: "main" });

  container.append(AddPlayListPanel(), PlayLists(data));

  return container;
}
