function solution(box, n) {
    return box.map(item => parseInt(item/n)).reduce((x, y) => x * y)
}