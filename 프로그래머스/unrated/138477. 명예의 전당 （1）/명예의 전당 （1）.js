function solution(k, score) {
    const arr = [];
    const result = [];
    for(let i = 0 ; i < score.length ; i ++) {
        if(i < k) {
            arr.push(score[i]);
        }
        if(Math.min(...arr) < score[i]) {
            arr.pop();
            arr.push(score[i]);
            arr.sort((a,b) => b-a);
        }
        result.push(arr[arr.length-1]);
    }
    return result
}