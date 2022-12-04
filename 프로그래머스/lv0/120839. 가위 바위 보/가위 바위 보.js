const solution = rsp => {
  const result = {
    2:0,
    0:5,
    5:2
  }
  return rsp.split('').map(i => result[i]).join('')
}