N,X = map(int, input().split())
U = list(map(int, input().split()))

for i in U:
    if i < X:
        print(i, end=" ")