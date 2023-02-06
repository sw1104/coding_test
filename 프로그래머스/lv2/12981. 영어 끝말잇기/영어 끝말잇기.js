function solution(n, words) {
    let arr = [words[0]];
    let outWords;
    let result = [0, 0];
    for(let i = 1; i < words.length; i++) {
        if(!arr.includes(words[i]) && arr[arr.length-1][arr[arr.length-1].length-1] === words[i][0]){
            arr.push(words[i]);
            continue;
        }
        outWords = words.lastIndexOf(words[i]) + 1;
        break;
    }
    if(arr.length === words.length){
        return result;
    } else if(outWords % n === 0) {
        result[0] = n
        result[1] = Math.ceil(outWords / n);
    } else {
        result[0] = outWords % n;
        result[1] = Math.ceil(outWords / n);
    }
    return result;
}