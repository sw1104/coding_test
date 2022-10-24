def sn (n):
    sn = n
    while n != 0:
        sn += n % 10
        n //= 10
    return sn

result = []

for i in list(range(1, 10001)):
    result.append(sn(i))
    if i not in result:
        print(i)