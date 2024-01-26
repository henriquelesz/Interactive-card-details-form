// Segunda tentativa

  // Atualizar Nome no Card

const cardNameInput = document.querySelector("#cardNameInput");

cardNameInput.addEventListener("input", updateCardName);

function updateCardName() {
  const cardNameInputValue = document.querySelector("#cardNameInput").value;

  document.querySelector("#cardName").innerHTML = cardNameInputValue.toUpperCase();
}

  // Atualizar Número no Card

const cardNumberInput = document.querySelector("#cardNumberInput");

cardNumberInput.addEventListener("input", updateCardNumber);

function updateCardNumber() {
  const cardNumberInputValue = document.querySelector('#cardNumberInput').value.padEnd(16, '0');

  document.querySelector('#cardNumber').innerHTML =
  `${cardNumberInputValue.slice(0, 4).padEnd(4, '0')} ${cardNumberInputValue.slice(4, 8).padEnd(4, '0')} ${cardNumberInputValue.slice(8, 12).padEnd(4, '0')} ${cardNumberInputValue.slice(12, 16).padEnd(4, '0')}`
}

  // Atualizar CVC no Card

const cvcNumberInput = document.querySelector('#cvcNumberInput');

cvcNumberInput.addEventListener('input', updateCardCVC);

function updateCardCVC() {
  const cvcNumberInputValue = document.querySelector('#cvcNumberInput').value;

  document.querySelector('#cardCVC').innerHTML = cvcNumberInputValue;
}

  

  // Atualizar EXP no Card

const expMonthInput = document.querySelector('#expMonthInput');
const expYeahInput = document.querySelector('#expYearInput');

expMonthInput.addEventListener('input', updateCardExp);
expYearInput.addEventListener('input', updateCardExp);


function updateCardExp() {
  let expMonthInputValue = document.querySelector('#expMonthInput').value.padStart(2, 0);
  let expYearInputValue = document.querySelector('#expYearInput').value.padStart(2, 0);

  document.querySelector('#cardExp').innerHTML = `${expMonthInputValue}/${expYearInputValue}`;
}