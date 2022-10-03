function solution(ms, n) {
    let arr = [];
    let pms = ms.length/n
	for (let i = 0; i < pms; i++){
		arr.push(ms.slice(i * n, i * n + n))
	}
	return arr;
}