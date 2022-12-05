function solution(num, total) {
    let arr = []
    if(num % 2 === 1){
        for(let i = Math.floor(total/num - num/2) + 1; i<= Math.floor(total/num + num/2); i++){
            arr.push(i)
        }
    } 
    if(num % 2 === 0){
        for(let i = Math.floor(total/num - (total%num -1)); i<= Math.floor(total/num + total%num); i++){
            arr.push(i)
        }
    }
    return arr
}


