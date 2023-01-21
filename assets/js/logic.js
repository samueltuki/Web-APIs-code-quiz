let currentQuestionIndex = 0;
let timeCount = 60;
let timer

// DOM elements variables
let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector ("#time");
let choiceEl = document.querySelector ("#choices");
 

function quizStart() {
    // hiding the start screen
   startScreen.setAttribute ("class", "hide");

    // unhide the question section
    questionEl.removeAttribute("class");

    // starting timer/setting interval
    timer = setInterval(() => {
      timeEl.textContent = timeCount;
      timeCount--;

    }, 1000); 
    retrieveQuestion()
}
startBtn.addEventListener("click", quizStart);


function retrieveQuestion(){
   
    let questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = (question[0].title);
    console.log(questionTitle);

    // choiceEl.innerHTML = "";

// for (let i = 0; i < currentQuestion.choices.length; i++) {
//     // creating choice button
//     let choice = currentQuestion.choices[i];
// let choiceBtn = document.createElement("button")
//     choiceBtn.setAttribute("class", "choice");
//     choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = question[0].choices[0];
//     choiceEl.appendChild(choiceBtn.textContent);
// }
}