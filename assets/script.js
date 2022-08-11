/**
 * Tools you'll use
 * LocalStorage Web API
 * setInterval, clearInterval
 * Document and Element Web APIs (querySelector, addEventListener, textContent, createElement, setAttribute, etc)
 */


var questionEl = document.querySelector("#questions");
var startButton = document.querySelector('#start-button');
var timerCountdown = document.querySelector("#countdown");
var scoreContainer = document.querySelector("#high-score");
var headingOne = document.querySelector("#page-content");
var questionIndex = 0;
var counter = 100;
var highScore= 0;


var questions = [
    {
        question: 'What is an apple?',
        options: ['1. A fruit', '2. An animal'],
        answer: 'A fruit'
    },
    {
        question: 'What is an apple?',
        options: ['A fruit', 'An animal'],
        answer: 'A fruit'
    },
    {
        question: 'What is an apple?',
        options: ['A fruit', 'An animal'],
        answer: 'A fruit'
    },
];
startButton.addEventListener("click",startQuiz);

function startQuiz(){
    startButton.setAttribute("class", "hidden");
    setTime();
    firstQuestion();
}

function setTime() {
timerCountdown.textContent = counter
let timer = setInterval(() => {
    timerCountdown.textContent = '';
    counter--;
    timer.textContent = counter;
    if(counter === 0 || questionIndex === questions.length){
        clearInterval(timer);
        endGame();
    }
        // console.log('game over')
        // game over function
    
}, 1000);
}

function firstQuestion(){
    headingOne.setAttribute("class", "hidden");
    var makeDiv = document.createElement("div");
    
    


}
    



