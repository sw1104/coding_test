function solution(s, skip, index) {
    let skipCode = [];
    for(let i = 0; i < skip.length; i++) {
        skipCode.push(skip[i].charCodeAt(0))
    }
    
    let arr = [];
    let arrS = s.split('');
    
    for(let i = 0; i < arrS.length; i++) {
        let ascStr = arrS[i].charCodeAt(0);
        for(let i = 0; i < index; i++) {
            ascStr++
            while(skipCode.includes(ascStr)) {
                ascStr++
            }
            if(ascStr === 'z'.charCodeAt(0) + 1) {
                ascStr = 'a'.charCodeAt(0);
                while(skipCode.includes(ascStr)) {
                    ascStr++
                }
            }
        }
        arr.push(ascStr)
    }
    
    return String.fromCharCode(...arr)
}