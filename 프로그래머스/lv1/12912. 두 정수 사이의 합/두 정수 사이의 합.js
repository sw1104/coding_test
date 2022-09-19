function solution(a, b) {
//     var answer = 0;
//     if(a === b){
//         return a
//     } else if(a < b){
//         for (let i = a; i <=b; i++){
//             answer += i
//         } return answer;
//     } else if(a > b){
//         for (let i = b; i <=a; i++){
//             answer += i
//     } return answer;
    
// }
    return (a+b)*(Math.abs(b-a)+1)/2;
}