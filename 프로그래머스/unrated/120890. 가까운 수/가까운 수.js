function solution(array, n) {
    let arr = []
    for(let i = 0; i < array.length; i++){
        let a = Math.abs(n-array[i])
            arr.push(a)
    }
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    let as = array.sort((a, b) => a - b)
    return as.find(a => Math.abs(a - n) === min);
}