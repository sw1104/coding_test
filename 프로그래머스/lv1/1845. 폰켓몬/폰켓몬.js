function solution(nums) {
    let n = nums.length;
    let selectMonster = Math.floor(n / 2)
    
    let set = new Set(nums);
    let arr = Array.from(set);
    
    if(arr.length < selectMonster) {
        return arr.length;
    } else if(arr.length >= selectMonster) {
        return selectMonster;
    }
}