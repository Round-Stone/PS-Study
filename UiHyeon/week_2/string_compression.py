from collections import deque

def solution(s):
    answer = 0
    temp = []
    mini = len(s)
    
    for i in range(1,len(s)+1):
        temp = deque(s[j : j+i] for j in range(0,len(s),i))
        result = ""
        
        while temp:
            base = temp.popleft()
            count = 1
            
            if len(temp) < 1:
                result += base
                break
                
            for k in range(len(temp)):
                compare_str = temp.popleft()
                
                if base == compare_str:
                    count += 1
                else:
                    if count > 1:
                        result += (str(count) + base)
                        temp.appendleft(compare_str)
                        break
                    else:
                        result += base
                        temp.appendleft(compare_str)
                        break
                        
                if len(temp) < 1:
                    result += (str(count) + base)
                    break
                    
        if mini > len(result):
            mini = len(result)
            
        answer = mini
    
    return answer