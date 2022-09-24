function solution(a, b) {
    // 첫 풀이
//     let arr = [];
//     let count = 0
// 	for (let i = 0; i < a.length; i++) {
//         count += a[i] * b[i]
//     }
//     return count
    
    // reduce를 이용한 풀이
    return a.reduce((acc, a, i) => acc += a*b[i] ,0)
}
