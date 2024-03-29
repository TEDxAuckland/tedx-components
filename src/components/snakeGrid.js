const CIRCUIT_BREAKER_ITERATIONS = 8;

function invertDirection(dir) {
  return dir === "right" ? "left" : "right";
}

function strip(grid) {
  return grid.filter(row => row.some(cell => cell !== null));
}

function findEmptyCell(
  grid,
  snakeProgress
) {
  const columns = grid[0].length;
  let { column, row, direction, history } = snakeProgress;

  let iterations = 0;
  // calculating next step
  do {
    iterations++;
    if (iterations > CIRCUIT_BREAKER_ITERATIONS) {
      throw new Error("Could not find empty cell");
    }

    let nextColumn = column;
    let nextRow = row;
    let nextDirection = direction;
    let nextSnake = [];

    function commitStep() {
      column = nextColumn;
      if (nextRow > row) grid.push(Array(columns).fill(null));
      row = nextRow;
      direction = nextDirection;
      history.push(...nextSnake);
    }

    // snake goes forward
    // TODO: separate out into a method
    if (nextDirection === "right") {
      nextColumn++;
      nextSnake.push("right");
      if (nextColumn > columns - 1) {
        nextRow++;
        nextSnake.push("down");
        nextColumn = columns - 1;
        nextDirection = invertDirection(nextDirection);
      }
    } else {
      nextColumn--;
      nextSnake.push("left");
      if (nextColumn < 0) {
        nextRow++;
        nextSnake.push("down");
        nextColumn = 0;
        nextDirection = invertDirection(nextDirection);
      }
    }

    // don't stop on edges coming from right to left
    if (nextColumn === 0 && nextDirection === "left") {
      commitStep();
      continue;
    }

    // don't stop on edges coming from left to right
    if (nextColumn === columns - 1 && nextDirection === "right") {
      commitStep();
      continue;
    }

    // if there's a barrier, go down instead and keep looking
    if (grid[nextRow][nextColumn] !== null) {
      // going down
      nextColumn = column;
      nextRow = row + 1;
      nextSnake = ["down"];

      commitStep();
      if (grid[row][column] !== null) {
        // TODO: not sure if this ever hits
        continue;
      } else {
        break; // found empty cell - stop
      }
    }

    commitStep();
    break; // found empty cell - stop
  } while (true);

  return {
    column,
    row,
    direction,
    history,
  };
}

function fillBigItem(
  grid,
  snakeProgress,
  item
) {
  function directionSign() {
    return snakeProgress.direction === "right" ? 1 : -1;
  }

  // if the adjacent cell is not empty, keep looking
  let iterations = 0;
  while (
    !(
      grid[snakeProgress.row][snakeProgress.column] === null &&
      grid[snakeProgress.row][snakeProgress.column + directionSign()] === null &&
      grid[snakeProgress.row][snakeProgress.column + directionSign() + directionSign()] === null &&
      grid[snakeProgress.row + 1][snakeProgress.column] === null &&
      grid[snakeProgress.row + 1][snakeProgress.column + directionSign()] === null &&
      grid[snakeProgress.row + 1][snakeProgress.column + directionSign() + directionSign()] === null &&
      grid[snakeProgress.row + 2][snakeProgress.column] === null &&
      grid[snakeProgress.row + 2][snakeProgress.column + directionSign()] === null &&
      grid[snakeProgress.row + 2][snakeProgress.column + directionSign() + directionSign()] === null
    )
  ) {
    iterations++;
    if (iterations > CIRCUIT_BREAKER_ITERATIONS) {
      throw new Error("Could not find empty cell in fillBigItem");
    }

    snakeProgress = findEmptyCell(grid, snakeProgress);
  }

  // fill the 9 cells
  grid[snakeProgress.row][snakeProgress.column] = item.id;
  grid[snakeProgress.row][snakeProgress.column + directionSign()] = item.id;
  grid[snakeProgress.row][snakeProgress.column + directionSign() + directionSign()] = item.id;
  grid[snakeProgress.row + 1][snakeProgress.column] = item.id;
  grid[snakeProgress.row + 1][snakeProgress.column + directionSign()] = item.id;
  grid[snakeProgress.row + 1][snakeProgress.column + directionSign() + directionSign()] = item.id;
  grid[snakeProgress.row + 2][snakeProgress.column] = item.id;
  grid[snakeProgress.row + 2][snakeProgress.column + directionSign()] = item.id;
  grid[snakeProgress.row + 2][snakeProgress.column + directionSign() + directionSign()] = item.id;

  return {
    ...snakeProgress,
    column: snakeProgress.column + directionSign() + directionSign(),
    history: [...snakeProgress.history, snakeProgress.direction, snakeProgress.direction],
  };
}

