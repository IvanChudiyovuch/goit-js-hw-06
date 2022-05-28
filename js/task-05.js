const ref = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onInputTarget);

function onInputTarget(event) {
  if (event.currentTarget.value === '') {
    ref.nameOutput.textContent = 'Anonymous!';
  } else {
    ref.nameOutput.textContent = event.currentTarget.value;
  }
}
