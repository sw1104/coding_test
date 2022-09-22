function solution(ab, s) {
  // 첫 풀이
  //    let arr = [];
  //    let answer = 0;
  //    for (let i=0; i<ab.length; i++){
  //        if(s[i] === true){
  //            arr.push(ab[i])
  //        } else if(s[i] === false){
  //            arr.push(-ab[i]) 
  //        }
  //         answer += arr[i]
  //     } return answer
  // 두번 째 풀이
    return ab.reduce((acc, value, i) => acc + (value * (s[i] ? 1 : -1)) ,0)
}
