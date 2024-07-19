import { createElement } from "../../../../../../../../../../../utils/createElement.js";
import { TrackTopLine } from "./TrackTopLine/TrackTopLine.js";

export function TrackDetails(data) {
  const { trackFileUrl, ...restData } = data;

  const container = createElement("div", { class: "track-details" });
  const audio = createElement("audio", { controls: true, src: trackFileUrl });

  container.append(TrackTopLine(restData), audio);

  return container;
}
