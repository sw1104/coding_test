function solution(numbers) {
    numbers = numbers.sort((a, b) => {
        return (b+'' + a+'') - (a+'' + b+'')
    })
    
    let result = numbers.join('') === '0'.repeat(numbers.length) ? '0' : numbers.join('')
    return result
}