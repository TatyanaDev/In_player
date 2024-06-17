export function createElement(tagName, attributes = {}) {
  const container = document.createElement(tagName);

  for (const [name, value] of Object.entries(attributes)) {
    if (name === "innerText") {
      container.innerText = value;
    } else {
      container.setAttribute(name, value);
    }
  }

  return container;
}
