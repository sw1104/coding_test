function solution(arr, divisor) {
    let result = arr.filter(item => item % divisor === 0).sort((x, y) => x - y);
    return result.length !== 0 ? result : [-1]
}