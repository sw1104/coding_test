function solution(order) {
    let arr = []
    let os = (order+'').split('')
    for(let i = 0; i < os.length; i++){
        if(os[i] == 3 || os[i] == 6 || os[i] == 9){
            arr.push(os[i])
        }
    } 
    return arr.length
}