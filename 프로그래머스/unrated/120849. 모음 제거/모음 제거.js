function solution(my_string) {
    let arr = [];
    let ms = my_string.split('')
    let vowel = ['a','e','i','o','u']
    for(let i = 0; i < ms.length; i++){
        if(vowel.indexOf(ms[i]) === -1){
            arr.push(ms[i])
        }
    } return arr.join('')
}