function solution(clothes) {
    clothes = clothes.reduce((a, b)=> {
        a[b[1]] = a[b[1]] ? a[b[1]] + 1 : 1;
        return a;
    } , {})
    let arr = Object.values(clothes)
    arr = arr.reduce((a, b) => a*b+a, 1)
    return arr - 1
}