function solution(k, tangerine) {
    let cnt = 0;
    const obj = {};
    
    tangerine.forEach((i) => obj[i] = (obj[i] || 0) + 1);
    
    const arr = Object.values(obj).sort((a, b) => b - a);
    
    for (let i = 0; i < arr.length; i++) {
        cnt++;
        if(k > arr[i]) {
            k -= arr[i];
        } else {
            break;
        }
    }
    
    return cnt;
}