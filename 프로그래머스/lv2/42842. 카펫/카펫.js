function solution(brown, yellow) {
    let by = brown + yellow
    let arr = []
    for(let i = 0; i <= by; i++) {
        if(by % i === 0) {
            arr.push(i)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
        if(arr[i] * arr[j] === by && (arr[i]-2) * (arr[j]-2) === yellow)
            return [arr[j], arr[i]]
        }
    }
}
