"use strict";

/**
 * numbers를 순회하며,
 * curr에 대한 position을 체크하고 이를 결과값에 붙인다.
 */
const solution = (numbers, hand) => {
  let result;
  let lPos = "*";
  let rPos = "#";

  result = numbers.reduce((acc, curr) => {
    let pos = checkHandPosition(curr, { lPos, rPos }, hand);
    acc = acc.concat(pos);

    if (pos === "L") {
      lPos = curr;
    } else {
      rPos = curr;
    }

    return acc;
  }, "");

  return result;
};

/**
 * key를 받아 현 위치가 왼손인지 오른손인지 파악한다.
 * 거리가 같다면 mainHand에 의해 결정되며,
 * 거리가 다르다면 작은 거리 기준으로 결정된다.
 */
const checkHandPosition = (key, { lPos, rPos }, mainHand) => {
  if ([1, 4, 7].includes(key)) {
    return "L";
  } else if ([3, 6, 9].includes(key)) {
    return "R";
  } else {
    const [lx, ly] = getCurrentPosition(lPos);
    const [rx, ry] = getCurrentPosition(rPos);
    const [tx, ty] = getCurrentPosition(key);

    const leftHandDistance = Math.abs(tx - lx) + Math.abs(ty - ly);
    const rightHandDistance = Math.abs(tx - rx) + Math.abs(ty - ry);

    let pos;
    if (leftHandDistance === rightHandDistance) {
      pos = mainHand[0].toUpperCase();
    } else {
      pos = leftHandDistance < rightHandDistance ? "L" : "R";
    }

    return pos;
  }
};

/**
 * key에 대한 현재 position을 반환한다.
 */
const getCurrentPosition = (key) => {
  return POSITION[key];
};

const POSITION = {
  1: [0, 0],
  2: [1, 0],
  3: [2, 0],
  4: [0, 1],
  5: [1, 1],
  6: [2, 1],
  7: [0, 2],
  8: [1, 2],
  9: [2, 2],
  "*": [0, 3],
  0: [1, 3],
  "#": [2, 3],
};
