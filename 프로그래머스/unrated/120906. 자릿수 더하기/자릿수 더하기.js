function solution(n) {
    return num = (n+'').split('').reduce((x,y) => parseInt(x) + parseInt(y), 0);
}