import "./styles.css";

const createGrid = () => {
  const grid = document.createElement("div");

  grid.classList.add("grid");

  return grid;
};

const createCell = (i) => {
  const cell = document.createElement("div");

  cell.classList.add("cell");
  cell.dataset.id = i;

  cell.addEventListener("click", () => console.log(i));

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
