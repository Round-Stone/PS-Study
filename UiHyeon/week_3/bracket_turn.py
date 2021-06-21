from collections import deque

def right(deq):
    stack = []
    for check in deq:
        if check == '(' or check == '{' or check == '[':
            stack.append(check)
        if stack:
            if check == ')' and stack.pop() != '(':
                return False
            if check == '}' and stack.pop() != '{':
                return False
            if check == ']' and stack.pop() != '[':
                return False
        else: return False
        
    if stack: return False
        
    return True

def solution(s):
    answer = -1
    deq = deque(_ for _ in s)
    print(deq)
    count = 0
    
    for i in range(len(s)):
        if right(deq):
            count += 1
        
        deq.append(deq.popleft())
        
    if count > 1:
        return count
    else:
        return 0