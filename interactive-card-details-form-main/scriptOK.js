function updateCard() {
  const cardNameInput = document.querySelector('#cardNameInput').value;
  const cardNumberInput = document.querySelector('#cardNumberInput').value.padEnd(16, '0').slice(0, 4);
  const monthExpInput = document.querySelector('#expMonthInput').value.padEnd(2, '0');
  const yearExpInput = document.querySelector('#expYearInput').value.padEnd(2, '0');
  const cvcInput = document.querySelector('#cvcNumberInput').value.padEnd(3, '0');

  document.querySelector('#cardName').innerHTML = cardNameInput;
  document.querySelector('#cardNumber').innerHTML = cardNumberInput;
  document.querySelector('#cardExp').innerHTML = `${monthExpInput}/${yearExpInput}`;
  document.querySelector('#cardCVC').innerHTML = cvcInput;
}

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', updateCard)
})