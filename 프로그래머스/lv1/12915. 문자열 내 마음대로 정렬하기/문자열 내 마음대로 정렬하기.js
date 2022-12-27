// const solution = (strings, n) => {
//   let result = strings.sort((a,b) => {
//     if(a[n] > b[n]) return 1;
//     if(a[n] < b[n]) return -1;
//     if(a[n] === b[n]){
//       if(a > b) return 1;
//       if(a < b) return -1;
//     }
//   })
//   return result
// }

const solution = (s, n) => {
    return s.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}