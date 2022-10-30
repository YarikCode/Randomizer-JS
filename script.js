let addButton = document.querySelector('.add_btn');
let varContainer = document.querySelector('.variant_container');
let choseBtn = document.querySelector('.chose_btn');
let addForm = document.querySelector('.add_form');

addButton.addEventListener('click', () => {
    let newVar = document.createElement('div');
    let text = document.createElement('p');
    let removeBtn = document.createElement('button');

    text.innerText = document.querySelector('.add_input').value;
    removeBtn.innerText = "x";

    newVar.className = "varian_div";
    text.className = "variant_title";
    removeBtn.className = "variant_remove";
    newVar.appendChild(text);
    newVar.appendChild(removeBtn);
    varContainer.appendChild(newVar);

    addForm.reset();
});

choseBtn.addEventListener('click', () => {
    let variants = document.querySelectorAll('.varian_div');
    for(let i = 0; i < variants.length; i++){
        variants[i].style.backgroundColor = "rgb(105, 183, 203)";
    }
    variants[getRandomIntInclusive(0, variants.length - 1)].style.backgroundColor = "rgb(25, 192, 117)";
});

document.addEventListener('click', (event) => {
    if(event.target.classList.contains("variant_remove")){
        event.target.parentElement.remove();
    }
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}