// function solution(x, n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++){
//         arr.push(x * i)
      
//     }return arr;
// }

const solution = (x, n) => Array(n).fill(x).map((a,b) => (b+1)*a)