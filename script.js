'use strict';

//////////////////////////////////////////////////////
//  Uhádni číslo od 1 do 20

//počiatočné hodnoty
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

//funkcie(refactoring)
const changeBodyBackgroundColor = function (bgcolor) {
  document.querySelector('body').style.backgroundColor = bgcolor;
};
const changeNumberWidth = function (numberWidth) {
  document.querySelector('.number').style.width = numberWidth;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//event pre tlačidlo na skontrolovanie čísla
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  const guessNum = Number(guess);
  //žiadne číslo

  if (!guess) {
    displayMessage('🤐 Žiadne číslo na porovnanie!');

    //hráč uhádol správne číslo
  } else if (guessNum === secretNumber) {
    displayMessage('🎉 Správne číslo, super!');
    displayNumber(secretNumber);
    changeBodyBackgroundColor('#60b347');
    changeNumberWidth('30rem');
    //nové najvyššie skóre
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //hráč neuhádol správne číslo
  } else if (guessNum !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? '👆🏻 Vysoko...' : '👇🏻 Nízko...');
      score--;
      displayScore(score);
      //podmienky mimo
      if (guessNum > 20 || guessNum < 1 || guessNum === 0)
        displayMessage('😵 Si úplne mimo... Od 1 do 20!');
    } else {
      displayMessage('🤪💩 Koniec hry, skús ešte raz!');
      displayScore(0);
      changeBodyBackgroundColor('#B03B3B');
    }
  }
});

//event pre tlačidlo pre novú hru, najvyššie skóre ostáva
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Môžeš začať...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  changeBodyBackgroundColor('#222');
  changeNumberWidth('15rem');
});
