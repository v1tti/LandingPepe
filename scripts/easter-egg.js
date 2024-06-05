const puzzlePiece = document.getElementById("puzzle-piece");
const gifButton = document.getElementById("secret-disabled");

let isDragging = false;

puzzlePiece.addEventListener("mousedown", () => {
  isDragging = true;
  puzzlePiece.classList.add("dragging");
  gifButton.removeAttribute("disabled");
  gifButton.classList.remove("secret-disabled");
  gifButton.classList.add("secret-button");
  gifButton.id = "gif-button";
});

puzzlePiece.addEventListener("mouseup", () => {
  isDragging = false;
  puzzlePiece.classList.remove("dragging");
  document.getElementById("gif-button").addEventListener("click", renderEasterEgg);
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    puzzlePiece.style.left = event.clientX - puzzlePiece.offsetWidth / 2 + "px";
    puzzlePiece.style.top = event.clientY - puzzlePiece.offsetHeight / 2 + "px";
  }
});
function renderEasterEgg() {
  const gifContainer = document.getElementById("gif-container");
  gifContainer.classList.remove("hidden");
}
