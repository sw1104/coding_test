function solution(food) {
    for(let i = 1; i < food.length; i++) {
        if(food[i] % 2 !== 0) {
           food[i] = food[i] - 1;
        }
    }
    
    let arr = [];
    
    for(let i = 1; i < food.length; i++) {
        arr.push((i+'').repeat((food[i] / 2)));
        
    }
    
    return arr.join('') + '0' + arr.reverse().join('');
}