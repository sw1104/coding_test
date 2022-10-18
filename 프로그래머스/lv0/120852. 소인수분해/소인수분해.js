function solution(n) {
    let arr = [];
    let arr2 = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
          arr.push(i);
          n /= i;
        }
    }
    if (n >= 2) {
        arr.push(n)
    }
    for(let i = 0; i < arr.length; i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i])
        }
    }
    return arr2
}