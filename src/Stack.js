class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        return item;
    }
    pop() {
        this.items.length == 0 ? "Under Flow" : this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    display() {
        let stackElements = "";
        for (let i = 0; i < this.items.length; i++) {
            stackElements += this.items[i] + " ";
        }
        return stackElements;
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
const s = new Stack();

console.log(s.push(1))
console.log(s)
console.log(s.pop())
console.log(s.push(2))
console.log(s.push(3))
console.log(s.peek())
console.log(s.push(1))
console.log(s.display())