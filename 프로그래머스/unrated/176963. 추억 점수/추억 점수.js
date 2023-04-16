function solution(name, yearning, photo) {
    const obj = name.reduce((acc, curr, idx) => {
        acc[curr] = yearning[idx];
        return acc;
    }, new Object);
    
    let result = [];
    let count = 0;
    for(let i = 0; i < photo.length; i++) {
        count = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(obj.hasOwnProperty(photo[i][j])) {
                count += obj[photo[i][j]];
            } else {
                count += 0;
            }
        }
        result.push(count);
    }
    return result;
}