function solution(n) {
  return  parseInt((n+'').split('').sort((x, y) => y - x).join(''))
}