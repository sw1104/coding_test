function solution(n, nl) {
    let arr = [];
    for(let i = 0; i < nl.length; i++){
        if(nl[i] % n === 0){
            arr.push(nl[i])
        }
    }return arr
}