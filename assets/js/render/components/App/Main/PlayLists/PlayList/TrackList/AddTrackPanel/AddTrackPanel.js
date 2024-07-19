import { createElement } from "../../../../../../../../../utils/createElement.js";

export function AddTrackPanel() {
  const container = createElement("div", { class: "add-track-panel" });
  const title = createElement("h3", { class: "tracklist-title", innerText: "Tracks" });
  const addTrackButton = createElement("button", { class: "button-add-track" });
  const addTrackButtonImg = createElement("img", { src: "./assets/icons/add.svg", alt: "add" });

  addTrackButton.append(addTrackButtonImg, "Add Track");
  container.append(title, addTrackButton);

  return container;
}
