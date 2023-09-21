class Hashtable {
    table = new Array(127); //strict that we uese only 127 place
    size = 0;
    constructor() {

    }
    _hash(key) { //private method used here only
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i);
        }
        index = index % 127; //to set all items in range 127 place
        // console.log("Key of: ", key, "in: ", index)
        return index;
    }
    set(key, value) {
        const target = this._hash(key);
        if (this.table[target]) {
            for (let i = 0; i < this.table[target].length; i++) {
                if (this.table[target][i][0] === key) {
                    this.table[target][i][1] = value;//to reset at the same placce a new value
                    return;//to stop looping
                }
            }
            this.table[target].push([key, value]);
        } else {
            //this case means that key is not used and you can push your pair
            this.table[target] = [];
            this.table[target].push([key, value]);
        }
        this.size++;
    }
    get(key) {
        const target = this._hash(key);
        if (this.table[target]) {
            for (let i = 0; i < this.table[target].length; i++) {
                if (this.table[target][i][0] === key)
                    return this.table[target][i][1];
            }
        }
        return undefined;
    }
    remove(key) {
        const target = this._hash(key);
        for (let i = 0; i < this.table[target].length; i++) {
            if (this.table[target][i][0] === key) {
                this.table[target].splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }
    display() {
        if (this.table) {
            for (let i = 0; i < this.table.length; i++) {
                if(this.table[i]){
                    for (let x = 0; x < this.table[i].length; x++) {
                        console.log(this.table[i][x]);
                    }
                }
            }
        }
    }
}
const table = new Hashtable()

table.set("Spain", 110);
table.set("ǻ", 192);
table.remove("Spain");

// console.log(table.get("ǻ")); // [ 'ǻ', 192 ]
// console.log(table.get("Spain")); // [ 'ǻ', 192 ]
table.display();
