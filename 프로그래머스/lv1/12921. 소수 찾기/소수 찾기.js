function solution(n) {
    const isPrime = (n) => {
        for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    let cnt = 0;
    for(let i = 1; i <= n; i++) {
        if(isPrime(i)) {
            cnt++;
        }
    }
    return cnt;
}