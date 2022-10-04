function solution(i, j, k) {
    let arr = []
    for(let x = i; x <= j; x++){
        arr.push(x)
    }
    let at = arr.join('').split('')
    let cnt = 0;
    let array = []
    for(let y = 0; y < at.length; y++){
        if(parseInt(at[y]) === k){
            cnt += 1
        }
    } return cnt
}
        