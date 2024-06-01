import { ButtonsEditDelete } from "../../../../../../../../../common/ButtonsEditDelete/ButtonsEditDelete.js";

export function TrackTopLine(someRestTrackData) {
  const { isHot, artistName, trackTitle } = someRestTrackData;

  const container = document.createElement("div");
  container.classList.add("track-top-line");

  if (isHot) {
    const trackHotImg = document.createElement("img");
    trackHotImg.classList.add("track-status");
    trackHotImg.src = "./assets/images/icons/hot.svg";
    trackHotImg.setAttribute("alt", "hot");

    container.append(trackHotImg);
  }

  const trackInfo = document.createElement("div");
  trackInfo.classList.add("track-info");

  const trackName = document.createElement("div");
  trackName.classList.add("track-name");
  trackName.innerText = `${artistName} - ${trackTitle}`;

  trackInfo.append(trackName, ButtonsEditDelete());
  container.append(trackInfo);

  return container;
}
