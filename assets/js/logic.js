let startScreen = document.querySelector("#start-screen");
let questionEl = document.querySelector("#questions");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector ("#time");
let timeCount = 60;
let timer 

function quizStart() {
   startScreen.setAttribute ("class", "hide");
    questionEl.removeAttribute("class");
    timer = setInterval(() => {
      timeEl.textContent = timeCount;
      timeCount--;

    }, 1000); 
    retrieveQuestion()
}
startBtn.addEventListener("click", quizStart);

function retrieveQuestion(){
     let questionTitle = document.querySelector("#question-title");
     questionTitle.textContent = question.title[i];

}