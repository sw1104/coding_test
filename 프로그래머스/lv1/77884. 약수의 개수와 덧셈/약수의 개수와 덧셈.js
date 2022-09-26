function solution(left, right) {
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            count -= i;
        } else {
            count += i;
        }
    }
    return count;
}