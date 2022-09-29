function solution(n, m) {
  
let arr = [];
  for(let i=1; i <=m; i++){
    if(n % i === 0 && m % i === 0 ){
      arr.push(i)
    }
  } let x = arr[arr.length-1]
  let y = n*m/x
  return [x, y]
} 