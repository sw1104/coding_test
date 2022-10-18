function solution(b, s) {
    let n = BigInt(1);
    let m = BigInt(1);
    let nm = BigInt(1);
    let bs = BigInt(b-s);
    for(let i = 1; i <= b; i++){
        n *= BigInt(i)
    }
    for(let i = 1; i <= s; i++){
        m *= BigInt(i)
    }
    for(let i = 1; i <= bs; i++){
        nm *= BigInt(i)
    }
    return n/(nm*m)
}