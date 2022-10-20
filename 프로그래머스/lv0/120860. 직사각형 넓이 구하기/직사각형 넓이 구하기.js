function solution(dots) {    
    let x = dots.flatMap(([x, y]) => x)
    let y = dots.flatMap(([x, y]) => y)
    
    let w = Math.max(...x) - Math.min(...x)
    let h = Math.max(...y) - Math.min(...y)
    
    let result = w * h
    
    return result
}