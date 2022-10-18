function solution(A, B) {
    let as = A.split('')
    if(A === B) {
        return 0
    }
    for(let i = 1; i <= A.length; i++){
        let aa = as.unshift(as.pop())
        if(as.join('') === B){
            return i
        }
    }
    return -1
}