function solution(bb) {
    const reg = new RegExp('^(aya|ye|woo|ma)+$');
    let count = 0
    for (let i = 0; i < bb.length; i++){
        if(reg.test(bb[i])){
            count += 1
        }
    }
    return count
}