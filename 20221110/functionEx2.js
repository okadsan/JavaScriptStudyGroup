function Sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function Ave(n) {
    return Sum(n) / n;
}


const N = 1000; 
console.log("合計: " + Sum(N));
console.log("平均値: " + Ave(N));

