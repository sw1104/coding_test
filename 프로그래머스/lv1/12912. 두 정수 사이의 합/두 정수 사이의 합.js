// const solution = (a, b) => {return (a+b)*(Math.abs(b-a)+1)/2};

function solution(a, b) {
  let count = 0
let arr = [a,b]
let abc = arr.sort((x, y) => x-y)
for(let i = abc[0]; i<= abc[1]; i++){
  count += i
}
  return count
}