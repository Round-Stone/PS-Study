import math

def solution(progresses, speeds):
    # 초기값 설정(첫 업무부터 진행하기 때문에 answer를 0을 담고있는 list로 초기화)
    answer = [0]
    # 첫 업무의 run_time을 계산
    run_time = math.ceil((100 - progresses[0]) / speeds[0])
    
    # 각 업무의 run_time을 계산하여 앞선 업무의 run_time과 비교 
    for progress, speed in zip(progresses, speeds):
        if run_time >= math.ceil((100 - progress) / speed):
            answer.append(answer.pop() + 1)
        else:
            run_time = math.ceil((100 - progress) / speed)
            answer.append(1)
        
    return answer