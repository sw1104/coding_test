function solution(ab, s) {
  let arr = [];
  let answer = 0;
    for (let i=0; i<ab.length; i++){
      if(s[i] === true){
        arr.push(ab[i])
      } else if(s[i] === false){
        arr.push(-ab[i]) 
      }
      answer += arr[i]
    } return answer
}
