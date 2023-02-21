import "./styles.css";

const app = document.getElementById("app");

const grid = document.createElement("div");
grid.classList.add("grid");

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.dataset.id = i;

  grid.appendChild(cell);
}

app.appendChild(grid);
