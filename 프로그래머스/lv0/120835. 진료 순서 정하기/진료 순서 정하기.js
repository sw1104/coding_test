function solution(e) {
    const es = [...e].sort((a, b) => b - a);
    
    let result = e.map(item => es.findIndex(i => i === item) + 1);
    
    return result
}