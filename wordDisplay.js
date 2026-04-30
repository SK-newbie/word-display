const button = document.querySelector('.btn');
const text = document.querySelector('.hide-text');
const heading = document.querySelector('.main-heading');

function showText(){
    if (text.classList.contains('btn')){
        text.classList.remove('btn');
    }
    else {
        text.classList.add('btn');
    }
}

button.addEventListener('click', showText)