function fillSmallItem(
  grid,
  snakeProgress,
  item
) {
  function directionSign() {
    return snakeProgress.direction === "right" ? 1 : -1;
  }

  // if the adjacent cell is not empty, keep looking
  let iterations = 0;
  while (
    !(
      grid[snakeProgress.row][snakeProgress.column] === null &&
      grid[snakeProgress.row][snakeProgress.column + directionSign()] === null &&
      grid[snakeProgress.row + 1][snakeProgress.column] === null &&
      grid[snakeProgress.row + 1][snakeProgress.column + directionSign()] === null
    )
  ) {
    iterations++;
    if (iterations > CIRCUIT_BREAKER_ITERATIONS) {
      throw new Error("Could not find empty cell in fillSmallItem");
    }

    snakeProgress = findEmptyCell(grid, snakeProgress);
  }

  // fill the 4 cells
  grid[snakeProgress.row][snakeProgress.column] = item.id;
  grid[snakeProgress.row][snakeProgress.column + directionSign()] = item.id;
  grid[snakeProgress.row + 1][snakeProgress.column] = item.id;
  grid[snakeProgress.row + 1][snakeProgress.column + directionSign()] = item.id;

  return {
    ...snakeProgress,
    column: snakeProgress.column + directionSign(),
    history: [...snakeProgress.history, snakeProgress.direction],
  };
}


export function generateGridRecursive(columns, items) {
  let grid = [...Array(3).keys()].map(() => Array(columns).fill(null));
  let snakeProgress = {
    row: 0,
    column: 0,
    direction: "right",
    history: [],
  };

  let snakeProgressFilled = -1;
  for (const item of items) {
    const isHighlighted = item.event_listing.is_highlighted
    if (isHighlighted) {
      if (snakeProgress.direction === "right") {
        snakeProgress = fillBigItem(grid, snakeProgress, item);
        snakeProgressFilled = snakeProgress.history.length;
      } else {
        snakeProgress = fillBigItem(grid, snakeProgress, item);
        snakeProgressFilled = snakeProgress.history.length;
      }
    } else {
      snakeProgress = fillSmallItem(grid, snakeProgress, item)
      snakeProgressFilled = snakeProgress.history.length;
    }
  }

  if (snakeProgressFilled !== -1) {
    snakeProgress.history = snakeProgress.history.slice(0, snakeProgressFilled);
  }

  return { history: snakeProgress.history, grid };
}

export function generateGridSimple(columns, items) {
  let grid = [...Array(3).keys()].map(() => Array(columns).fill(null));
  let row = 0;
  let column = 0;
  let direction = "right";
  let history = [];

  function downAndInvert(col) {
    grid.push(Array(columns).fill(null));
    grid.push(Array(columns).fill(null));
    grid.push(Array(columns).fill(null));
    row += 3;
    column = col;
    direction = invertDirection(direction);
    history.push("down", "down", "down");
  }

  function goForward() {
    column += direction === "right" ? 1 : -1;
    history.push(direction);
    if (direction === "right") {
      if (column > columns - 2) {
        downAndInvert(columns - 1);
      }
    } else {
      if (column < 1) {
        downAndInvert(0);
      }
    }
  }

  function directionSign() {
    return direction === "right" ? 1 : -1;
  }

  let snakeProgressFilled = -1;
  for (const item of items) {
    const isHighlighted = item.event_listing.is_highlighted
    if (isHighlighted) {
      if (direction === "right") {
        // gotta have 2 extra on the right
        if (column + 2 <= columns - 1) {
          // will be enough space to fill the big item
        } else {
          downAndInvert(columns - 1);
        }
      } else {
        // gotta have 2 extra on the left
        if (column - 2 >= 0) {
          // will be enough space to fill the big item
        } else {
          downAndInvert(0);
        }
      }

      grid[row][column] = item.id;
      grid[row][column + directionSign()] = item.id;
      grid[row][column + directionSign() + directionSign()] = item.id;
      grid[row + 1][column] = item.id;
      grid[row + 1][column + directionSign()] = item.id;
      grid[row + 1][column + directionSign() + directionSign()] = item.id;
      grid[row + 2][column] = item.id;
      grid[row + 2][column + directionSign()] = item.id;
      grid[row + 2][column + directionSign() + directionSign()] = item.id;
      snakeProgressFilled = history.length
      goForward();
      goForward();
      goForward();
    } else {
      if (direction === "right") {
        // gotta have 1 extra on the right
        if (column + 1 <= columns - 1) {
          // will be enough space to fill the big item
        } else {
          downAndInvert(columns - 1);
        }
      } else {
        // gotta have 1 extra on the left
        if (column - 1 >= 0) {
          // will be enough space to fill the big item
        } else {
          downAndInvert(0);
        }
      }
      grid[row][column] = item.id;
      grid[row][column + directionSign()] = item.id;
      grid[row + 1][column] = item.id;
      grid[row + 1][column + directionSign()] = item.id;
      snakeProgressFilled = history.length
      goForward();
      goForward();
    }
  }
  if (snakeProgressFilled !== -1) {
    history = history.slice(0, snakeProgressFilled);
  }

  return { history, grid };
}

