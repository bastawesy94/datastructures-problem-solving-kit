class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.back = 0;
    }
    enqueue(item) {
        this.items.push(item);
        this.back++;
        return item;
    }
    dequeue() {
        delete this.items[this.front];
        this.front++;
        return item;
    }
    peek() {
        return this.items[this.front];
    }
    isEmpty() {
        return this.items.length == 0;
    }
}