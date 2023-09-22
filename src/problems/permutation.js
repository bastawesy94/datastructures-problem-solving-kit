function isPermutation(text1, text2) {
    const table = new Map();
    for (let i = 0; i < text1.length; i++) {
        table.set(text1[i],true);//fill hashtable with chars
    }
    console.log("after text 1 ==>", table)
    let counter = 0;
    for (let i = 0; i < text2.length; i++) {
        if (table.get(text2[i]))
            counter++;
    }
    if (counter == text1.length && text1.length === text2.length)
        return true;
    return false;
}
console.log(isPermutation("race", "care"));