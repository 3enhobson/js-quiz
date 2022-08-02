var question = document.getElementById("question")
var choices = Array.from(document.getElementsByClassName("choice-answer"))

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];


var questions = [
    {
        question: "Javascript is a/an _______ language.",
        choice1: "Object-Oriented",
        choice2: "Hypertext Markup",
        choice3: "Foreign",
        choice4: "Computer",
        answer: 1
    },
    {
        question: "How do we write a comment in Javascript?",
        choice1: "//",
        choice2: "<!--  -->",
        choice3: "/* */",
        choice4: "A & C",
        answer: 4
    },
    {
        question: "How do we declare a variable in Javascript?",
        choice1: "const",
        choice2: "var",
        choice3: "let",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "Inside which HTML element do we link the JavaScript file?",
        choice1: "<js>",
        choice2: "<script>",
        choice3: "<javascript>",
        choice4: "Any of the above",
        answer: 2
    }
];

var timerEl = document.querySelector('#seconds');
var timer = 60; 
 
window.onload = () => {
   var timerInterval = setInterval(function() {
        timerEl.textContent = timer;
        timer--;
   }, 1000) 
};





var correctBonus = 10;
var maxQuestions = 4;

startGame = () => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0){
        return window.location.assign("/end.html"); 
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuestions.splice(questionIndex,1)

    acceptingAnswers = true;
};
 
choices.forEach(choice => {
    choice.addEventListener("click", e => {
         
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
       
          

       
        console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
    });
}); 

startGame();