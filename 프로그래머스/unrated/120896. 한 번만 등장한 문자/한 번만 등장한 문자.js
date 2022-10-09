function solution(s) {
    let arr = [];
    let ss = s.split('').sort();
    for(let i = 0; i < ss.length; i++){
        if(ss.indexOf(ss[i]) === ss.lastIndexOf(ss[i])){
            arr.push(ss[i])
        }
    }
    return arr.join('')
}