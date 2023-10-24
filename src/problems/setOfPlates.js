class Stack {
    constructor() {
        this.size = 0;
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        this.size++;
        return item;
    }
    pop() {
        if (this.items.length == 0) {
            return "Under Flow"
        } else {
            this.size--;
            this.items.pop()
        };
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

class Plates {
    stacks = [];
    threshold = 3;

    push(element) {
        //stacks is empty
        if (this.stacks.length == 0 || this.stacks[this.stacks.length - 1].stack.size > this.threshold) {//empty stacks
            this.stacks.push({
                stack: new Stack(),
                number: this.stacks.length + 1
            })
            console.log("NEW stack created")
        } else if (this.stacks.length > 0 && this.stacks[this.stacks.length - 1].stack.size < this.threshold) {
            this.stacks[this.stacks.length - 1].stack.push(element);
        }
        this.stacks[this.stacks.length - 1].stack.push(element)
    }
    pop() {
        this.stacks[this.stacks.length - 1].stack.pop();
        console.log("size ==> ",this.stacks[this.stacks.length - 1].stack.size)
        if (this.stacks[this.stacks.length - 1].stack.size == 0) {
            delete this.stacks[this.stacks.length - 1];
            console.log("STACK DELETED")
        }
    }
}

const plates = new Plates();
plates.push(10);
console.log(plates);
plates.push(20);
console.log(plates);
plates.push(30);
console.log(plates);

plates.push(40);
console.log(plates);
plates.push(50);
console.log(plates);

plates.pop();
console.log(plates);
plates.pop();
console.log(plates);
plates.pop();
console.log("after pop -->", plates);