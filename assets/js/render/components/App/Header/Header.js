export function Header() {
  const header = document.createElement("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const img = document.createElement("img");
  img.src = "./assets/images/logo/logo.svg";
  img.setAttribute("alt", "logo");

  const logo = document.createElement("div");
  logo.classList.add("logo-name");
  logo.innerText = "InPlayer";

  headerContainer.append(img, logo);
  header.append(headerContainer);

  return header;
}
