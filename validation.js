const form = document.getElementById('form');
const validationMessage = document.querySelector('.validation-message');
const { name, email, description } = form.elements;
const err = {
  EMAIL_LOWERCASE: 'Please, kindly use lowercase letters for the email address',
};

const showMessage = (isError, message) => {
  validationMessage.classList.remove('d-none');
  validationMessage.textContent = message;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    showMessage(false, 'Complete!');
    form.submit();
    return;
  }

  showMessage(true, err.EMAIL_LOWERCASE);
});