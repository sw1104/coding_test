function solution(a, b) {
    let measure = 0
    for(let i = 1; i <= a; i++){
        if(a % i === 0 && b % i === 0){
            measure = i
        }
    }
    console.log('measure: ', measure)
    let c = b / measure
    let arr = []
    console.log('c: ', c)
    for (let i = 2; i <= c; i++){
        if(c % i === 0){
            arr.push(i)
            c /= i
        }
    }
    console.log('arr: ', arr)
    console.log('arr.length: ', arr.length)
    let result = arr.find(n => n % 2 !== 0 &&  n % 5 !== 0) ? 2 : 1
    
    return result;
}
