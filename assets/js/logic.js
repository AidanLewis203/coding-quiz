// Set up variables
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
  
  // Function to start the quiz
  function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
    startTimer();
  }
  
  // Function to start the timer
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
  
  // Function to set the next question
  function setNextQuestion() {
    resetState();
    showQuestion(quizData[currentQuestionIndex]);
  }
  
  // Function to show the question
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
  
  // Function for when the user selects an answer
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