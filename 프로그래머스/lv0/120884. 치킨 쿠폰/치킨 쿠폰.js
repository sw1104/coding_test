// const solution = ck => {
//     const sol2 = cp => {
//         if(cp < 10) return 0
//         const sv = Math.floor(cp / 10)
//         return sv + sol2(sv + (cp % 10));
//     }
//     return sol2(ck)
// }

// const solution = ch => {
//   let count = 0;
//   while(ch >= 10) {
//     count = count + Math.floor(ch / 10)
//     ch = Math.floor(ch/10) + (ch%10)
//   }
//   return count
// }
function solution(chicken) {
    let Arr = 0 // 몫의 합
    let Arr2 = 0 // 나머지의 합

    const self = (chicken) => {
        
        if (chicken < 10) {
            if(Arr2 + chicken >= 10){
              return Arr +  Math.floor(Arr2/10) + 1
                // if(Arr2%10 === 9){
                //     return Arr +  Math.floor(Arr2/10) + 1
                // }
                // if(Arr2%10 < 9){
                //     return Arr + Math.floor(Arr2/10)
                // }
            }
            return Arr
        }
        
        if(chicken >= 10){
            let a = Math.floor(chicken/10)
            let b = chicken%10
            Arr = Arr + a
            Arr2 = Arr2 + b
            return self(a)
          }
    }
    
    if (chicken < 10){
        return 0
    }
    if(chicken === 10){
        return 1
    }
    if(chicken>10){
        return self(chicken)
    }
}
