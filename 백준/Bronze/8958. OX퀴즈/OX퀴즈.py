n = int(input())
for i in range(n):
    m = input()
    l = list(m)
    count = 0
    p = 1
    for i in l:
        if i == 'O':
            count += p
            p += 1
        else:
            p = 1
    print(count)