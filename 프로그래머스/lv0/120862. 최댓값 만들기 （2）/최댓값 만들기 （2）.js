function solution(numbers) {
	let ns = numbers.sort((x, y) => x - y)
    let neg = ns[0] * ns[1]
    let pos = ns[ns.length-1] * ns[ns.length-2]
    return neg > pos ? neg : pos;
}