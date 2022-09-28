function solution(x, y, z) {
  let result = 0
	for(let i = 1; i <= z; i++){
    result += i*x
  } if(y-result > 0){
    return 0      
  } return result - y
}
