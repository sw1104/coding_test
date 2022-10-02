function solution(rsp) {
    let arr = []
    let rs = rsp.split('')
    for( let i = 0; i < rs.length; i++ ){
        if(rs[i] === '2'){
            arr.push(0)
        } else if(rs[i] === '0'){
            arr.push(5)
        } else if(rs[i] === '5'){
            arr.push(2)
        }
    } return arr.join('')
}