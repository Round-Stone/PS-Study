"use strict";

/**
 * 나누어야 할 divider 값은 1 ~ s.length - 1 입니다.
 * 만약 현재 답보다 압축된 string의 길이가 짧다면
 * answerString을 바꿉니다.
 */
const solution = (s) => {
  let answerString = s;

  for (let divider = 1; divider < s.length; divider++) {
    const dividedStringList = divideStringAsAmount(s, divider);
    const compressedString = compressString(dividedStringList);

    if (compressedString.length < answerString.length) {
      answerString = compressedString;
    }
  }

  return answerString.length;
};

/**
 * input string을 주어지는 amount 만큼 나누고,
 * 나누어진 substring 을 array 넣어 반환합니다.
 */
const divideStringAsAmount = (string, amount) => {
  let remainder = string;
  let dividedStringList = [];

  while (remainder.length > amount) {
    dividedStringList.push(remainder.substr(0, amount));
    remainder = remainder.slice(amount);
  }

  dividedStringList.push(remainder);

  return dividedStringList;
};

/**
 * stringList 를 순회하며,
 * 스스로의 값이 다음 값과 다르다면 압축합니다.
 * 이후, 압축된 string을 반환합니다.
 */
const compressString = (stringList) => {
  let startIdx = -1;
  const compressedString = stringList.reduce((acc, curr, idx) => {
    if (curr !== stringList[idx + 1]) {
      let amount = idx - startIdx;
      let compressed = amount < 2 ? `${curr}` : `${amount}${curr}`;
      acc = acc.concat(compressed);
      startIdx = idx;
    }
    return acc;
  }, "");

  return compressedString;
};
