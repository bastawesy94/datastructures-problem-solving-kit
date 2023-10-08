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
class Stacks {
    stacksNumber = 0;
    stackCapacity = 3;
    stackesNames = {};
    constructor() {
        this.stackesNames[this.stacksNumber] = new Stack();
    }
    push(item) {
        if (this.stackesNames[this.stacksNumber].items.length >= this.stackCapacity) {
            this.stacksNumber++;
            this.stackesNames[this.stacksNumber] = new Stack();
        }
        this.stackesNames[this.stacksNumber].push(item);
        console.log("this.stackesNames==>", this.stackesNames);
    }
    pop() {
        this.stackesNames[this.stacksNumber].pop();
        console.log("this.stackesNames==>", this.stackesNames);
    }
    popAt(stackeNumber) {
        this.stackesNames[stackeNumber].pop();
        console.log("this.stackesNames==>", this.stackesNames);
    }
}
const stacks = new Stacks();
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.push(5);
stacks.pop(5);
stacks.popAt(1)

