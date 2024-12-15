const btn = document.querySelector('.button');
const card = document.querySelector('.card');
let buttonState = false;

btn.addEventListener('click',()=>{
    // if(btn.value == 'Reset'){
    //     window.location.reload();
    // }else{
    card.classList.toggle('card-rotate');
    var sound = new Audio("sounds/rotaion.mp3");
    sound.play();
    // buttonState = !buttonState;
    // btn.value = buttonState ? 'Reset' : 'Generate';
    });