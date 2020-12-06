function sortByLength(strs) {
    //  write code here.
    const sortedString = strs.sort((a, b) => a.length - b.length);
    return sortedString;
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));
// Output: [ '', 'a', 'zz', 'abc', 'aaa' ]