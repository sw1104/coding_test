function solution(nl, n) {
    let arr = []
    for(let i = 0; i < nl.length/n; i++){
        arr.push(nl.slice(n*i, i*n+ n))
    }
    return arr
}