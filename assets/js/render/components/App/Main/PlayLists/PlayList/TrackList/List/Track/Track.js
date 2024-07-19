import { createElement } from "../../../../../../../../../../utils/createElement.js";
import { TrackDetails } from "./TrackDetails/TrackDetails.js";

export function Track(data) {
  const { trackCoverImgUrl, ...restData } = data;

  const container = createElement("li", { class: "track-element" });
  const trackCoverImg = createElement("img", { class: "track-cover-image", src: trackCoverImgUrl, alt: "track-cover" });

  container.append(trackCoverImg, TrackDetails(restData));

  return container;
}
