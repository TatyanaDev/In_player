import { ButtonsEditDelete } from "../../../../../../../../../common/ButtonsEditDelete/ButtonsEditDelete.js";
import { createElement } from "../../../../../../../../../../../../utils/createElement.js";

export function TrackTopLine(data) {
  const { isHot, artistName, trackTitle } = data;

  const container = createElement("div", { class: "track-top-line" });

  if (isHot) {
    const trackHotImg = createElement("img", { class: "track-status", src: "./assets/icons/hot.svg", alt: "hot" });

    container.append(trackHotImg);
  }

  const trackInfo = createElement("div", { class: "track-info" });
  const trackName = createElement("div", { class: "track-name", innerText: `${artistName} - ${trackTitle}` });

  trackInfo.append(trackName, ButtonsEditDelete());
  container.append(trackInfo);

  return container;
}
