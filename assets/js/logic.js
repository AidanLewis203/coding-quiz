// add variables
var timerEl = document.getElementById("timer")
var quizStart = document.getElementById('quizStart')
var start = document.getElementById('start')
var listEl = document.getElementById('list')
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var titleEl = document.getElementById('opening')
var endText = document.getElementById('endText')
var index = 0
var currentQuestionIndex = 0
var timeLeft = 0
var correct = document.getElementById('correct')
var buttonEl = document.getElementsByClassName('button')
var article = document.article;
var question = document.querySelector(".question");

function endGame(){
    clearInterval
}




// add a timer
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
    if (timeLeft <= 0) {
        timerEl.textContent = timeLeft
        timeLeft--;
    } else {
        clearInterval(timeInterval);
        listEl.setAttribute('style', 'visibility: hidden;')
        question.textContent = 'All Done'
        endText.textContent = 'Your final score is ' + timeLeft
    }
    }, 1000);
    
}
// add a start prompt for the quiz
quizStart.addEventListener('click', function (){
    start.setAttribute('style', 'visibility: hidden;')
    listEl.setAttribute('style', 'visibility: visible;')
    titleEl.setAttribute('style', 'visibility: hidden;')
    countdown()
    switchQuestion()
    
});

function switchQuestion() {
    question.textContent = questions[index].title
    li1.textContent = questions[index].options[0]
    li2.textContent = questions[index].options[1]
    li3.textContent = questions[index].options[2]
    li4.textContent = questions[index].options[3]
    index++

}

function checkQuestion(event){
    var currentQuestion = questions[currentQuestionIndex];
if (event.target.textContent !== questions[currentQuestionIndex].answers) {
    timeLeft -= 15
    correct.textContent = 'Wrong!'
} else {
    correct.textContent = 'Correct!'
}
}



li3.addEventListener('click', function(event){
    checkQuestion(event)
    switchQuestion()
});

// if answered wrong minus time from timer

// set up a catch so that if all of the questions are answered it stops the timer and goes to the end page