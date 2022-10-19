function solution(nl, n) {
    const result = nl.sort((a, b) => {
        const x = a - n;
        const y = b - n;
        if(Math.abs(x) === Math.abs(y)){
            return b - a
        } else {
           return Math.abs(x) - Math.abs(y)
        }
    })
    return result
}