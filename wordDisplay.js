const button = document.querySelector('.btn');
const text = document.querySelector('.hide-text');
const div = document.querySelector('.container');
const para = document.querySelector('.text');


function showText() {
    if (text.classList.contains('btn')) {
        text.classList.remove('btn');
    }
    else {
        text.classList.add('btn');
    }
}

function hoverEffect() {
    div.style.backgroundColor = 'black';
    div.style.color = 'white';
    para.style.color = 'white';
    button.style.color = 'white';
    button.style.border = 'white, solid 2px';
}

button.addEventListener('click', showText)
div.addEventListener('mousemove', hoverEffect)
