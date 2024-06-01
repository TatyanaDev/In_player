import { TrackTopLine } from "./TrackTopLine/TrackTopLine.js";

export function TrackDetails(someRestTrackData) {
  const { trackFileUrl, ...restTrackData } = someRestTrackData;

  const container = document.createElement("div");
  container.classList.add("track-details");

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = trackFileUrl;

  container.append(TrackTopLine(restTrackData), audio);

  return container;
}
