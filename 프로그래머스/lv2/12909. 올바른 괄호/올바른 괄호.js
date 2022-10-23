function solution(s){
    let ss = s.split('')
    let count = 0
    for(let i = 0; i < ss.length; i++){
        if(ss[i] === '(') {
            count += 1
        }
        if(ss[i] === ')') {
            count -= 1
        }
        if(count < 0) {
            return false
        }
    } if(count === 0){
        return true
    } else {
        return false
    }
}