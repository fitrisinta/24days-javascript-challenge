// javascript
function depositProfit(deposit, rate, threshold) {
    console.log()
    for (year = 0; deposit < threshold; year++) {
        const sum = deposit += deposit * rate / 100;
        console.log(`Your balance on year ${year + 1} will be $${sum}.`);
    }

    return `It will take ${year} years for your balance to pass the threshold.`
};

console.log(depositProfit(100, 20, 170));
