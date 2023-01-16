function solution(n) {
    let oneLen = n.toString(2).match(/1/g).length
    for(let i = n+1; i <= 1000000; i++) {
        if(i.toString(2).match(/1/g).length === oneLen) {
            return i
        }
    }
}