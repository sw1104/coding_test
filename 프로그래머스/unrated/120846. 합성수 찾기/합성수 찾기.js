function solution(n) {
    let cnt = 0;
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return true;
            }
        } 
        return false;
    }
    
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            cnt += 1
        }
    }
    return cnt;
}