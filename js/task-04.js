// const ref = {
//   decrement: document.querySelector('button[data-action="decrement"]'),
//   increment: document.querySelector('button[data-action="increment"]'),
// };

// let counterValue = 0;

// ref.decrement.addEventListener('click', onTargetButtonDecrementlick);
// ref.increment.addEventListener('click', onTargetButtonIncrementlick);

// function onTargetButtonDecrementlick(event) {
//   console.log('click -');
// }
// function onTargetButtonIncrementlick(event) {
//   console.log('click +');
// }

const counterValue = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
};

counterValue.prototype._getRefs = function (rootSelector) {
  const refs = {};

  refs.container = document.querySelector(rootSelector);
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.value = refs.container.querySelector('#value');

  // console.log(refs.increment);

  return refs;
};

counterValue.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    // console.log(this);
    this.increment();
    this.updateValueUi();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    // console.log(this);
    this.decrement();
    this.updateValueUi();
  });
};

counterValue.prototype.updateValueUi = function () {
  this._refs.value.textContent = this._value;
};

counterValue.prototype.increment = function () {
  this._value += this._step;
};

counterValue.prototype.decrement = function () {
  this._value -= this._step;
};

const counter = new counterValue({ rootSelector: '#counter', step: 1 });

// console.log(counter);
