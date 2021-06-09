NET_PLUS = 1
CONNECT = 1

def solution(n, computers):
    answer = 0
    graph = {}
    visit = []
    
    for com_num in range(n):
        graph[com_num] = []
        
    for i in range(len(computers)):
        for j in range(len(computers[0])):
            if computers[i][j] == CONNECT:
                graph[i].append(j)
                
    for base_com in range(n):
        stack = [base_com]

        if base_com not in visit:
            answer += NET_PLUS
        
        while stack:
            node = stack.pop()

            if node not in visit:
                visit.append(node)
                stack.extend(graph[node])
        
    return answer