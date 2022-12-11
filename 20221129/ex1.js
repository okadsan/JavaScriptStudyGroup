/*
JavaScriptでは他ファイルの関数の利用は推奨されていない模様
使用する場合は利用元の関数をexport functionで作り、利用ファイルでimportする
またどちらのファイルの拡張子も.mjsとする（モジュールであることを明示）
*/
//import {test1}  from "./FunctionTest.mjs";

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const c = Math.floor(Math.random() * 100);
const result = compare(a,b,c);

console.log(`aの値は: ${a}`);
console.log(`bの値は: ${b}`);
console.log(`cの値は:  ${c}`);
console.log(`最小の値は  ${result} です`);

function compare(a, b, c) {
    let min = a;
    if(min > b){
        min = b;
    }
    if(min > c){
        min = c;
    }
    return min;
}