import "./styles.css";

let game = {
  xTurn: true,
  xState: [],
  oState: [],
  winningState: [
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],

    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ],
};

const createGrid = () => {
  const grid = document.createElement("div");

  grid.classList.add("grid");

  return grid;
};

const createCell = (i) => {
  const cell = document.createElement("div");

  cell.classList.add("cell");
  cell.dataset.id = i;

  // cell.addEventListener("click", function () {
  //   console.log(this);
  //   const id = parseInt(this.dataset.id);
  //   console.log(id);
  // });

  cell.addEventListener("click", (event) => {
    const element = event.target;
    const id = parseInt(element.dataset.id);

    if (!(id || id === 0)) return;

    game.xTurn ? game.xState.push(id) : game.oState.push(id);

    element.classList.add(game.xTurn ? "x" : "o");
    element.classList.add("disabled");

    game.xTurn = !game.xTurn;

    console.log(game);
  });

  return cell;
};

const generateGrid = () => {
  const grid = createGrid();

  for (let i = 0; i < 9; i++) {
    const cell = createCell(i);

    grid.appendChild(cell);
  }

  return grid;
};

const initialApp = (app) => {
  const grid = generateGrid();

  app.appendChild(grid);
};

initialApp(document.getElementById("app"));
