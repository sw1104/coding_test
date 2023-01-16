function solution(n) {
    let arr = []
    for(let i = 0; i <= n; i++) {
        if(i === 0 || i === 1) {
            arr.push(i% 1234567)
        }
        if(i >= 2) {
            arr.push((arr[i-1] + arr[i-2]) % 1234567)
        }
    }
    return arr[arr.length-1] 
}