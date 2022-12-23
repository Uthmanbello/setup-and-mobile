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

  