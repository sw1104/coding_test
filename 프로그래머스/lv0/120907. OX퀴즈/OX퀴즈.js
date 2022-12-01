function solution(q) {
    let arr = []
    for (let i = 0; i < q.length; i++){
        const qs = q[i].split('=')
        const qsZero = qs[0].split(' ')
        if(qsZero[1] === '-'){
            if(Number(qsZero[0])-Number(qsZero[2]) === Number(qs[1])){
                arr.push('O')
            } else {
                arr.push('X')
            }
        }
        else if(qsZero[1] === '+'){
            if(Number(qsZero[0])+Number(qsZero[2]) === Number(qs[1])){
                arr.push('O')
            } else{ 
                arr.push('X')
            }
        }
    } return arr
}