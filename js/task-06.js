const inputRef = document.querySelector('#validation-input');
const dataRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('input', onInputTarget);
inputRef.addEventListener('blur', onBlurInputValid);

function onInputTarget(event) {
  console.log(event.currentTarget.value.length);
}

function onBlurInputValid(event) {
  if (
    event.currentTarget.value.length < dataRef.dataset.length ||
    event.currentTarget.value.length > dataRef.dataset.length
  ) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
}
