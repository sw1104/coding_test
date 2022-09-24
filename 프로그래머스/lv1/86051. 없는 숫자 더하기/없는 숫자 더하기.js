function solution(n) {
    let arr = [];
    let result = 0;
    for(let i = 1; i <=9; i++){
        if(!n.includes(i)){
            result += i
        }
    }
    return result
}