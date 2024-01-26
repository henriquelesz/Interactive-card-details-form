// Terceira tentativa

  // Selecionar todos os valores dos inputs e atualizar no cartão

  function updateCard() {
    const cardNameInputValue = document.querySelector("#cardNameInput").value;
    const cardNumberInputValue = document.querySelector('#cardNumberInput').value.padEnd(16, '0');
    const cvcNumberInputValue = document.querySelector('#cvcNumberInput').value;
    let expMonthInputValue = document.querySelector('#expMonthInput').value.padStart(2, 0);
    let expYearInputValue = document.querySelector('#expYearInput').value.padStart(2, 0);
  
    document.querySelector("#cardName").innerHTML = cardNameInputValue.toUpperCase();
    document.querySelector('#cardNumber').innerHTML = `${cardNumberInputValue.slice(0, 4).padEnd(4, '0')} ${cardNumberInputValue.slice(4, 8).padEnd(4, '0')} ${cardNumberInputValue.slice(8, 12).padEnd(4, '0')} ${cardNumberInputValue.slice(12, 16).padEnd(4, '0')}`;
    document.querySelector('#cardCVC').innerHTML = cvcNumberInputValue;
    document.querySelector('#cardExp').innerHTML = `${expMonthInputValue}/${expYearInputValue}`;
  }

  // Selecionar todos os inputs

  const cardInputs = document.querySelectorAll('input');

   cardInputs.forEach((input) => {
    input.addEventListener('input', updateCard)
  });