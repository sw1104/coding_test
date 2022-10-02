function solution(my_string, letter) {
    let arr = []
    let ms = my_string.split('')
    for(let i = 0; i < ms.length; i++){
        if(ms[i] !== letter){
            arr.push(ms[i])
        }
    } 
    return arr.join('')
}