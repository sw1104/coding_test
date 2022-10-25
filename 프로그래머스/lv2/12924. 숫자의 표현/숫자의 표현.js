function solution(n) {
    let arr = []
    let result = []
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            arr.push(i)
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
            result.push(arr[i])
        }
    }
    return result.length
}