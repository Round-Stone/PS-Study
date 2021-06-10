// 방문 여부 확인을 위한 Array 만들기
// 방문 안했으면 각 computer 내부 dfs
//    조건 : 연결되어있는가? 방문하지 않았는가?

"use strict";

function solution(n, computers) {
  let answer = 0;
  let isVisited = new Array(n).fill(false);

  const dfs = (idx) => {
    computers[idx].forEach((isConnected, computerIdx) => {
      if (isConnected && !isVisited[computerIdx]) {
        isVisited[computerIdx] = true;
        dfs(computerIdx);
      }
    });
  };

  for (let i = 0; i < n; i++) {
    if (!isVisited[i]) {
      isVisited[i] = true;
      dfs(i);
      answer++;
    }
  }

  return answer;
}
