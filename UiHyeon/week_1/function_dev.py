import math
DEPLOY_RATE = 100
COMPLETE_TASK_PLUS = 1

# math.ceil((DEPLOY_RATE - porgress) / speed)는
# 각 작업의 진행도와 개발되는 속도를 통해 DEPLOY_RATE를
# 달성하는 시간을 계산하는 연산식입니다.

def solution(progresses, speeds):
    answer = [0]
    first_progress = progresses[0]
    first_speed = speeds[0]
    run_time = math.ceil((DEPLOY_RATE - first_progress) / first_speed)
    
    for progress, speed in zip(progresses, speeds):
        if run_time >= math.ceil((DEPLOY_RATE - progress) / speed):
            answer.append(answer.pop() + COMPLETE_TASK_PLUS)
        else:
            run_time = math.ceil((DEPLOY_RATE - progress) / speed)
            answer.append(COMPLETE_TASK_PLUS)
        
    return answer