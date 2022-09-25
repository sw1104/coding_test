function solution(s) {
    return s.split('').sort((x, y) => x-y).join('')
}