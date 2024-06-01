import { TrackDetails } from "./TrackDetails/TrackDetails.js";

export function Track(someTrack) {
  const { trackCoverImgUrl, ...restTrackData } = someTrack;

  const container = document.createElement("li");
  container.classList.add("track-element");

  const trackCoverImg = document.createElement("img");
  trackCoverImg.classList.add("track-cover-image");
  trackCoverImg.src = trackCoverImgUrl;
  trackCoverImg.setAttribute("alt", "track-cover");

  container.append(trackCoverImg, TrackDetails(restTrackData));

  return container;
}
