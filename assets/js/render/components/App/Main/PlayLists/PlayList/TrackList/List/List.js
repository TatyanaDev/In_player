import { createElement } from "../../../../../../../../../utils/createElement.js";
import { Track } from "./Track/Track.js";

export function List(someTracks) {
  const container = createElement("ul", { class: "list" });

  for (let i = 0; i < someTracks.length; i++) {
    container.append(Track(someTracks[i]));
  }

  return container;
}
