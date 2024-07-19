import { App } from "./components/App/App.js";

export function render(data) {
  const root = document.getElementById("root");

  root.append(App(data));
}
