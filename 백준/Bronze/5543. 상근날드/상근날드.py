b = []
d = []
for i in range(0, 3):
    x = int(input())
    b.append(x)
 
for i in range(0, 2):
    y = int(input())
    d.append(y)
 
print(min(b)+min(d)-50)