function solution(s) {
    let notStr = [];
    let result = [];
    
    for(let i = 0; i < s.length; i++) {
        if(!notStr.includes(s[i])) {
            notStr.push(s[i]);
            result.push(-1);
            continue;
        }
        
        let cnt = 0;
        for(let j = i - 1; j >= 0; j--) {    
            cnt++;
            if(s[i] === s[j]) {
                result.push(cnt);
                break;
            }
        }
    }
    return result;
}