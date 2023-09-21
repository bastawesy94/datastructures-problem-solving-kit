class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        if (!this.head) {
            const node = new Node(value);
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;       
        }
        this.length++;
        return this;
    }
}

const l = new LinkedList();
const n = new Node("HI")
l.push(n);
console.log(l)
