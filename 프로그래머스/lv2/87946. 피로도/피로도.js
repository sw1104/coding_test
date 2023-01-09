function solution(k, dg) {
    let arr = [];
    let clear = Array(dg.length).fill(0);
    dfs(0, k);
    function dfs(count, k) {
        arr.push(count);
        for(let i = 0; i < dg.length; i++) {
            if(k >= dg[i][0] && clear[i] === 0) {
                clear[i] = 1;
                dfs(count + 1, k - dg[i][1]);
                clear[i] = 0;
            }
        }
    }
    
    return Math.max(...arr)
}