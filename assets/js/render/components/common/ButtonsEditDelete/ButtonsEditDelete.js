import { createElement } from "../../../../../utils/createElement.js";

export function ButtonsEditDelete() {
  const container = createElement("div", { class: "buttons-container" });

  const editBtn = createElement("button");
  const editBtnImg = createElement("img", { class: "button-icon", src: "./assets/icons/edit.svg", alt: "edit" });

  editBtn.append(editBtnImg);

  const delBtn = createElement("button");
  const delBtnImg = createElement("img", { class: "button-icon", src: "./assets/icons/basket.svg", alt: "delete" });

  delBtn.append(delBtnImg);

  container.append(editBtn, delBtn);

  return container;
}
