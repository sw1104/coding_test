function solution(s) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arr = [];
    let result = [];
    if(Number(s)) {
        return Number(s);
    }
    for(let i = 0; i < s.length; i++) {
        if(!Number(s[i])){
            if(arr[0] === undefined){
                arr.push(s[i])
                continue;
            }
            arr[0] += s[i];
            if (nums.includes(arr[0])) {
                result.push(nums.indexOf(arr[0]))
                arr.pop();
            };
        }
        if(Number(s[i])) {
            result.push(Number(s[i]))
        }
    }
    return Number(result.join(''))
}