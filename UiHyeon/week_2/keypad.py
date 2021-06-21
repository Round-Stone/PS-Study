import math

def solution(numbers, hand):
    answer = []
    dic_num = {}
    dic_num[0] = [1,3]
    dic_num["*"] = [0,3]
    dic_num["#"] = [2,3]
    hand_L = "*"
    hand_R = "#"
    
    for i in range(0,9):
        dic_num[i+1] = [i%3,i//3]
        
    print(dic_num[3])
    
    for number in numbers:
        
        if number in [1,4,7]:
            hand_L = number
            answer.append("L")

        elif number in [3,6,9]:
            hand_R = number
            answer.append("R")

        else:
            L_x = abs(dic_num[hand_L][0] - dic_num[number][0])
            L_y = abs(dic_num[hand_L][1] - dic_num[number][1])
            R_x = abs(dic_num[hand_R][0] - dic_num[number][0])
            R_y = abs(dic_num[hand_R][1] - dic_num[number][1])
            
            distance_L = L_x + L_y
            distance_R = R_x + R_y
            
            if distance_L == distance_R:
                if hand == "left":
                    hand_L = number
                    answer.append("L")
                else:
                    hand_R = number
                    answer.append("R")
            elif distance_L < distance_R:
                hand_L = number
                answer.append("L")
            else:
                hand_R = number
                answer.append("R")
        
    return "".join(answer)