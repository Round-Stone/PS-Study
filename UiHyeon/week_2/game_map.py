from collections import deque

def solution(maps):
    answer = 0
    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]
    que = deque()
    que.append((0,0))
    maps[0][0] = 0
    distance = [[0] * len(maps[0]) for _ in range(len(maps))]
    distance[0][0] = 1
    
    while que:
        temp = que.popleft()
        for i in range(4):
            x = temp[0] + dx[i]
            y = temp[1] + dy[i]

            if (0 <= x < len(maps[0])) and (0 <= y < len(maps)):
                if maps[y][x] != 0:
                    que.append((x, y))
                    distance[y][x] = distance[temp[1]][temp[0]] + 1
                    maps[y][x] = 0
    
    answer = distance[-1][-1]
    
    if answer == 0:
        return -1
    else:
        return answer