// function solution(n) {
//     let answer = 0;
//     let str = n.toString();
//     let arr = str.split('');
//     for(let i = 0; i < arr.length; i++){
//         answer += parseInt(arr[i])
//     }
//      return answer
// }
const solution = n => String(n).split('').reduce((a,b)=>a+b*1, 0);