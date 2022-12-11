let array = [];
let size = 5;
for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
}
const ans = compareArray(array);

console.log(`配列arrayは: ${array}`);
console.log(`最小の値は: ${ans}`)

function compareArray(ary){
    let min = ary[0];
    for(let i=1;i<ary.length;i++){
        if(min > ary[i]){
            min = ary[i];
        }
    }
    return min;
}
