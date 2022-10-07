X = int(input())
N = int(input())
Sum = 0

for i in range(N):
    a, b = map(int, input().split())
    Sum = Sum + a * b


if Sum == X:
    print("Yes")
else:
    print("No")