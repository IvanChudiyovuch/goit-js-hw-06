function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  body: document.querySelector('body'),
  buttonChangeColor: document.querySelector('.change-color'),
  spanValueColor: document.querySelector('.color'),
};

ref.buttonChangeColor.addEventListener('click', onButtonTargetClick);

function onButtonTargetClick(event) {
  const hexColor = getRandomHexColor();

  ref.body.style.backgroundColor = hexColor;
  ref.spanValueColor.textContent = hexColor;
}
