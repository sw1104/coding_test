function solution(ab, s) {
    return ab.reduce((acc, value, i) => acc + (value * (s[i] ? 1 : -1)) ,0)
}
