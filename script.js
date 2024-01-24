// Primeira tentativa

/* function updateCard() {
  const cardNameInput = document.querySelector('#cardNameInput').value;
  const cardNumberInput = document.querySelector('#cardNumberInput').value;
  const monthExpInput = document.querySelector('#expMonthInput').value;
  const yearExpInput = document.querySelector('#expYearInput').value;
  const cvcInput = document.querySelector('#cvcNumberInput').value;

  document.querySelector('#cardName').innerHTML = cardNameInput;
  document.querySelector('#cardNumber').innerHTML = cardNumberInput;
  document.querySelector('#cardExp').innerHTML = `${monthExpInput}/${yearExpInput}`;
  document.querySelector('#cardCVC').innerHTML = cvcInput;
}

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', updateCard)
}) */

// Segunda tentativa

  // Atualizar Nome no Card

const cardNameInput = document.querySelector("#cardNameInput");

cardNameInput.addEventListener("input", updateCardName);

function updateCardName() {
  const cardNameInputValue = document.querySelector("#cardNameInput").value;

  document.querySelector("#cardName").innerHTML = cardNameInputValue;
}

  // Atualizar Número no Card

const cardNumberInput = document.querySelector("#cardNumberInput");

cardNumberInput.addEventListener("input", updateCardNumber);

function updateCardNumber() {
  const cardNumberInputValue = document.querySelector('#cardNumberInput').value;

  document.querySelector('#cardNumber').innerHTML = cardNumberInputValue;
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
  let expMonthInputValue = document.querySelector('#expMonthInput').value;
  let expYearInputValue = document.querySelector('#expYearInput').value;

  document.querySelector('#cardExp').innerHTML = `${expMonthInputValue}/${expYearInputValue}`;
}