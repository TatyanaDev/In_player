import { createElement } from "../../../../../utils/createElement.js";

export function ButtonsEditDelete() {
  const buttonsContainer = createElement("div", { class: "buttons-container" });

  const editBtn = createElement("button");
  const editBtnImg = createElement("img", { class: "button-icon", src: "./assets/images/icons/edit.svg", alt: "edit" });

  editBtn.append(editBtnImg);

  const delBtn = createElement("button");
  const delBtnImg = createElement("img", { class: "button-icon", src: "./assets/images/icons/basket.svg", alt: "delete" });

  delBtn.append(delBtnImg);

  buttonsContainer.append(editBtn, delBtn);

  return buttonsContainer;
}
