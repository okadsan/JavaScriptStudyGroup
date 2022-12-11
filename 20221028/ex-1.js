
// 練習1 学籍番号No が偶数ならば「Aクラス」、奇数ならば「Bクラス」と出力する

const No = 25;
if (No % 2 == 0) {
    console.log('A');
} else if (No % 2 == 1) {
    console.log('B');
}


//練習2 engとmathの合計scoreが140以上 もしくは scoreが120以上かつmathが80以上ならば「合格」、それ以外ならば「不合格」を出力
// ※ヒント：2重でif文を使う

const eng = 70;
const math = 70;
const score = eng + math;

if (score >= 140) {
    console.log('合格');
} else if (score >= 120 && math >= 80) {
    console.log('合格');
} else {
    console.log('不合格');
}
