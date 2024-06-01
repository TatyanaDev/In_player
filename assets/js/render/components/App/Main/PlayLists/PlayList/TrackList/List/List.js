import { Track } from "./Track/Track.js";

export function List(someTracks) {
  const container = document.createElement("ul");
  container.classList.add("list");

  for (let i = 0; i < someTracks.length; i++) {
    container.append(Track(someTracks[i]));
  }

  return container;
}
