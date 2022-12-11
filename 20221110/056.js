const userDataList = [
    { number: 17, name: '大谷', position: 1 },
    { number: 51, name: '鈴木', position: 9 },
    { number: 55, name: '松井', position: 7 }
];

const searchIDInput = document.querySelector('#search-number-input');
const searchResult = document.querySelector('#search-result');

searchIDInput.addEventListener('keyup', () => {
    const searchId = Number(event.target.value);
    findUser(searchId);
});

function findUser(searchId) {
    const targetData = userDataList.find((data) =>
        data.number === searchId);

    if (targetData == null) {
        searchResult.textContent = '該当者なし';
        return;
    }

    searchResult.textContent = targetData.name;
}