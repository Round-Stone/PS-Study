def solution(rows, columns, queries):
    answer = []
    
    #행렬 생성
    graph = [[i for i in range(1 + (r * columns),columns+1+(r * columns))] for r in range(rows)]

    for i in range(len(queries)):
        base_r, base_c = queries[i][0], queries[i][1]
        end_r, end_c = queries[i][2], queries[i][3]
        slave = graph[base_r-1][end_c-1]
        mini = slave
        #상
        for j in range(end_c-1, base_c-1, -1): 
            temp = graph[base_r-1][j-1]
            graph[base_r-1][j] = temp
            mini = min(temp, mini)
        #좌
        for j in range(base_r-1, end_r-1):
            temp = graph[j+1][base_c-1]
            graph[j][base_c-1] = temp
            mini = min(temp, mini)
        #하
        for j in range(base_c-1, end_c-1):
            temp = graph[end_r-1][j+1]
            graph[end_r-1][j] = temp
            mini = min(temp, mini)
        #우
        for j in range(end_r-1, base_r-1, -1):
            temp = graph[j-1][end_c-1]
            graph[j][end_c-1] = temp
            mini = min(temp, mini)
            
        graph[base_r][end_c-1] = slave
        answer.append(mini)
            
    return answer