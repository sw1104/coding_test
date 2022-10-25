function solution(A,B){
    let as = A.sort((a, b) => a - b)
    let bs = B.sort((a, b) => b - a)
    let result = 0
    for(let i = 0; i < as.length; i++) {
        result += as[i]*bs[i]
    }
    return result;
}