function solution(X, Y) {
    const num = Array.from(Array(10).fill(0));
    const arr = [];

    for (let i = 0; i < X.length; i++) {
        num[X[i]] += 1;
    }

    for (let i = 0; i < Y.length; i++) {
        if(num[Y[i]] > 0) {
            arr.push(Y[i])
            num[Y[i]] -= 1;
        }
    }
    
    if (arr.length === 0) {
        return '-1';
    }
    let result = arr.sort((a, b) => b - a).join('');
    if (result[0] === '0') {
        return '0';
    }
    return result;
}