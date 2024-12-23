let color = "black";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.classList = "opacity;";
    square.style.backgroundColor = "#ffffff";
    board.insertAdjacentElement("beforeend", square);
  }
}

let sizeOfBoard = document.querySelector("input").value;
populateBoard(sizeOfBoard);
let sizeBtn = document.querySelector("#setSize");

sizeBtn.addEventListener("click", (e) => {
  sizeOfBoard = document.querySelector("input").value;

  if (sizeOfBoard >= 2 && sizeOfBoard < 70) {
    populateBoard(sizeOfBoard);
  } else {
    alert("Please enter a number between 2 and 70.");
  }
});

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = getRandomColor();
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetGrid() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
