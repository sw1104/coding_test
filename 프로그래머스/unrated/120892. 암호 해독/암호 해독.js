function solution(cipher, code) {
    let arr = [];
    let cs = cipher.split('');
    for (let i = 0; i <= cs.length; i++){
        if(i % code === 0){
            arr.push(cs[i-1])
        }
    }
    return arr.join('')
}