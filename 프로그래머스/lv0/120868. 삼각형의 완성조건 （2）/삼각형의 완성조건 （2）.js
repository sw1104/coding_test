function solution(sides) {
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let a = max-min+1
    let count = 0;
    for(let i = a; i <= max; i++){
        count++
    }
    for(let i = max+1; i < max+min; i++){
        count++
    }
    return count
}