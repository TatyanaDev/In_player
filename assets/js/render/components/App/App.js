import { createElement } from "../../../../utils/createElement.js";
import { Header } from "./Header/Header.js";
import { Main } from "./Main/Main.js";

export function App(data) {
  const container = createElement("div");

  container.append(Header(), Main(data));

  return container;
}
