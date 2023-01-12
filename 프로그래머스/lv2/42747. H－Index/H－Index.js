function solution(citations) {
    citations.sort((a, b) => b - a);
    
    let result = 0;
    for(let i = 0; i <citations.length ; i ++) {
        if(citations[i] >= i+1 && citations[i] >= (citations.length - i)) {
            result++;
        }
    }    
    return result;
}
