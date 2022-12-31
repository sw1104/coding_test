function solution(p, c) {
    p.sort()
    c.sort()
    console.log(p)
    console.log(c)
    for(let i = 0; i < p.length; i++) {
        if(p[i] !== c[i]) {
            return p[i]
        }
    }
}