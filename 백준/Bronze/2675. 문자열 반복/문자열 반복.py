n = int(input())

for _ in range(n):
    count, s = input().split()
    for i in s:
        print(i*int(count), end='')
    print()