// Function to update the card information
function updateCardInfo() {
  const cardNumber = document.querySelector('#cardNumberForm').value;
  const cardName = document.querySelector('#cardNameForm').value;
  const cardExpMonth = document.querySelector('#expMonthForm').value.padStart(2, '0');
  const cardExpYear = document.querySelector('#expYearForm').value.padStart(2, '0');
  const cardCVC = document.querySelector('#cvcNumberForm').value;

  // Update card elements
  document.querySelector('#cardNumber').textContent = formatCardNumber(cardNumber);
  document.querySelector('#cardName').textContent = cardName;
  document.querySelector('#cardExp').textContent = `${cardExpMonth}/${cardExpYear}`;
  document.querySelector('#cardCVC').textContent = cardCVC;
}

// Format card number with spaces
function formatCardNumber(cardNumber) {
  return cardNumber.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
}

// Add event listeners to form inputs
const formInputs = document.querySelectorAll('form input');
formInputs.forEach(input => {
  input.addEventListener('input', updateCardInfo);
});

// Initial update when the page loads
updateCardInfo();
