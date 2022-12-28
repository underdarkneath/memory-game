document.addEventListener('DOMContentLoaded', function() {

//card options
const cardArray = [
{
    name: 'omanyte',
    img: 'images/omanyte.png'
},
{
    name: 'omanyte',
    img: 'images/omanyte.png'
},
{
    name: 'bulbasaur',
    img: 'images/bulbasaur.png'
},
{
    name: 'bulbasaur',
    img: 'images/bulbasaur.png'
},
{
    name: 'abra',
    img: 'images/abra.png'
},
{
    name: 'abra',
    img: 'images/abra.png'
},
{
    name: 'chansey',
    img: 'images/chansey.png'
},
{
    name: 'chansey',
    img: 'images/chansey.png'
},
{
    name: 'porygon',
    img: 'images/porygon.png'
},
{
    name: 'porygon',
    img: 'images/porygon.png'
}
];

//randomize
cardArray.sort(()=>0.5 - Math.random())

let grid = document.querySelector('.grid');
let result = document.querySelector('.result');
let cardsChosen = [];
let cardsChosenIndex = [];
let cardsWon = [];

//create board
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        let card = document.createElement('img');
       card.setAttribute('src', 'images/back.png');
       card.setAttribute('id', i);
       card.addEventListener('click', flipCard);
       grid.appendChild(card);
    }
}
createBoard();

//check for match
function checkForMatch(){
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIndex[0];
    const optionTwoId = cardsChosenIndex[1];
    if (cardsChosen[0]===cardsChosen[1]){
        alert(`You found a match!`);
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        cardsWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src', 'images/back.png');
        cards[optionTwoId].setAttribute('src', 'images/back.png');
        alert(`Sorry, try again.`)
    }
    cardsChosen = [];
    cardsChosenIndex = [];
    result.innerText = cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        result.innerText = 'Congratulations! You found them all!'
    }
}

//flip your card
function flipCard(e){
    let cardId = e.target.getAttribute('id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIndex.push(cardId)
    console.log(cardsChosen, 'cardsChosen');
    console.log(cardsChosenIndex, 'cardsChosenId');
    e.target.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
})