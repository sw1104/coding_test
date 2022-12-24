const solution = lines => {
    lines = lines.reduce((a, [x, y]) => {
        for (let i = x+1; i <= y; i++){
            a[i] = a[i] ? a[i]+1: 1;
        }
        return a;
    }, {})
    let line = Object.values(lines)
    return line.filter(i => i > 1).length
    
}