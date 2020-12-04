function centuryFromYear(year) {
    //  write code here.
    // const century = Math.floor(year/100);
    if (((year % 1000) % 100) === 0) {
        console.log(Math.floor(year / 100));
    } else {
        console.log(Math.floor(year / 100) + 1);
    }

}

centuryFromYear(1905);
centuryFromYear(1700);