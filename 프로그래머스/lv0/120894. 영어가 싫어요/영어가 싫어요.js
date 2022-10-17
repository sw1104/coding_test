function solution(n) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i = 0; i < nums.length; i++){
       n = n.split(nums[i]).join(i)
    }
    return +n
}