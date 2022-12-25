// function solution(n, k) {
  
//   const a = re => (re + 2) % n.length;
  
//   let re = 0;
//   console.log(a(re))
//   for (let i = 0; i < k - 1; i++) {
//     re = a(re)
//   };
  
//   return n[re];
// }

const solution = (n, k) => {
  return n[((k-1)*2)%n.length];
}