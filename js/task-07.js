const ref = {
  inputRange: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

ref.inputRange.addEventListener('input', onChangeSizeInput);

function onChangeSizeInput(event) {
  ref.textEl.style.fontSize = event.currentTarget.value + 'px';
}
