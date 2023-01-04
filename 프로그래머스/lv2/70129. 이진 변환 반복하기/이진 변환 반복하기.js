function solution(s) {
    let num = 0
    let zero = 0
    while (s !== '1') {
        let sl = s.length;
        s = s.match(/1/g).length;
        zero += sl - s;
        num += 1;
        s = s.toString(2);
    }
    return [num, zero];
}