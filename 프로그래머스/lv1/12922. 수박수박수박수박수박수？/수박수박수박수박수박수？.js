function solution(n) {
    // 첫 번째 풀이
//     let str = "수박".split("")
//     let str1 = str[0];
//   	let str2 = str[1];
//     let arr = [];
//   for (let i = 1; i <= n; i++){
//   		if(i % 2 === 1){
//         arr.push(str1)
//       } else {
//         arr.push(str2)
//       }
//       }
//     return arr.join("")
    // 첫 번째 풀이 후 repeat이 떠올라서 두번 째 풀이
    return "수박".repeat(n).slice(0,n);
}
