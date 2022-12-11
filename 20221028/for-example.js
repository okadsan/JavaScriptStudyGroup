


// 問題 1から整数nまで足しあげた値sumを出力

/*
for(初期値;繰り返しの条件;繰り返しの変化)
{
      処理
}
*/

const n = 100;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum);