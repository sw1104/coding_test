function solution(d, b) {
    d.sort((x, y) => x - y);

    while (
      d.reduce((x, y) => (x + y), 0) > b
    ) 
      d.pop()

    return d.length;
}
