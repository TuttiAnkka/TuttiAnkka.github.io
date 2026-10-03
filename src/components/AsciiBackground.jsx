import { useEffect, useState } from "react";

const CHARS = ".:+*            ";
const CELL_WIDTH = 8;
const CELL_HEIGHT = 16;

const UPDATE_INTERVAL = 200;
const CHANGE_RATE = 0.02;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function createGrid() {
  //const cols = Math.ceil(window.innerWidth / CELL_WIDTH);
  const cols = Math.ceil(window.innerWidth / CELL_WIDTH) + 10;
  const rows = Math.ceil(window.innerHeight / CELL_HEIGHT);

  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, randomChar),
  );
}

export default function AsciiBackground() {
  const [grid, setGrid] = useState(createGrid);

  useEffect(() => {
    function handleResize() {
      setGrid(createGrid());
    }

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setGrid((current) => {
        const next = current.map((row) => [...row]);

        const totalCells = next.length * next[0].length;

        const changes = Math.max(1, Math.floor(totalCells * CHANGE_RATE));

        for (let i = 0; i < changes; i++) {
          const row = Math.floor(Math.random() * next.length);
          const col = Math.floor(Math.random() * next[row].length);

          next[row][col] = randomChar();
        }

        return next;
      });
    }, UPDATE_INTERVAL);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ascii-background">
      {grid.map((row, rowIndex) => (
        <div className="ascii-row" key={rowIndex}>
          {row.join("")}
        </div>
      ))}
    </div>
  );
}
