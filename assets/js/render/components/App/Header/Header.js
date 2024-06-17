import { createElement } from "../../../../../utils/createElement.js";

export function Header() {
  const header = createElement("header");
  const headerContainer = createElement("div", { class: "header-container" });
  const img = createElement("img", { src: "./assets/images/logo/logo.svg", alt: "logo" });
  const logo = createElement("div", { class: "logo-name", innerText: "InPlayer" });

  headerContainer.append(img, logo);
  header.append(headerContainer);

  return header;
}
