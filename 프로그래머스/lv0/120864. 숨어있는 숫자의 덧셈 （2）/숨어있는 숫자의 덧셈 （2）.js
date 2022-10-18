function solution(my_string) {
    let reg = /[^0-9]/g;
    let ms = my_string.split(reg)
    let result = 0;
    for(let i = 0; i < ms.length; i++){
        if(parseInt(ms[i])){
            result += parseInt(ms[i])
        }
    }
    return result
}