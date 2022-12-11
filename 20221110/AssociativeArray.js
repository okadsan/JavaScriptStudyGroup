const userDataList = [
    { number: 17, name: '大谷', position: 1 },
    { number: 51, name: '鈴木', position: 9 },
    { number: 55, name: '松井', position: 7 }
];

FindNumber(userDataList, 17);
FindNumber(userDataList, 51);
FindNumber(userDataList, 55);
FindNumber(userDataList, 1);

function FindNumber(List, number){
    let result = false;
    for (let i = 0; i < List.length; i++) {
        if (number == List[i].number) {
            result = true;
            console.log(List[i].name + "選手 ポジション" + List[i].position);
        }
    }
    
    if (result == false) {
        console.log("該当者なし");
    }
}

