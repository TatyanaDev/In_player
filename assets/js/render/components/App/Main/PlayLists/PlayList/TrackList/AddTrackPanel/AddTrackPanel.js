export function AddTrackPanel() {
  const container = document.createElement("div");
  container.classList.add("add-track-panel");

  const title = document.createElement("h3");
  title.classList.add("tracklist-title");
  title.innerText = "Tracks";

  const addTrackButton = document.createElement("button");
  addTrackButton.classList.add("button-add-track");

  const addTrackButtonImg = document.createElement("img");
  addTrackButtonImg.src = "./assets/images/icons/add.svg";
  addTrackButtonImg.setAttribute("alt", "add");

  addTrackButton.append(addTrackButtonImg, "Add Track");
  container.append(title, addTrackButton);

  return container;
}
