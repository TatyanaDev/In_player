export function ButtonsEditDelete() {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const editBtn = document.createElement("button");

  const editBtnImg = document.createElement("img");
  editBtnImg.classList.add("button-icon");
  editBtnImg.src = "./assets/images/icons/edit.svg";
  editBtnImg.setAttribute("alt", "edit");

  editBtn.append(editBtnImg);

  const delBtn = document.createElement("button");

  const delBtnImg = document.createElement("img");
  delBtnImg.classList.add("button-icon");
  delBtnImg.src = "./assets/images/icons/basket.svg";
  delBtnImg.setAttribute("alt", "delete");

  delBtn.append(delBtnImg);

  buttonsContainer.append(editBtn, delBtn);

  return buttonsContainer;
}
