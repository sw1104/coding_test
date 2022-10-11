function solution(s) {
    let ss = s.split(' ').sort((a, b) => a - b);
    const result = [ss[0], ss[ss.length-1]].join(' ');
    return result;
}