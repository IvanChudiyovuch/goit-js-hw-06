const ref = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onInputTarget);



function onInputTarget (event) {
    console.log(event.currentTarget.value);
    ref.nameOutput.textContent = event.currentTarget.value;
};