ไดรฟ์ของฉัน
let userScore = 0;
let compScore = 0;

const USERSCORE = document.querySelector('#user-score');
const COMPSCORE = document.querySelector('#comp-score');
const RESULT = document.querySelector('#result');
const USERCHOICE = document.querySelector('#user-choice');
const COMPCHOICE = document.querySelector('#comp-choice');
const CHOICES = document.querySelectorAll('.choice');
const MESSAGE = document.querySelector('#message');

function ready()
{
    USERCHOICE.setAttribute('src', `images/${userChoice}.png`);
    COMPCHOICE.setAttribute('src', `images/${compChoice}.png`);
    
    USERCHOICE.classList.add('ready');
    COMPCHOICE.classList.add('ready');
}

for(let choice of CHOICES)
{
    choice.addEventListener('click', function(){
        play(this.id);
    });
}
ready();

function computerSelect(){
    const choices = ['rock','paper','scissors'];
    let selectIndex = Math.floor(Math.random()*3);
    return choices[selectIndex];
}
function play(userChoice){
    USERCHOICE.classList.remove('ready');
    COMPCHOICE.classList.remove('ready');

    let compChoice = computerSelect();
    USERCHOICE.setAttribute('src', `images/${userChoice}.png`);
    COMPCHOICE.setAttribute('src', `images/${compChoice}.png`);
    ///console.log('User: '+userChoice);
    ///console.log('Comp: '+compChoice);
    // if((userChoice == 'rock' && compChoice == 'scissors') || 
    //    (userChoice == 'paper' && compChoice == 'rock') || 
    //    (userChoice == 'scissors' && compChoice == 'paper')){
    //     win(userChoice, compChoice);
    // }
    // else if((userChoice == 'rock' && compChoice == 'paper') || 
    //         (userChoice == 'scissors' && compChoice == 'rock') || 
    //         (userChoice == 'paper' && compChoice == 'rock')){
    //     lose(userChoice, compChoice);
    // }
    // else{
    //     draw(userChoice);
    // }
    let battle = userChoice+compChoice;
    if(
        (battle == 'rockscissors') || 
        (battle == 'paperrock') || 
        (battle == 'scissorspaper')
    ){
        win(userChoice, compChoice);
    }
    else if(
        (battle == 'rockpaper') || 
        (battle == 'paperscissors') || 
        (battle == 'scissorsrock')
    ){
         lose(userChoice, compChoice);
    }
    else{
        draw(userChoice);
    }
    setTimeout(() => {
        ready();
    }, 1000);
}

function win(user, comp){
    USERSCORE.innerHTML = ++userScore;
    RESULT.innerHTML = `${user.toUpperCase()} beats `;
    RESULT.innerHTML += `${comp.toUpperCase()}. `;
    RESULT.innerHTML += `You <i>win</i>`;

}
function lose(user, comp){
    COMPSCORE.innerHTML = ++compScore;
    RESULT.innerHTML = `${comp.toUpperCase()} beats `;
    RESULT.innerHTML += `${user.toUpperCase()}. `;
    RESULT.innerHTML += `You <i>lose</i>`;

}
function draw(user){
    RESULT.innerHTML = `It was draw! you both choice`;
    RESULT.innerHTML += `${user.toUpperCase()}. `;
}