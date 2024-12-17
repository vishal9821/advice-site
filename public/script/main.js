const btn = document.querySelector('.button');
const card = document.querySelector('.card');
const data = document.querySelector('.card p');
let buttonState = false;

btn.addEventListener('click',()=>{
    // if(btn.value == 'Reset'){
    //     window.location.reload();
    // }else{
    card.classList.toggle('card-rotate');
    var sound = new Audio("sounds/rotaion.mp3");
    sound.play();
    setTimeout(()=>{
        data.style.opacity = 0;
        data.style.transition = "opacity 12s ease";
    },2000)
    // buttonState = !buttonState;
    // btn.value = buttonState ? 'Reset' : 'Generate';
    });