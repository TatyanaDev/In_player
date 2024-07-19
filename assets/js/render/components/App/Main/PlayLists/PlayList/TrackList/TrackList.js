import { createElement } from "../../../../../../../../utils/createElement.js";
import { AddTrackPanel } from "./AddTrackPanel/AddTrackPanel.js";
import { List } from "./List/List.js";

export function TrackList(data) {
  const container = createElement("div");

  container.append(AddTrackPanel(), List(data));

  return container;
}
