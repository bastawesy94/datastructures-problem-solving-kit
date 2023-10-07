class Stacks {
    constructor(totalLength) {
        this.items = new Array(totalLength);
        this.numberOfStacks = 3;
        this.stackSize = this.items.length / this.numberOfStacks;
        this.capacities = {
            0: 0,
            1: 0,
            2: 0
        }
        this.s1Capacity = 0;
        this.s2Capacity = 0;
        this.s3Capacity = 0;
    }

    push(item, stackNumber) { //stackNumber (0,1,2)
        if (this.capacities[stackNumber] < this.stackSize) {
            console.log("target index ==>", (stackNumber * this.stackSize) + this.capacities[stackNumber]);
            this.items[(stackNumber * this.stackSize) + this.capacities[stackNumber]] = item;
            this.capacities[stackNumber]++;
            console.log("final satck =>", this.items);
            return item;
        }
        throw new Error("Stack over flow!");
    }
    pop(stackNumber){
        this.items[(stackNumber * this.stackSize) + this.capacities[stackNumber] - 1] = undefined;
        this.capacities[stackNumber]--;
        console.log("final satck =>", this.items);
    }
}

try {
    const s = new Stacks(30);
    s.push(10, 0);
    s.push(20, 0);
    s.pop(0)
    s.pop(0)
} catch (err) {
    console.log(err);
}