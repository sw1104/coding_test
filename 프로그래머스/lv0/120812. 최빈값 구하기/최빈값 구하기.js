function solution(array) {
    const obj = array.reduce((key, val) => {
        key.hasOwnProperty(val) ? (key[val] += 1): (key[val] = 1);
        return key
    }, {})
    const max = Math.max(...Object.values(obj))
    const key = Object.keys(obj)
    const arr = []
    for(let i = 0; i < key.length; i++){
        if(parseInt(obj[key[i]]) === max) {
           arr.push(Number(key[i]))
        }
    } 
    if(arr.length > 1) {
        return -1
    }
    return arr[0]
}

