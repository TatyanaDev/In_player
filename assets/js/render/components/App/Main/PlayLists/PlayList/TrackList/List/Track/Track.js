import { createElement } from "../../../../../../../../../../utils/createElement.js";
import { TrackDetails } from "./TrackDetails/TrackDetails.js";

export function Track(someTrack) {
  const { trackCoverImgUrl, ...restTrackData } = someTrack;

  const container = createElement("li", { class: "track-element" });
  const trackCoverImg = createElement("img", { class: "track-cover-image", src: trackCoverImgUrl, alt: "track-cover" });

  container.append(trackCoverImg, TrackDetails(restTrackData));

  return container;
}
