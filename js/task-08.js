const ref = {
  submitForm: document.querySelector('.login-form'),
};

// let user = {
//   email: '',
//   password: '',
// };

// ref.submitForm.addEventListener('submit', event => {
//   event.preventDefault();

//   if (event.emailField || event.passwordField === '') {
//     alert('Всі поля форми не заповнені');
//   } else {
//     user.email = event.emailField;
//     user.password = event.passwordField;
//   }

//   return console.log(user);
// });

ref.submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('Всі поля форми не заповнені!');
  } else {
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
      email,
      password,
    };

    console.log(formData);

    event.reset();
  }
}
