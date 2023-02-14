function solution(people, limit) {
    people = people.sort((a, b) => a - b);
    let cnt = 0;
    let front = 0;
    let back = people.length - 1;
    
    while (front <= back) {
        if(people[front] + people[back] <= limit) {
            front++;
        }
        cnt++;
        back--;
    }
    return cnt;
}