while True:
    s = input()
    count = 0
    if s == '#':
        break
    for c in s:
        if c in 'aeiouAEIOU':
            count += 1
    print(count)