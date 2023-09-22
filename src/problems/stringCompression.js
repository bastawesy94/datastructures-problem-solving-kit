function stringCompression(text) {
    let current = text[0];
    let counter = 0;
    let sumCounter = 0;
    let compressed = "";
    let i = 0;
    while (sumCounter < text.length) {
        if (current == text[i])
            counter++;
        else {
            compressed += `${current}${counter}`;
            current = text[i];
            sumCounter += counter;
            counter = 0;
            i = i - 1
        }
        i++;
    }
    return compressed;
}
console.log(stringCompression("aabcccccaaa"))