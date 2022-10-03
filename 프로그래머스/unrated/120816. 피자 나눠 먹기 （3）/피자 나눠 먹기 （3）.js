function solution(s, n) {
    return Number.isInteger(n / s) ? n/s : parseInt(n/s)+1
}