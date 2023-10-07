class Stack {
    constructor() {
        this.items = [];
        this.minVaue;
        this.minIndex = [];
    }
    push(item) {
        if (this.items.length == 0) {
            this.minVaue = item;
            this.minIndex.push(0);
            this.items.push(item);
            console.log("MIN VALUE ===> ", this.minVaue);
            return item;
        } else if (item < this.minVaue) {
            this.minVaue = item
            this.items.push(item);
            this.minIndex.push(this.items.indexOf(item))
            console.log("MIN VALUE ===> ", this.minVaue);
            return item;
        }
        this.items.push(item);
        console.log("MIN VALUE ===> ", this.minVaue);
        return item;
    }

    pop() {
        if (this.items.length == 0) return "Under Flow";// in case empty list 
        else if (this.items[this.items.length - 1] == this.minVaue) { //in case pop the min val
            this.minIndex.pop();
            this.minVaue = this.items[this.minIndex[this.minIndex.length-1]];
            this.items.pop()
        } else {
            this.items.pop()
        }
        console.log("MIN VALUE ===> ", this.minVaue);
    }
}
const s = new Stack();

console.log(s.push(50))
console.log(s.push(0))
console.log(s.push(-20))
console.log(s.push(30))
console.log("#######################")
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())


