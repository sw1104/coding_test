class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    peek() {
        return this._arr[0];
    }
}

const solution = (p, l) => {
    const queue = new Queue()

    p.map((x, i) => queue.enqueue([x, i]))

    let ps = p.sort((a, b) => b - a)
    let cnt = 0;
    
    while(true) {
        let qp = queue.peek();
        if(qp[0] < p[cnt]) {
            queue.enqueue(queue.dequeue())
        } else {
            const qd = queue.dequeue();
            cnt++
            if(l === qd[1]) {
                return cnt
            }
        }
    }
    return cnt
}