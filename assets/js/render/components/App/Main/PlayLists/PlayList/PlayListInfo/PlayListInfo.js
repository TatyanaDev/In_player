import { ButtonsEditDelete } from "../../../../../common/ButtonsEditDelete/ButtonsEditDelete.js";

export function PlaylistInfo(somePlaylistInfo) {
  const { coverImgUrl, title, tracksCount } = somePlaylistInfo;

  const container = document.createElement("div");
  container.classList.add("playlist-info");

  const img = document.createElement("img");
  img.classList.add("playlist-cover-image");
  img.src = coverImgUrl;
  img.setAttribute("alt", "cover");

  const wrapper = document.createElement("div");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("title");
  titleElement.innerText = title;

  const tracksCountElement = document.createElement("div");
  tracksCountElement.classList.add("tracks-count");
  tracksCountElement.innerText = `${tracksCount} tracks`;

  wrapper.append(titleElement, tracksCountElement);
  container.append(img, wrapper, ButtonsEditDelete());

  return container;
}
