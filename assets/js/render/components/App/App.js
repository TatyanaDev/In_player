import { createElement } from "../../../../utils/createElement.js";
import { Header } from "./Header/Header.js";
import { Main } from "./Main/Main.js";

export function App(someData) {
  const container = createElement("div", { class: "App" });

  container.append(Header(), Main(someData));

  return container;
}
