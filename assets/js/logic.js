// add variables
/*var timerEl = document.getElementById("timer")
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
    clearInterval(timeInterval);
    listEl.setAttribute('style', 'visibility: hidden;')
    question.textContent = 'All Done'
    endText.textContent = 'Your final score is ' + timeLeft
}




// add a timer
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
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

    if (index === questions.length) {
        endGame()
    }
    
}

function checkQuestion(event){
    var currentQuestion = questions[currentQuestionIndex];
if (event.target.textContent !== questions[currentQuestionIndex].answers) {
    timeLeft -= 15
    correct.textContent = 'Wrong!'
    switchQuestion()
} else {
    correct.textContent = 'Correct!'
    switchQuestion()
}
}



li3.addEventListener('click', function(event){
    checkQuestion(event)
});
*/


// Quiz questions and answers
  
  const startButton = document.getElementById('start-button');
  const questionContainer = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');
  const timerElement = document.getElementById('timer');
  const initialsInput = document.getElementById('initials-input');
  const saveButton = document.getElementById('save-button');
  
  let currentQuestionIndex = 0;
  let timeLeft = 60; // Initial time in seconds
  
  startButton.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
    startTimer();
  }
  
  function startTimer() {
    const timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `Time: ${timeLeft}`;
  
      if (timeLeft <= 0 || currentQuestionIndex >= quizData.length) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(quizData[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('btn');
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.innerText === quizData[currentQuestionIndex].correctAnswer;
  
    if (correct) {
      // Do something when the answer is correct
    } else {
      timeLeft -= 10; // Subtract 10 seconds for incorrect answer
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      setNextQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    // Show the input for initials and save button
    initialsInput.classList.remove('hide');
    saveButton.classList.remove('hide');
  }
  
  saveButton.addEventListener('click', saveScore);
  
  function saveScore() {
    const initials = initialsInput.value.trim();
    // Save initials and score
    initialsInput.textContent = initials + ' - ' + timeLeft;
    saveScore.classList.remove('hide');
  }