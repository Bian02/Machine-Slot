let allPot = [
    ["🍋"],
    ["🍈"],
    ["🍉"],
    ["🍎"],
    ["🍇"],
    ["7️⃣"],
];

let value = 10000000;

let money = document.querySelector("#money");
let moneyText = money.textContent = value;
let firstPot = document.querySelector("#first-square");
let secondPot = document.querySelector("#second-square");
let thirdPot = document.querySelector("#third-square");

let firstCombination = [0, 0, 0];
let secondCombination = [1, 1, 1];
let thirdCombination = [2, 2, 2];
let fourthCombination = [3, 3, 3];
let fifthCombination = [4, 4, 4];
let sixthCombination = [5, 5, 5];

function spin() {
    let one = Math.floor(Math.random() * 6);
    let two = Math.floor(Math.random() * 6);
    let three = Math.floor(Math.random() * 6);

    firstPot.textContent = allPot[one];
    secondPot.textContent = allPot[two];
    thirdPot.textContent = allPot[three];

    let numberCombination = [one, two, three];

    if (moneyText >= 100000) {
        if (JSON.stringify(numberCombination) === JSON.stringify(firstCombination)) {
            moneyText = money.textContent = moneyText + 1000000;
            console.log(one, two, three);
            console.log(moneyText);
        }else if (JSON.stringify(numberCombination) === JSON.stringify(secondCombination)) {
            moneyText = money.textContent = moneyText + 2000000;
            console.log(one, two, three);
            console.log(moneyText);
        }else if (JSON.stringify(numberCombination) === JSON.stringify(thirdCombination)) {
            moneyText = money.textContent = moneyText + 4000000;
            console.log(one, two, three);
            console.log(moneyText);
        }else if (JSON.stringify(numberCombination) === JSON.stringify(fourthCombination)) {
            moneyText = money.textContent = moneyText + 6000000;
            console.log(one, two, three);
            console.log(moneyText);
        }else if (JSON.stringify(numberCombination) === JSON.stringify(fifthCombination)) {
            moneyText = money.textContent = moneyText + 8000000;
            console.log(one, two, three);
            console.log(moneyText);
        }else if (JSON.stringify(numberCombination) === JSON.stringify(sixthCombination)) {
            moneyText = money.textContent = moneyText + 10000000;
            console.log(one, two, three);
            console.log(moneyText);
        }else {
            moneyText = money.textContent = moneyText - 100000;
            console.log(one, two, three);
            console.log(moneyText);
        };
    }else {
        let noMoney = `<p id="zeroMoney">Waduh, uangmu gak cukup 😔</p>`;
        document.querySelector("body").innerHTML = noMoney;
    }
};