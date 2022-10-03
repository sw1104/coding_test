function solution(n, d) {
    if(d === 'right'){
        n.unshift(n.pop())
    } else if( d === 'left'){
        n.push(n.shift())
    }
    return n
}