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
let feedBackEl = document.querySelector ("#feedback")


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

      if (clickedBtnChoice !== relatedQuestionAnswer) {
        timeCount -= 10;
        if (timeCount < 0 ){
            timeCount = 0
        }
        timeEl.textContent = timeCount;
        feedBackEl.textContent = "incorrect"

      }
      else { 
        feedBackEl.textContent = "correct"
      };

      feedBackEl.classList.remove("hide");

     setTimeout(() => {
        feedBackEl.classList.add("hide");
        
     }, 1000); 
    
      currentQuestionIndex++;
      retrieveQuestion();
    });

    //  shows choices on the page
    choiceEl.appendChild(choiceBtn);
  }
};




