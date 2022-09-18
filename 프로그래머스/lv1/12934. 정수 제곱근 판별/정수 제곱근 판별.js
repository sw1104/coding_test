// function solution(n) {
//    let a = Math.sqrt(n)
//    let b = a+1;
//   let c = Math.pow(b, 2)
  
//   if(!a === Number.isInteger(a)){
//     return -1
//   }
//   return c
// }

function solution(n){
  return  (!Math.sqrt(n) === Number.isInteger(Math.sqrt(n))) ? -1 :  Math.pow(Math.sqrt(n)+1 ,2)
}