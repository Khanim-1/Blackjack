
let cards = [ ]
let sum =0 
let BlackJack = false
let isAlive = false
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL= document.getElementById("cards-el") 
let player = {
    name: "user",
    chips: 145
}
let playerEl=document.getElementById('player-el')
playerEl.textContent= player.name + ": $" + player.chips
function getRandomcard(){

    let randomNumber= Math.floor( Math.random()*13)+1 
    if(randomNumber===11 ){
         return 11
    }else if(randomNumber===11 || randomNumber===12 || randomNumber==13){
        return 10
    }else{
        return randomNumber 
    }

}

function startGame() {

let firstCard =getRandomcard()
let secondCard = getRandomcard()
 cards=[firstCard,secondCard]
 sum=firstCard+secondCard
 renderGame()
}

function renderGame(){
cardsEL.textContent= "Cards:"
    for( let i=0 ; i<cards.length ; i++){
        cardsEL.textContent += cards[i] + " " 

    }
sumEl.textContent = "Sum:"  +sum
if (sum <=20) {
    message="Do you want to draw a new card? "
}else if( sum === 21){
message= "Wohooo! You've got Blackjack!"
BlackJack=true
}else  {
    message="You're out of the game!"
    isAlive=false
}   
messageEl.textContent= message
} 
function newCard(){
    if(isAlive=true && BlackJack===false){
    console.log("Drawing a new card from the deck! ")
    let card = getRandomcard()
    sum+= card
    cards.push(card)
    console.log(cards)
    renderGame()}
}