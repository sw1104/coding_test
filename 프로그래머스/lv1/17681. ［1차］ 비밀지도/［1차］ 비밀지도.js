function solution(n, arr1, arr2) {
  const binary = x => {
    let arr = []
    for (let i = 0; i < n; i++){
      arr.push(x[i].toString(2))
    }
    return arr
  }
  
  const b1 = binary(arr1)
  const b2 = binary(arr2)
  console.log(b1)
  console.log(b2)
  let arr = []
  for(let i = 0; i < n; i++){
    let num = Number(b1[i]) + Number(b2[i])
    let nums = String(num).split('')
    while (nums.length < n) {
      nums.unshift('0')
    }
    arr.push(nums.map(a => a === '0' ? ' ': '#').join(''))
  }
  return arr
}
