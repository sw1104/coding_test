function solution(my_string) {
    let arr = []
    let ms = my_string.replace(/[^0-9]/g, '').split('')
    for(let i = 0; i < ms.length; i++){
        arr.push(parseInt(ms[i]))
    }
    return arr.sort((x, y) => x - y)
}