export function AddPlaylistPanel() {
  const container = document.createElement("div");
  container.classList.add("add-playlist-panel");

  const appHeader = document.createElement("h1");
  appHeader.classList.add("title");
  appHeader.innerText = "My playlists";

  const addButton = document.createElement("button");
  addButton.classList.add("button");
  addButton.innerText = "Add Playlist";

  container.append(appHeader, addButton);

  return container;
}
