function urlify(text) {
    const words = text.split(" ");
    let sentence = words[0];
    for (let i = 1; i < words.length; i++) {
        sentence += "%20";
        sentence += words[i];
    }
    return sentence;
}
console.log(urlify("hello mohameed welcomeee"))