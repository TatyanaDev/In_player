import { Header } from "./Header/Header.js";
import { Main } from "./Main/Main.js";

export function App(someData) {
  const container = document.createElement("div");
  container.classList.add("App");

  container.append(Header(), Main(someData));

  return container;
}
