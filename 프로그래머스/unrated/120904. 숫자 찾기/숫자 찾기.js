function solution(num, k) {
    let ns = (num+'').split('')
    for(let i = 0; i < ns.length; i++){
        if(ns[i] == k){
            return i+1
        }
    }
    return -1
}