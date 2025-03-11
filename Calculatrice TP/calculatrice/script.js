let currentNumber = '';
let calculation = '';

var titreElement = document.getElementById("titre");
var chaineRecuperee = titreElement.innerText;
var autreVariable = prompt("Introduit ton nom.");

var fusion = "Bonjour, " + autreVariable + ".";
checkName(autreVariable);

function checkName(nom) {
    nom = autreVariable
    if (nom === "Lana") {
        fusion = "Vous nous avez manquer, Lana."
        titreElement.innerHTML = fusion;
    }
    else if (nom === "Lina") {
        alert("Vous n'êtes pas la bienvenue!")
        window.close()
    }
    else {
        titreElement.innerHTML = fusion;
    }
}

function appendNumber(number) {
    currentNumber += number;
    calculation += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    currentNumber = '';
    calculation += ' ' + op + ' ';
    updateDisplay();
}

function calculate() {
    try {
        const result = math.evaluate(calculation);
        currentNumber = result.toString();
        calculation = currentNumber;
        updateDisplay();
    } catch (error) {
        currentNumber = 'Erreur';
        calculation = '';
        updateDisplay();
    }
}

function calculatePercentage() {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    calculation = currentNumber;
    updateDisplay();
}

function invertSign() {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    calculation = currentNumber;
    updateDisplay();
}

function calculateInverse() {
    currentNumber = (1 / parseFloat(currentNumber)).toString();
    calculation = currentNumber;
    updateDisplay();
}

function calculateSquare() {
    currentNumber = (parseFloat(currentNumber) ** 2).toString();
    calculation = currentNumber;
    updateDisplay();
}

function calculateSquareRoot() {
    currentNumber = (Math.sqrt(parseFloat(currentNumber))).toString();
    calculation = currentNumber;
    updateDisplay();
}

function clearEntry() {
    currentNumber = '';
    calculation = '';
    updateDisplay();
}

function clearAll() {
    currentNumber = '';
    calculation = '';
    updateDisplay();
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    calculation = calculation.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = calculation || '0';
}
