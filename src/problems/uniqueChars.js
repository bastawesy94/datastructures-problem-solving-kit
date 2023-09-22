function hasUnique(text) {
    const table = new Map();
    for (let i = 0; i < text.length; i++) {
        if (table.get(text[i]))
            return false; // not unique
        else
            table.set(text[i], true);
    }
    return true;// contains unique chars
}

console.log(hasUnique("Spain"))