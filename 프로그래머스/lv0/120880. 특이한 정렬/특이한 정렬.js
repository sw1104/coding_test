function solution(nl, n) {
    const result = nl.sort((a, b) => {
        let x = a - n
        let y = b - n
        if(Math.abs(x) === Math.abs(y)) {
            return b - a
        } else {
            return Math.abs(x) - Math.abs(y)
        }
    })
    return result
}



