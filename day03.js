function chunkyMonkey(values, size) {
    //  write code here.
    newValues = [];
    newValues[0] = values.slice(0, (size));
    newValues[1] = values.slice(size);
    return newValues;
}


console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
