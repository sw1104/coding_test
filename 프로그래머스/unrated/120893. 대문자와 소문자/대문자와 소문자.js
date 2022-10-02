function solution(my_string) {
    let arr = []
    let ms  = my_string.split('');
    for(let i = 0; i < ms.length; i++){
        if(ms[i] === ms[i].toUpperCase()){
            arr.push(ms[i].toLowerCase())
        } else if(ms[i] === ms[i].toLowerCase()){
            arr.push(ms[i].toUpperCase())
        }
    } return arr.join('')
}