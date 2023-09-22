function oneWayEdit(text1, text2) {
    const table = new Map();
    for (let i = 0; i < text1.length; i++)
        table.set(text1[i], true)
    let counter = 0;
    for (let x = 0; x < text2.length; x++) {
        if (table.get(text2[x]))
            counter++;
    }
    if (text1.length-1 === counter)
        return true
    return false
}

console.log(oneWayEdit("pale", "ple"))
console.log(oneWayEdit("pales", "pale"))
console.log(oneWayEdit("pale", "bale"))
console.log(oneWayEdit("pale", "bake"))