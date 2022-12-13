function solution(s, n) {
    const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                   'O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                   'o','p','q','r','s','t','u','v','w','x','y','z']
    let result = ''
        for(let i =0; i <s.length; i++){
            if(s[i] == ' ') {
                result += ' '; 
                continue;
            }
            let arr = upper.includes(s[i]) ? upper : lower;
            let idx = arr.indexOf(s[i]) + n;
            if(idx >= arr.length) {
                idx -= arr.length;
            }
        result += arr[idx];
    }
    return result;
}