function solution(a, b) {
    return a.reduce((acc, a, i) => acc += a*b[i] ,0)
}