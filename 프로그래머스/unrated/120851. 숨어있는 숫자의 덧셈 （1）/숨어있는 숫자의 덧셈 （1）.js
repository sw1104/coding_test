function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split('').reduce((x, y) => parseInt(x) + parseInt(y), 0)
}