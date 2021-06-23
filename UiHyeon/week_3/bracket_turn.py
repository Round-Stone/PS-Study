from collections import deque
import re

def isValidBracket(deq):
    stack = []
    bracket = re.compile('[ \( \{ \[ ]')
    for check in deq:
        if bracket.match(check): stack.append(check)
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
        if isValidBracket(deq):
            count += 1
        
        deq.append(deq.popleft())
        
    if count > 1:
        return count
    else:
        return 0