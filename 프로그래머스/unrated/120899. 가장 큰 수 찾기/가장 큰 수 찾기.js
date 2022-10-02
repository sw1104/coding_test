function solution(array) {
    let cnt = 0
    let max = Math.max(...array);
    for(let i = 0; i < array.length; i++){
        if(array[i] === max){
            cnt = i
        }
    } 
    return [max, cnt]
}