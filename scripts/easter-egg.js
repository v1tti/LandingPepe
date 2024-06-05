const puzzlePiece = document.getElementById("puzzle-piece");
const gifButton = document.getElementById("secret-disabled");

let isDragging = false;
let offsetX, offsetY;

puzzlePiece.addEventListener("mousedown", (event) => {
  isDragging = true;
  puzzlePiece.classList.add("dragging");

  offsetX = event.clientX - puzzlePiece.offsetLeft;
  offsetY = event.clientY - puzzlePiece.offsetTop;

  gifButton.removeAttribute("disabled");
  gifButton.classList.remove("secret-disabled");
  gifButton.classList.add("secret-button");
  gifButton.id = "gif-button";

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(event) {
  if (isDragging) {
    puzzlePiece.style.left = event.clientX - offsetX + "px";
    puzzlePiece.style.top = event.clientY - offsetY + "px";
  }
}

function onMouseUp() {
  isDragging = false;
  puzzlePiece.classList.remove("dragging");

  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

function renderEasterEgg() {
  const gifContainer = document.getElementById("gif-container");
  gifContainer.classList.remove("hidden");
}

document.getElementById("secret-disabled").addEventListener("click", renderEasterEgg);
