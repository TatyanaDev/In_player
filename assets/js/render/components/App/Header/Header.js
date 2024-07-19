import { createElement } from "../../../../../utils/createElement.js";

export function Header() {
  const container = createElement("header", { class: "header" });
  const headerContainer = createElement("div", { class: "header-container" });
  const img = createElement("img", { src: "./assets/icons/logo.svg", alt: "logo" });
  const logo = createElement("div", { class: "logo-name", innerText: "InPlayer" });

  headerContainer.append(img, logo);
  container.append(headerContainer);

  return container;
}