export function generateGridHybrid(columns, items) {
  try {
    return generateGridRecursive(columns, items);
  }
  catch (e) {
    return generateGridSimple(columns, items);
  }
}

export function getAreas(grid) {
  return strip(grid).map((gridLine) => {
    const line = gridLine
      .map((cell) => {
        if (cell === null) {
          return ".";
        }
        return `item-${cell.replace(/\//g, "-")}`;
      })
      .join(" ");
    return `'${line}'`;
  });
}

export function clearCanvasSnake({ canvas }) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function drawCanvasSnake({
  canvas,
  cellSize,
  columns,
  gap,
  pixelDensity,
  history,
  lineWidth,
}) {
  const renderedGap = gap * pixelDensity;
  const renderedCellSize = cellSize * pixelDensity;
  const ctx = canvas.getContext("2d", { alpha: false });
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const GRID_STEP = renderedCellSize + renderedGap;
  const GRID_HALF_CELL = renderedCellSize / 2;

  function clamp(num) {
    // 1 grid gap here because each step includes a gap, we just need to remove the last gap
    return Math.max(
      Math.min(num, GRID_STEP * columns - renderedCellSize / 2 - renderedGap),
      GRID_HALF_CELL
    );
  }

  if (ctx.filter !== undefined) {
    ctx.filter = 'blur(4px) opacity(0.5)';
    renderLine('rgba(0, 0, 0, 1)', lineWidth + 5, 5);
  }
  ctx.filter = 'blur(0)';
  renderLine('#ed3624', lineWidth);

  function renderLine(lineColor, lineWidth, offset=0) {
    let curPos = [renderedCellSize / 2, renderedCellSize / 2 + offset];

    ctx.beginPath();

    const renderedLineWidth = lineWidth * pixelDensity;
    const renderedHalfLineWidth = renderedLineWidth / 2;
    let lastDirectionInstruction = history[0];
    let gradientInverted = false;

    for (const instruction of history) {

      if (instruction === "left" || instruction === "right" || instruction === "down") {
        if (lastDirectionInstruction == "right" && instruction == "down") {
          gradientInverted = !gradientInverted
        }
        if (lastDirectionInstruction == "down" && instruction == "right") {
          gradientInverted = !gradientInverted
        }
        lastDirectionInstruction = instruction;
      }

      if (instruction === "left") {
        const x0 = clamp(curPos[0] - GRID_STEP)-renderedHalfLineWidth
        const y0 = curPos[1]-renderedHalfLineWidth

        const width = curPos[0] - x0 - renderedHalfLineWidth
        const height = renderedLineWidth

        let region = new Path2D();
        region.moveTo(x0, y0); // +1 avoids bleeding
        region.lineTo(x0+width+1, y0);
        region.lineTo(x0+width+1, y0+height);
        region.lineTo(x0, y0+height); // +1 avoids bleeding
        region.closePath();

        ctx.fillStyle = lineColor
        ctx.fill(region);

        curPos = [clamp(curPos[0] - GRID_STEP), curPos[1]];
      }
      if (instruction === "right") {
        const x0 = curPos[0]-renderedHalfLineWidth
        const y0 = curPos[1]-renderedHalfLineWidth

        const width = clamp(curPos[0] + GRID_STEP) - x0 - renderedHalfLineWidth
        const height = renderedLineWidth

        let region = new Path2D();
        region.moveTo(x0+renderedLineWidth-1, y0);
        region.lineTo(x0+width+renderedLineWidth, y0); // -1 avoids bleeding
        region.lineTo(x0+width+renderedLineWidth, y0+height); // -1 avoids bleeding
        region.lineTo(x0+renderedLineWidth-1, y0+height);
        region.closePath();

        ctx.fillStyle = lineColor
        ctx.fill(region);

        curPos = [clamp(curPos[0] + GRID_STEP), curPos[1]];
      }
      if (instruction === "down") {
        const x0 = curPos[0]-renderedHalfLineWidth
        const y0 = curPos[1]-renderedHalfLineWidth

        const width = renderedLineWidth
        const height = GRID_STEP-renderedLineWidth

        let region = new Path2D();
        region.moveTo(x0, y0+renderedLineWidth-1);  
        region.lineTo(x0+width, y0+renderedLineWidth-1);
        region.lineTo(x0+width, y0+height+renderedLineWidth+renderedLineWidth);
        region.lineTo(x0, y0+height+renderedLineWidth+renderedLineWidth);
        region.closePath();

        ctx.fillStyle = lineColor
        ctx.fill(region);

        curPos = [curPos[0], curPos[1] + GRID_STEP];
      }
    }
    ctx.stroke();
  }

}