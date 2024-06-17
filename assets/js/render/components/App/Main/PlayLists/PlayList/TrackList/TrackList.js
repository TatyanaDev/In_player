import { createElement } from "../../../../../../../../utils/createElement.js";
import { AddTrackPanel } from "./AddTrackPanel/AddTrackPanel.js";
import { List } from "./List/List.js";

export function TrackList(someTracks) {
  const container = createElement("div", { class: "tracklist" });

  container.append(AddTrackPanel(), List(someTracks));

  return container;
}
