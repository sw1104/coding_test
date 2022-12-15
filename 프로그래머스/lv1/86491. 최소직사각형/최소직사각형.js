function solution(sizes) {
    let w = []
    let h = []
    for (let i = 0; i < sizes.length; i++){
        let resize = sizes[i].sort((a, b) => b - a);
        w.push(resize[0]);
        h.push(resize[1]);
    }
    let wmax = Math.max(...w);
    let hmax = Math.max(...h);
    
    return wmax * hmax
}