function solution(numbers) {
    let count = 0
    for( let i = 0; i < numbers.length; i++ ){
       count += numbers[i]
    }
    return count/numbers.length
}