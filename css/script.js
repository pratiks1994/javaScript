const container = document.getElementById("container");
const cellElement = document.querySelectorAll("[data-cell]");
const messageElement = document.querySelector(".message");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const xClass = "x";
const circleClass = "circle";
let isCircle = false;
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  container.classList.add(xClass);
  cellElement.forEach((cell) => {
    //
    cell.removeEventListener("click", handleClick);

    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(e) {
  let cell = e.target;
  let currentclass = "";
  isCircle ? (currentclass = circleClass) : (currentclass = xClass);
  console.log("isCircle", isCircle);
  cell.classList.add(currentclass);
  if (checkWin(currentclass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    isCircle = !isCircle;
    container.classList.remove(xClass);
    container.classList.remove(circleClass);
    isCircle
      ? container.classList.add(circleClass)
      : container.classList.add(xClass);
  }
}

function checkWin(currentclass) {
  return win.some((c) => {
    return c.every((index) => {
      return cellElement[index].classList.contains(currentclass);
    });
  });
}

function endGame(draw) {
  if (draw) {
    messageElement.textContent = "its a Draw";
    result.classList.add("show");
  } else {
    messageElement.textContent = (isCircle ? "o" : "x") + "wins";
    result.classList.add("show");
  }
}

function isDraw() {
  return [...cellElement].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
}

reset.addEventListener("click", gameReset);

function gameReset() {
  cellElement.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    // cell.removeEventListener("click",handleClick,true)
  });
  container.classList.remove(xClass);
  container.classList.remove(circleClass);
  result.classList.remove("show");
  isCircle = false;

  startGame();
}
