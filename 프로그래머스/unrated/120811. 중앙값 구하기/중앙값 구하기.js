function solution(array) {
    return array.sort((x, y) => x - y)[parseInt(array.length/2)]
}