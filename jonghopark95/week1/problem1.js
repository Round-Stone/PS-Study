// 작업을 수행하기 위해 남은 일수를 계산
// 남은 일수를 iterate
//      조건 : 배열 길이 - 1
//      1. 현 값보다 뒤의 값이 작다면 pass
//      2. 크다면 stop, 시작 포인트를 현 포인트로 바꾸고 answer에 push
// 마지막 남은 일수 push

"use strict";

function solution(progresses, speeds) {
  let answer = [];

  let remainDayOnProgress = progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });

  let currentPoint = 0;
  for (let i = 1; i < remainDayOnProgress.length; i++) {
    if (remainDayOnProgress[currentPoint] < remainDayOnProgress[i]) {
      answer.push(i - currentPoint);
      currentPoint = i;
    }
  }

  answer.push(remainDayOnProgress.length - currentPoint);

  return answer;
}
