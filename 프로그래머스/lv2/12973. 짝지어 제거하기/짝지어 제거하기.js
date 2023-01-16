function solution(s) {
    s = s.split('')
    let arr = []
    for(let i = 0; i < s.length; i++) {
        if(arr[arr.length-1] === s[i]) {
            arr.pop()
            continue
        }
        
        arr.push(s[i])
    }
    return arr.length === 0 ? 1 : 0
}