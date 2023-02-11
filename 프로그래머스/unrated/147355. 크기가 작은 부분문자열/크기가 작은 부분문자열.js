function solution(t, p) {
    t = t.split('');
    let pLen = p.length;
    let cnt = 0;
    for (let i = 0; i < t.length; i++) {
        if (t.slice(i, pLen + i).join('').length === pLen && t.slice(i, pLen + i).join('') <= p) {
            cnt++;
        } 
    }
    return cnt;
}