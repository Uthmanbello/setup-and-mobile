const formEntries = JSON.parse(localStorage.getItem('contactForm')) || {
    name: '',
    email: '',
    message: '',
  };
  
  const saveInputValues = () => {
    name.value = formEntries.name;
    email.value = formEntries.email;
    message.value = formEntries.message;
  };
  
  saveInputValues();
  
  const LocalStorage = () => {
    localStorage.setItem('contactForm', JSON.stringify(formEntries));
  };
  
  name.addEventListener('input', () => {
    formEntries.name = name.value;
    LocalStorage();
  });
  emailid.addEventListener('input', () => {
    formEntries.email = email.value;
    LocalStorage();
  });
  message.addEventListener('input', () => {
    formEntries.message = message.value;
    LocalStorage();
  });