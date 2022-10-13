const CIRCUIT_BREAKER_ITERATIONS = 5;

function invertDirection(dir) {
  return dir === "right" ? "left" : "right";
}

function strip(grid) {
  const lastRow = grid[grid.length - 1];
  if (lastRow.every((cell) => cell === null)) {
    return grid.slice(0, -1);
  }
  return grid;
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
    grid[snakeProgress.row][snakeProgress.column + directionSign()] !== null
  ) {
    iterations++;
    if (iterations > CIRCUIT_BREAKER_ITERATIONS) {
      throw new Error("Could not find empty cell");
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
  let grid = [...Array(2).keys()].map(() => Array(columns).fill(null));
  let snakeProgress = {
    row: 0,
    column: 0,
    direction: "right",
    history: [],
  };

  let snakeProgressFilled = -1;
  for (const item of items) {
    if (item.event_listing.is_highlighted) {
      if (snakeProgress.direction === "right") {
        if (snakeProgress.column + 1 < columns) {
          snakeProgress = fillBigItem(grid, snakeProgress, item);
          snakeProgressFilled = snakeProgress.history.length;
          snakeProgress = findEmptyCell(grid, snakeProgress);
        } else {
          // console.error(
          //   "This code path should not be hit - we avoid stopping on edges (right-to-left case)"
          // );
        }
      } else {
        if (snakeProgress.column - 1 >= 0) {
          snakeProgress = fillBigItem(grid, snakeProgress, item);
          snakeProgressFilled = snakeProgress.history.length;
          snakeProgress = findEmptyCell(grid, snakeProgress);
        } else {
          // console.error(
          //   "This code path should not be hit - we avoid stopping on edges (left-to-right case)"
          // );
        }
      }
    } else {
      grid[snakeProgress.row][snakeProgress.column] = item.id;
      snakeProgressFilled = snakeProgress.history.length;
      snakeProgress = findEmptyCell(grid, snakeProgress);
    }
  }
  if (snakeProgressFilled !== -1) {
    snakeProgress.history = snakeProgress.history.slice(0, snakeProgressFilled);
  }

  return { history: snakeProgress.history, grid };
}

export function generateGridSimple(columns, items) {
  let grid = [...Array(2).keys()].map(() => Array(columns).fill(null));
  let row = 0;
  let column = 0;
  let direction = "right";
  let history = [];

  function downAndInvert(col) {
    grid.push(Array(columns).fill(null));
    grid.push(Array(columns).fill(null));
    row += 2;
    column = col;
    direction = invertDirection(direction);
    history.push("down", "down");
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
    if (item.event_listing.is_highlighted) {
      if (direction === "right") {
        if (column + 1 <= columns - 1) {
          // will be enough space to fill the big item
        } else {
          downAndInvert(columns - 1);
        }
      } else {
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
    } else {
      grid[row][column] = item.id;
      snakeProgressFilled = history.length
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

function generateGradient(ctx, x0, y0, x1, y1, isInverted) {
  const gradient = ctx.createLinearGradient(x0, y0, x1, y1)
  gradient.addColorStop(0, isInverted ? 'black' : 'red')
  gradient.addColorStop(1, isInverted ? 'red' : 'black')
  return gradient
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
  const ctx = canvas.getContext("2d");
  const GRID_STEP = renderedCellSize + renderedGap;
  const GRID_HALF_CELL = renderedCellSize / 2;
  let curPos = [renderedCellSize / 2, renderedCellSize / 2];

  function clamp(num) {
    // 1 grid gap here because each step includes a gap, we just need to remove the last gap
    return Math.max(
      Math.min(num, GRID_STEP * columns - renderedCellSize / 2 - renderedGap),
      GRID_HALF_CELL
    );
  }

  ctx.beginPath();

  const renderedLineWidth = lineWidth * pixelDensity;
  const renderedHalfLineWidth = renderedLineWidth / 2;
  let lastInstruction = null;
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
      region.moveTo(x0+1, y0); // +1 avoids bleeding
      region.lineTo(x0+width, y0);
      region.lineTo(x0+width+renderedLineWidth, y0+height);
      region.lineTo(x0+1, y0+height); // +1 avoids bleeding
      region.closePath();

      ctx.fillStyle = generateGradient(ctx, x0, y0, x0, y0+height, gradientInverted)
      ctx.fill(region);

      curPos = [clamp(curPos[0] - GRID_STEP), curPos[1]];
    }
    if (instruction === "right") {
      const x0 = curPos[0]-renderedHalfLineWidth
      const y0 = curPos[1]-renderedHalfLineWidth

      const width = clamp(curPos[0] + GRID_STEP) - x0 - renderedHalfLineWidth
      const height = renderedLineWidth

      let region = new Path2D();
      if (lastInstruction == null) {
        region.moveTo(x0, y0);
      }
      else {
        region.moveTo(x0+renderedLineWidth, y0);
      }
      region.lineTo(x0+width+renderedLineWidth-1, y0); // -1 avoids bleeding
      region.lineTo(x0+width+renderedLineWidth-1, y0+height); // -1 avoids bleeding
      region.lineTo(x0, y0+height);
      region.closePath();

      ctx.fillStyle = generateGradient(ctx, x0, y0, x0, y0+height, gradientInverted)
      ctx.fill(region);

      curPos = [clamp(curPos[0] + GRID_STEP), curPos[1]];
    }
    if (instruction === "down") {
      const x0 = curPos[0]-renderedHalfLineWidth
      const y0 = curPos[1]-renderedHalfLineWidth

      const width = renderedLineWidth
      const height = GRID_STEP

      let region = new Path2D();
      if (lastInstruction == 'right') {
        region.moveTo(x0, y0+renderedLineWidth);
        region.lineTo(x0+width, y0);
        region.lineTo(x0+width, y0+height+renderedLineWidth);
        region.lineTo(x0, y0+height+renderedLineWidth);
        region.closePath();
      }
      else if (lastInstruction == 'left') {
        region.moveTo(x0, y0);
        region.lineTo(x0+width, y0+renderedLineWidth);
        region.lineTo(x0+width, y0+height+renderedLineWidth);
        region.lineTo(x0, y0+height+renderedLineWidth);
        region.closePath();
      }
      else {
        region.moveTo(x0, y0);  
        region.lineTo(x0+width, y0);
        region.lineTo(x0+width, y0+height+renderedLineWidth);
        region.lineTo(x0, y0+height+renderedLineWidth);
        region.closePath();
      }

      ctx.fillStyle = generateGradient(ctx, x0, y0, x0+width, y0, gradientInverted)
      ctx.fill(region);

      curPos = [curPos[0], curPos[1] + GRID_STEP];
    }
    lastInstruction = instruction;
  }
  ctx.stroke();
}