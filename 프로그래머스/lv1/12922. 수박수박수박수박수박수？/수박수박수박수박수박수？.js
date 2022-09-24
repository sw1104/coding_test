function solution(n) {
    let str = "수박".split("")
    let str1 = str[0];
  	let str2 = str[1];
    let arr = [];
  for (let i = 1; i <= n; i++){
  		if(i % 2 === 1){
        arr.push(str1)
      } else {
        arr.push(str2)
      }
      }
    return arr.join("")
}