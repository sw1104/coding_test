function solution(numbers) {
    let sn = numbers.sort((x, y) => x - y)
    return sn.slice(sn.length-2).reduce((x, y) => x * y)
}