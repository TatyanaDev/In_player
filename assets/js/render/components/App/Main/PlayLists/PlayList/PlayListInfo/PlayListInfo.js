import { ButtonsEditDelete } from "../../../../../common/ButtonsEditDelete/ButtonsEditDelete.js";
import { createElement } from "../../../../../../../../utils/createElement.js";

export function PlaylistInfo(somePlaylistInfo) {
  const { coverImgUrl, title, tracksCount } = somePlaylistInfo;

  const container = createElement("div", { class: "playlist-info" });
  const img = createElement("img", { class: "playlist-cover-image", src: coverImgUrl, alt: "cover" });
  const wrapper = createElement("div");
  const titleElement = createElement("h2", { class: "title", innerText: title });
  const tracksCountElement = createElement("div", { class: "tracks-count", innerText: `${tracksCount} tracks` });

  wrapper.append(titleElement, tracksCountElement);
  container.append(img, wrapper, ButtonsEditDelete());

  return container;
}
