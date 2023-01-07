function solution(answers) {
    let a = [1,2,3,4,5];
    let b = [2,1,2,3,2,4,2,5];
    let c = [3,3,1,1,2,2,4,4,5,5];
    
    let cntA = 0;
    let cntB = 0;
    let cntC = 0;
    for(let i = 0; i < answers.length; i++) {
        a = a.concat(a[i])
        b = b.concat(b[i])
        c = c.concat(c[i])
        if(answers[i] === a[i]){
            cntA++
        }
        if(answers[i] === b[i]) {
            cntB++
        }
        if(answers[i] === c[i]) {
            cntC++
        }
    }
    if(cntA > cntB && cntA > cntC) return [1]
    if(cntB > cntA && cntB > cntC) return [2]
    if(cntC > cntA && cntC > cntB) return [3]
    if(cntA > cntC && cntA === cntB) return [1,2]
    if(cntB > cntA && cntB === cntC) return [2,3]
    if(cntC > cntB && cntC === cntA) return [1,3]
    if(cntA === cntB && cntB === cntC) return [1,2,3]
}