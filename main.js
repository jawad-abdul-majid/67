let secretNumber = ""
let guessNumber = ""
let chances = 5

let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo");
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo")
let result = document.getElementById("result");

function playerOneNumber() {
    secretNumber = inputOne.value
    playerOne.style.display = "none";
    playerTwo.style.display = "block";
}

function playerTwoNumber(){
    guessNumber = inputTwo.value

    if(secretNumber == guessNumber){
        result.innerHTML = "🎉 Congratulations! Player Two Won! 🎉"
    }
    else {
        chances--
        if(chances > 0){
            result.innerHTML = `❌ Wrong Guess! ${chances} chances left. ❌`
        }else {
            result.innerHTML = '✨ Player One Wins! ✨'
        }
    }
}

// let AyaazfavFruit = "strawberry"
// let AnkushfavFruit = "Mango"
// let AdifavFruit = "Banana"
// let EnanfavFruit = "Guava"

// console.log("Apple is a fruit")
// console.log(`${AyaazfavFruit} is a fruit`);
// console.log(`${AnkushfavFruit} is a fruit`);
// console.log(`${AdifavFruit} is a fruit`);
// console.log(`${EnanfavFruit} is a fruit`);