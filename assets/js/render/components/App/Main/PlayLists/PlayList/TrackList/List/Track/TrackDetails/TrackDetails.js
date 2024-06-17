import { createElement } from "../../../../../../../../../../../utils/createElement.js";
import { TrackTopLine } from "./TrackTopLine/TrackTopLine.js";

export function TrackDetails(someRestTrackData) {
  const { trackFileUrl, ...restTrackData } = someRestTrackData;

  const container = createElement("div", { class: "track-details" });
  const audio = createElement("audio", { controls: true, src: trackFileUrl });

  container.append(TrackTopLine(restTrackData), audio);

  return container;
}
