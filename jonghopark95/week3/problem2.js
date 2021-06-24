const solution = (s) => {
  let answer = 0;
  let target = s;

  for (let i = 0; i < target.length; i++) {
    const firstCharacter = target[0];
    const remainder = target.slice(1, target.length);
    target = `${remainder}${firstCharacter}`;

    const isValid = checkIsValidBracketString(target);
    if (isValid) answer++;
  }

  return answer;
};

/**
 * 현재 string의 bracket 들의 짝이 정상적인지 확인합니다.
 * 만약 string이 남아있는데
 * 남아있는 string이 홀수의 길이이거나,
 * close bracket이 없거나,
 * close bracket의 이전 bracket이 match 되지 않는다면
 * false를 반환합니다.
 */
const checkIsValidBracketString = (string) => {
  let trimmedString = string;

  while (trimmedString !== "") {
    const { bracket: closeBracket, pos } = findCloseBracket(trimmedString);
    const prevChar = trimmedString[pos - 1];

    if (string.length % 2 === 1) return false;
    if (closeBracket === undefined) return false;
    if (prevChar !== getPairedBracket(closeBracket)) return false;

    const bracketPair = trimmedString.substr(pos - 1, 2);
    trimmedString = trimmedString.replace(bracketPair, "");
  }

  return true;
};

/**
 * close bracket과 짝을 이루는 bracket을 반환합니다.
 */
const getPairedBracket = (closeBracket) => {
  const BRACKETS = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  return BRACKETS[closeBracket];
};

/**
 * 현 string에서,
 * 가장 가까운 close bracket을 찾습니다.
 */
const findCloseBracket = (s) => {
  let bracket = "";
  let pos = "";

  for (let i = 0; i < s.length; i++) {
    const currCharacter = s[i];

    if (isCloseBracket(currCharacter)) {
      bracket = currCharacter;
      pos = i;
      break;
    }
  }

  return { bracket, pos };
};

const isCloseBracket = (bracket) =>
  CLOSE_BRACKET.includes(bracket) ? true : false;
const CLOSE_BRACKET = ["]", ")", "}"];
