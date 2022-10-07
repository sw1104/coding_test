function solution(bin1, bin2) {
    let a = parseInt(bin1, 2)
    let b = parseInt (bin2, 2)
    
    let add = a + b
    return add.toString(2)
}