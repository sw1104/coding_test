function solution(n){
    let cnt = 0;
    while (n > 0) {
        if ( n % 2 === 1) {
            n -= 1;
            cnt++;
        }
        n /= 2;
    }
    return cnt;
}
