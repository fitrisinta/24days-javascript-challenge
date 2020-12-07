function countVowelConsonant(str) {
    // write code here
    const splittedStr = str.split("");
    const vowels = "aeiou";
    const reducer = (acc, val) => (vowels.includes(val)) ? acc + 1 : acc + 2;

    return splittedStr.reduce(reducer, 0);
}

console.log(countVowelConsonant("abcde")); // 8