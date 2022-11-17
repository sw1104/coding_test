function solution(n, s) {
    const arr = Array(n).fill(0).map(i => i = Math.floor(s / n))
    for(let i = n-1; i >= n-s%n; i--){
        arr[i]++;
    }    
    return s === 1 || n > s ? [-1] : arr
}
