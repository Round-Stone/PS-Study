import math
DEPLOY_RATE = 100

def solution(progresses, speeds):
    answer = [0]
    run_time = math.ceil((DEPLOY_RATE - progresses[0]) / speeds[0])
    
    for progress, speed in zip(progresses, speeds):
        if run_time >= math.ceil((DEPLOY_RATE - progress) / speed):
            answer.append(answer.pop() + 1)
        else:
            run_time = math.ceil((DEPLOY_RATE - progress) / speed)
            answer.append(1)
        
    return answer