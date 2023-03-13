// rule button
let rules = document.querySelector('.ruleButton');
let ruleBtn = document.querySelector('.foot button');
let crossBtn = document.querySelector('.rule2-img');

ruleBtn.addEventListener('click', rulesRemoval);
crossBtn.addEventListener('click', rulesRemoval);

function rulesRemoval() {
    console.log('hello');
    rules.classList.toggle('rules')
}

// MAIN 
let yourScore;
let pcScore;

if (localStorage.getItem('Your-Score' == 'undefined' && 'Computer-Score' == 'undefined')) {

    yourScore = 0;
    pcScore = 0;
}
if ('Your-Score' !== 'undefined' && 'Computer-Score' !== 'undefined') {

    yourScore = Number(localStorage.getItem('Your-Score'));
    document.querySelector('.score2').innerText = yourScore;

    pcScore = Number(localStorage.getItem('Computer-Score'));
    document.querySelector('.score1').innerText = pcScore

}
if ('Your-Score' !== 'undefined' && 'Computer-Score' == 'undefined') {

    yourScore = Number(localStorage.getItem('Your-Score'));
    document.querySelector('.score2').innerText = yourScore;
    pcScore = 0;

}
if ('Your-Score' == 'undefined' && 'Computer-Score' !== 'undefined') {

    yourScore = 0;
    pcScore = Number(localStorage.getItem('Computer-Score'));
    document.querySelector('.score1').innerText = pcScore

}


let rock = document.querySelector('.img1');
let paper = document.querySelector('.img2');
let scissors = document.querySelector('.img3');

rock.addEventListener('click', () => { mainfunction('rock') });
paper.addEventListener('click', () => { mainfunction('paper') });
scissors.addEventListener('click', () => { mainfunction('scissors') });

let handSelections = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png"
}

function mainfunction(userPick) {

    // pc pick
    let pcPick = pcSelection();

    // hide the middle
    let hideMiddle = document.querySelector('.middle');
    hideMiddle.style.display = 'none';

    // change the image
    document.querySelector('.you img').src = handSelections[userPick];

    // changeimage of pc
    document.querySelector('.pc img').src = handSelections[pcPick];

    console.log(userPick, pcPick)
    // winner selection
    winnerFunc(userPick, pcPick);
}

// check winner function

function winnerFunc(user, pc) {
    if (user === 'rock' && pc === 'scissors') win();
    if (user === 'rock' && pc === 'paper') lost();
    if (user === 'rock' && pc === 'rock') tie();

    if (user === 'paper' && pc === 'rock') win();
    if (user === 'paper' && pc === 'scissors') lost();
    if (user === 'paper' && pc === 'paper') tie();

    if (user === 'scissors' && pc === 'paper') win();
    if (user === 'scissors' && pc === 'rock') lost();
    if (user === 'scissors' && pc === 'scissors') tie();
}

function win() {

    winSound();

    document.querySelector('.common span').innerText = "YOU WIN";
    document.querySelector('.common h2').style.display = 'inline';
    document.querySelector('.common button').innerText = "PLAY AGAIN";

    let showSection = document.querySelector('.middle-hidden');
    showSection.style.display = 'flex';

    document.querySelector('.btn-hide').style.display = 'inline';

    setScoreYour(yourScore + 1);

    winAnimation();
}

function lost() {

    loseSound();

    document.querySelector('.common span').innerText = "YOU LOST";
    document.querySelector('.common h2').style.display = 'inline';
    document.querySelector('.common button').innerText = "PLAY AGAIN";


    let showSection = document.querySelector('.middle-hidden');
    showSection.style.display = 'flex';

    document.querySelector('.btn-hide').style.display = 'none';

    setScorePc(pcScore + 1);

    lostAnimation();
}

function tie() {

    tieSound();

    document.querySelector('.common span').innerText = "TIE UP";
    document.querySelector('.common h2').style.display = 'none';
    document.querySelector('.common button').innerText = "REPLAY";

    let showSection = document.querySelector('.middle-hidden');
    showSection.style.display = 'flex';

    document.querySelector('.btn-hide').style.display = 'none';

}

// set score functions
function setScoreYour(score) {
    yourScore = score;
    localStorage.setItem('Your-Score', yourScore);
    document.querySelector('.score2').innerText = score;
}
function setScorePc(score) {
    pcScore = score;
    localStorage.setItem('Computer-Score', pcScore);
    let value = localStorage.getItem(pcScore)
    document.querySelector('.score1').innerText = score;
}

// pc pick function
function pcSelection() {
    let ary = ['rock', 'paper', 'scissors'];
    return ary[Math.floor(Math.random() * 3)]
}

// sound functions
function winSound() {
    let win = new Audio("sounds/win.mp3");
    win.play();
}
function loseSound() {
    let lose = new Audio("sounds/lose.mp3");
    lose.play();
}
function tieSound() {
    let tie = new Audio("sounds/tie.wav");
    tie.play();
}

// playagain, replay buttons
document.querySelector('.common button').addEventListener('click', playbutton);

function playbutton() {

    document.querySelector('.middle-hidden').style.display = 'none';
    document.querySelector('.middle').style.display = 'flex';
    document.querySelector('.btn-hide').style.display = 'none';

    document.querySelector('.circle1').classList.remove('circle1-win');
    document.querySelector('.circle2').classList.remove('circle2-win');
    document.querySelector('.circle3').classList.remove('circle3-win');

    document.querySelector('.circle1').classList.remove('circle1-lost');
    document.querySelector('.circle2').classList.remove('circle2-lost');
    document.querySelector('.circle3').classList.remove('circle3-lost');

    document.querySelector('.circle1').style.display = 'none';
    document.querySelector('.circle2').style.display = 'none';
    document.querySelector('.circle3').style.display = 'none';
}

// next button, clear local storage
document.querySelector('.next').addEventListener('click', () => {
    localStorage.clear();
})

// animation functions
function winAnimation() {

    document.querySelector('.circle1').classList.add('circle1-win');
    document.querySelector('.circle2').classList.add('circle2-win');
    document.querySelector('.circle3').classList.add('circle3-win');

    setTimeout(() => {
        document.querySelector('.circle1').style.display = 'inline';
    }, 150);
    setTimeout(() => {
        document.querySelector('.circle2').style.display = 'inline';
    }, 200);
    setTimeout(() => {
        document.querySelector('.circle3').style.display = 'inline';
    }, 250);
}

function lostAnimation() {

    document.querySelector('.circle1').classList.add('circle1-lost');
    document.querySelector('.circle2').classList.add('circle2-lost');
    document.querySelector('.circle3').classList.add('circle3-lost');

    setTimeout(() => {
        document.querySelector('.circle1').style.display = 'inline';
    }, 150);
    setTimeout(() => {
        document.querySelector('.circle2').style.display = 'inline';
    }, 200);
    setTimeout(() => {
        document.querySelector('.circle3').style.display = 'inline';
    }, 250);
}