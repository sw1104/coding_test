function solution(progresses, speeds) {
    const result = [1];
    let cnt = 0;
    let firstWorkEndDays = Math.ceil((100 - progresses[0]) / speeds[0]);
    
    for (let i = 1; i < progresses.length; i++) {
        if (firstWorkEndDays < Math.ceil((100 - progresses[i]) / speeds[i])) {
            cnt++;
            firstWorkEndDays =  Math.ceil((100 - progresses[i]) / speeds[i])
            result.push(1);
            continue;
        }
        result[cnt]++;
    }
    return result;
}