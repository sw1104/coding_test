function solution(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
        let arr =[];
        for(let j = 0; j < arr2[0].length; j++) {
            let cnt = 0;
            for(let k = 0; k < arr1[0].length; k++) {
                cnt += arr1[i][k] * arr2[k][j];
            }
            arr.push(cnt)    
        }
        result.push(arr)
    }
    return result;
}