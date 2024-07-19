import { createElement } from "../../../../../../../../../utils/createElement.js";
import { Track } from "./Track/Track.js";

export function List(data) {
  const container = createElement("ul", { class: "list" });

  for (let i = 0; i < data.length; i++) {
    container.append(Track(data[i]));
  }

  return container;
}
