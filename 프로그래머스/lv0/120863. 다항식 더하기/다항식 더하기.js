function solution(polynomial) {
    let [x, n] = polynomial.split('+').reduce(([a,b], c) => {
        if(c.includes('x')) {
            return [a + Number(c.trim().replace('x', '') || 1), b];
        }
        return [a, b + Number(c)];
    }, [0, 0]);
    
    if(!x && !n) return '0';
    if(!x) return n.toString();
    
    x = `${x === 1 ? '': x}x`;
    
    if(!n) return x;
    
    return `${x} + ${n}`;
}