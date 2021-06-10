NET_PLUS = 1
CONNECT = 1

def count_net(graph, n):
    visit = [0 for i in range(len(graph))]
    net_num = 0
                
    for base_com in range(n):
        stack = [base_com]
        if visit[base_com] != 1:
            net_num += NET_PLUS
        
        while stack:
            node = stack.pop()
            if visit[node] != 1:
                visit[node] = 1
                stack.extend(graph[node])
                
    return net_num

def solution(n, computers):
    graph = {}
    
    for com_num in range(n):
        graph[com_num] = []
        
    for i in range(len(computers)):
        for j in range(len(computers[0])):
            if computers[i][j] == CONNECT:
                graph[i].append(j)
        
    return count_net(graph, n)