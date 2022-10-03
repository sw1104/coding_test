function solution(hp) {
  const g = parseInt(hp / 5);
  const s = parseInt((hp - g * 5) / 3);
  const e = hp - g * 5 - s * 3;
  return g + s + e;
}