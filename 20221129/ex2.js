const a = Math.floor(Math.random() * 10 + 1);
const b = a + Math.floor(Math.random() * 10 + 1);
const ans = product(a,b);

console.log(`aの値は: ${a}`);
console.log(`bの値は: ${b}`);
console.log(`aからbまでの自然数の積は: ${ans} です`);

function product(a, b) {
    let result = 1;
    for (let i = a; i <= b; i++) {
        result *= i;
    }
    return result;
}