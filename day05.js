function reverseAString(str) {
    //  write code here.
    //     const splitted = str.split("");
    //     const reversed = splitted.reverse();
    //     const reversedString = reversed.join("");
    //     console.log(reversedString);

    const reversedString = str.split('').reverse().join('');
    return reversedString;
}

console.log(reverseAString("hello")); // olleh
console.log(reverseAString("Howdy")); // ydwoH
