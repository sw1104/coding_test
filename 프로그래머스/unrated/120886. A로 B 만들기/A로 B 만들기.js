function solution(before, after) {
    let a = before.split('').sort();
    let b = after.split('').sort();
    console.log(a)
    console.log(b)
    let count = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i]){
            count += 1
        }
    } if(count === a.length){
        return 1
    } else {
        return 0
    }
}
