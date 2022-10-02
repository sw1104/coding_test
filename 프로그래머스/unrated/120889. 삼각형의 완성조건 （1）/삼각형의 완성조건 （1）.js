function solution(s) {
    return s.sort((x, y) => x - y).pop() < s.reduce((x, y) => x + y, 0) ? 1 : 2
}