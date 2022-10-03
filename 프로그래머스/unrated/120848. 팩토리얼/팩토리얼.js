function solution(n) {
  let arr = []
	let count = 1
  for(let i = 1; i <= n; i++){
      count = count * i
    if(count <= n){
      arr.push(i)
    } else if(count > n){
        break;
    }
  } return Math.max(...arr)
}