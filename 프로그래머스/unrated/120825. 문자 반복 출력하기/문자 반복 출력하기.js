function solution(my_string, n) {
    let ms = my_string.split('')
    let arr = []
    for( let i = 0; i < ms.length; i++ ){
        for( let j = 1; j <= n; j++){
            arr.push(ms[i])
        }
    } return arr.join('')
}