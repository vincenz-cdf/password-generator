const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengtEl = document.getElementById("lengt");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()_+=";

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbersList[Math.floor(Math.random() * numbersList.length)];
}

function getSymbol() {
    return symbolsList[Math.floor(Math.random() * symbolsList.length)];
}

function generateX() {
    const xs = [];

    if (upperEl.checked) {
        xs.push(getUpperCase());
    }

    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

function generatePassword() {

    const longueur = lengtEl.value;
    let password = "";

    if (upperEl.checked) {
        password += getUpperCase();
    }

    if (lowerEl.checked) {
        password += getLowerCase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for(let i=password.length; i<longueur ; i++) {
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if(!password) return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
})