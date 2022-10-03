function solution(age) {
    let arr = []
    let pAge = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let as = (age+'').split('')
    for(let i = 0; i < as.length; i++){
        arr.push(pAge[parseInt(as[i])])
    }
    return arr.join('')
}