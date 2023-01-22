let currentQuestionIndex = 0;
let timeCount = 60;
let timer;

// DOM elements variables
let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let choiceEl = document.querySelector("#choices");
let feedBackEl = document.querySelector("#feedback");
let endScreenE1 = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let initialsEl = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");

function quizStart() {
  // hiding the start screen
  startScreen.classList.add("hide");
  //    startScreen.setAttribute("class", "hide");

  // unhide the question section
  questionEl.classList.remove("hide");

  startTime();
}
startBtn.addEventListener("click", quizStart);

function startTime() {
  timer = setInterval(() => {
    timeEl.textContent = timeCount;
    timeCount--;
    if (timeCount <= 0) {
      endQuiz();
    }
  }, 1000);
  retrieveQuestion();
}

function retrieveQuestion() {
  //   presents the first question
  questionTitle.textContent = question[currentQuestionIndex].title;

  //  clears out old question and presents new question
  choiceEl.innerHTML = "";

  // creating button and inserting choices option to the button
  for (let i = 0; i < question[currentQuestionIndex].choices.length; i++) {
    let choice = question[currentQuestionIndex].choices[i];
    let choiceBtn = document.createElement("button");
    choiceBtn.classList.add("js-choice");
    choiceBtn.textContent = choice;

    choiceBtn.addEventListener("click", function (e) {
      let clickedBtnChoice = e.target.textContent;
      //   console.log(clickedBtnChoice);
      let relatedQuestionAnswer = question[currentQuestionIndex].answer;
      // console.log(relatedQuestionAnswer);

      // user penalty
      if (clickedBtnChoice !== relatedQuestionAnswer) {
        timeCount -= 10;
        if (timeCount < 0) {
          timeCount = 0;
        }
        timeEl.textContent = timeCount;
        feedBackEl.textContent = "incorrect";
      } else {
        feedBackEl.textContent = "correct";
      }

      feedBackEl.classList.remove("hide");

      setTimeout(() => {
        feedBackEl.classList.add("hide");
      }, 1000);

      currentQuestionIndex++;
      if (currentQuestionIndex === question.length) {
        endQuiz();
      } else {
        retrieveQuestion();
      }
    });

    //  shows choices on the page
    choiceEl.appendChild(choiceBtn);
  }
}

function endQuiz() {
  clearInterval(timer);
  endScreenE1.classList.remove("hide");
  finalScore.textContent = timeCount;
  questionEl.classList.add("hide");
}

function saveScore() {
  let userInitials = initialsEl.value.trim();
  if (userInitials) {
    let highScore = JSON.parse(localStorage.getItem("highScores")) || [];

    let newScore = {
      score: timeCount,
      inT: userInitials,
    };

    highScore.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScore));

    window.location.href = "/highscores.html";
  } else {
    alert("please put initials");
  }
}

submitBtn.addEventListener("click", saveScore);
