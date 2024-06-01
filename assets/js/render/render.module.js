import { App } from "./components/App/App.js";

export function render(someData) {
  const root = document.getElementById("root");

  root.append(App(someData));
}
