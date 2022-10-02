function solution(my_string) {
    let arr = []
    let ms = my_string.split('')
    for(let i = 0; i < ms.length; i++){
        if(!arr.includes(ms[i])){
            arr.push(ms[i])
        }
    }
    return arr.join('')
}