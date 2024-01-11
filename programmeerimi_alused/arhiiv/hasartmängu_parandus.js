let result = {
    label: "Hetkel võidetud",
    winnings: 0
};

let allDices = [];
let sum = 0;
let wonJackPot = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let diceEl = document.getElementById("dice-el");
let resultEL = document.getElementById("result-el");

resultEL.textContent = result.label + ": " + result.winnings + " €";

function getRandomDice() {
    return Math.floor( Math.random()*6 ) + 1;
}

function startGame() {
    isAlive = true;
    wonJackPot= false;
    let firstDice = getRandomDice();
    let secondDice = getRandomDice();
    allDices = [firstDice, secondDice];
    sum = firstDice + secondDice;
    result.winnings = sum * 10;
    result.label = "Hetkel võidetud";
    renderGame();
}

function renderGame() {
    diceEl.textContent = "Visked: ";

    for (let i = 0; i < allDices.length; i++) {
        diceEl.textContent += allDices[i] + " ";
    }

    sumEl.textContent = "Silmade arv kokku: " + sum;

    if (sum <= 14) {
        message = "Kas riskid lisatäringu visata?";
    } else if (sum === 15) {
        message = "Võitsid 3000 eurot!";
        result.winnings = 3000;
        result.label = "Kokku võitsid";
        wonJackPot = true;
    } else {
        message = "Kaotasid kõik!";
        result.winnings = 0;
        result.label = "Lõppseis";
        isAlive = false;
    }
    messageEl.textContent = message;
    resultEL.textContent = result.label + ": " + result.winnings + " €";
}

function newDice() {
    if (isAlive === true && wonJackPot === false) {
        let dice = getRandomDice();
        sum += dice;
        result.winnings = sum * 10;
        allDices.push(dice);
        renderGame();
    }
}