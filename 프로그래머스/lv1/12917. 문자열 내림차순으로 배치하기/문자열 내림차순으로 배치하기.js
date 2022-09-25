function solution(s) {
    return s.split('').sort((x, y) => x < y ? 0 : -1).join('')
}