function solution(k, m, score) {
    score = score.sort((a, b)=> b - a);

    let sum = 0;
    for(let i = 0; i + m <= score.length; i += m){
        sum += score[i + m - 1] * m
    }
    return sum;
}