const solution = s => {
    const smap = s.map(i => (i[0] + i[1]) / 2)
    const smsort = smap.slice().sort((a, b) => b - a)
    const smmap = smap.map(j => smsort.indexOf(j) + 1)
    return smmap
}