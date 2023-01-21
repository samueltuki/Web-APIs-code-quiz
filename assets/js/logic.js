let currentQuestionIndex = 0;
let timeCount = 60;
let timer


// DOM elements variables
let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector ("#time");
let choiceEl = document.querySelector ("#choices");



let questionTitle = document.querySelector("#question-title");

 

function quizStart() {
    // hiding the start screen
   startScreen.classList.add("hide");

    // unhide the question section
    questionEl.classList.remove("hide");

    // starting timer/setting interval
    timer = setInterval(() => {
      timeEl.textContent = timeCount;
      timeCount--;

    }, 1000); 
    retrieveQuestion()
};
startBtn.addEventListener("click", quizStart);


function retrieveQuestion(){

    //   presents the first question
    questionTitle.textContent = question[currentQuestionIndex].title;

    //  presents the choices to first question
    
  
    choiceEl.innerHTML = "";

    for (let i = 0; i < question[currentQuestionIndex].choices.length; i++) {
    let choice = question[currentQuestionIndex].choices[i];

    let choiceBtn = document.createElement("button")
   
    choiceBtn.classList.add("js-choice")
    choiceBtn.textContent = choice;

    choiceBtn.addEventListener("click", function(e){
        
        let clickedBtnChoice = e.target.textContent
        // console.log(clickedBtnChoice);
        let relatedQuestionAnswer = question[currentQuestionIndex].answer;
        // console.log(relatedQuestionAnswer);

        if (clickedBtnChoice === relatedQuestionAnswer) {
            console.log("correct");
        }

        // currentQuestionIndex++;
        // retrieveQuestion();
    
    })

    choiceEl.appendChild(choiceBtn)
     
   }

 
}

