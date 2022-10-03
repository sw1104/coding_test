function solution(s1, s2) {
    let arr = [];
    let leng = 0
    if(s1.length > s2.length){
        leng = s2.length
    } else {
        leng = s1.length
    }
    for(let i = 0; i <= leng; i++){
        if(s2.includes(s1[i])){
            arr.push(s1[i])
        }
    }
    return arr.length
}