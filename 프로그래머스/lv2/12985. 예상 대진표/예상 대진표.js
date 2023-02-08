function solution(n, a, b) {
    while (true) {
        let midNum = n / 2;
        if((a <= midNum && b > midNum) || (a > midNum && b <= midNum)) {
            return n.toString(2).length - 1;
        }
        if(a > midNum && b > midNum) {
            a -= midNum;
            b -= midNum;
        }
        n = midNum;
    }
}