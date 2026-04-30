const button = document.querySelector('.btn');
const text = document.querySelector('.hide-text');
const div = document.querySelector('.container');


function showText() {
    if (text.classList.contains('btn')) {
        text.classList.remove('btn');
    }
    else {
        text.classList.add('btn');
    }
}

function hoverEffect() {
    div.style.backgroundColor = 'red';
}

button.addEventListener('click', showText)
div.addEventListener('mousemove', hoverEffect)
