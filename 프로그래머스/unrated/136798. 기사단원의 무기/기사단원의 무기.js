function solution(number, limit, power) {
    let arr = [];
    for(let i = 1; i <= number; i++) {
        let count = 1;
        for(let j = 1; j <= i/2; j++) {
            if(i % j === 0) {
                count++
            }
        }
        if(count > limit) {
            count = power;
        }
        arr.push(count);
        count = 0;
    }
    return arr.reduce((a, b) => {
        return a + b
    }, 0)
}