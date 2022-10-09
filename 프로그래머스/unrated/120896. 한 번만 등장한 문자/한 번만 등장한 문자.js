function solution(s) {
    const ss = s.split('').sort().reduce((acc, i) => (acc[i] ? { ...acc, [i]: acc[i] + 1 } : { ...acc, [i]: 1 }), {});
    return Object.keys(ss).filter(item => ss[item] === 1).join('');
}