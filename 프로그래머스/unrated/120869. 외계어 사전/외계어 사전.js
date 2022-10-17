function solution(spell, dic) {
    let ss = spell.sort().join('')
    let arr = []
    for(i = 0; i < dic.length; i++){
       arr.push(dic[i].split('').sort().join(''))
    }
    return arr.indexOf(ss) >= 0 ? 1 : 2
}