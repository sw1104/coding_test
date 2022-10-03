function solution(my_string, num1, num2) {
    let arr = [];
    let ms = my_string.split('');
    for(let i = 0; i < ms.length; i++){
        if(i !== num1 && i !== num2){
            arr.push(ms[i])
        } else if(i === num1){
            arr.push(ms[num2])
        } else if (i === num2){
            arr.push(ms[num1])
        }
    }
    return arr.join('')
}