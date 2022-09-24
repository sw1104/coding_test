function solution(a, b) {
  let arr = [];
  let count = 0
	for (let i = 0; i < a.length; i++) {
      arr.push(a[i] * b[i])
    count += arr[i]
    }
  return count
}