n = int(input())

for _ in range(n):
    score = list(map(int, input().split()))
    av = sum(score[1:])/score[0]
    
    count = 0
    for i in score[1:]:
        if i > av:
            count += 1
            
    result = (count/score[0])*100
    print('%.3f' %result + '%')