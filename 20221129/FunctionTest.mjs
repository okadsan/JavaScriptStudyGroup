
    // 3つを比較して最小の値を返す関数
    export function compare3(a, b, c) {
        let min = a;
        if(min > b){
            min = b;
        }
        if(min > c){
            min = c;
        }
        return min;
    }

