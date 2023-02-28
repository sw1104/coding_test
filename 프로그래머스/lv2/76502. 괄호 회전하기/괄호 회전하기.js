function solution(s) {
    const stack = [];
    let result = 0;
    let right = true;
    if (s.length % 2 === 1) return 0;

    for (let i = 0; i < s.length; i++){
        let ss = s.slice(i) + s.slice(0, i);
        right = true;
        for (let word of ss) {
            if (word === "(" || word === "{" || word === "[") stack.push(word);
            else {
                let leftWord = stack.pop();
                if (word === ")" && leftWord === "(") continue;
                if (word === "}" && leftWord === "{") continue;
                if (word === "]" && leftWord === "[") continue;
                right = false;
                break;
            }
        }
        if (right) result++;
    }
    return result;
}
