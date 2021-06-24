const solution = (rows, columns, queries) => {
  let answer = [];

  const matrix = createDefaultMatrix(rows, columns);

  queries.forEach((query) => {
    const { rotatedElement } = rotateMatrix(query, matrix);
    const minValue = getMinValue(rotatedElement);
    answer.push(minValue);
  });

  return answer;
};

const rotateMatrix = (query, matrix) => {
  const rotatedElement = [];

  let [sR, sC, eR, eC] = query;
  sR--; sC--; eR--; eC--;
  const defaultX = sR;
  const defaultY = sC;
  let x = defaultX + 1;
  let y = defaultY;
  const defaultElement = matrix[x][y];

  while (!(x === defaultX && y === defaultY)) {
    const prevX = x;
    const prevY = y;
    if (x === sR && y !== sC) y--;
    else if (x !== sR && y === eC) x--;
    else if (x === eR && y !== eC) y++;
    else if (x !== eR && y === sC) x++;

    matrix[prevX][prevY] = matrix[x][y];
    rotatedElement.push(matrix[x][y]);
  }
  matrix[defaultX][defaultY] = defaultElement;
  rotatedElement.push(matrix[defaultX][defaultY]);

  return { rotatedElement };
};

const createDefaultMatrix = (rows, cols) => {
  let defaultMatrix = [];

  for (let i = 0; i < rows; i++) {
    let numbersInOneColumn = [];
    for (let j = i * rows; j < i * rows + cols; j++) {
      numbersInOneColumn.push(j + 1);
    }
    defaultMatrix.push(numbersInOneColumn);
  }

  return defaultMatrix;
};

const getMinValue = (array) => {
  const min = array.reduce((acc, curr) => {
    if (curr < acc) acc = curr;
    return acc;
  }, Infinity);

  return min;
};
