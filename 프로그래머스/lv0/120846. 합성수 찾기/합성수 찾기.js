function solution(n) {
    let cnt = 0;
    const a = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return true;
            }
        } 
        return false;
    }
    
    for (let i = 1; i <= n; i++) {
        if (a(i)) {
            cnt += 1
        }
    }
    return cnt;
}