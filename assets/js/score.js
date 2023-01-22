function printScores(){
    let scores = JSON.parse(localStorage.getItem("highScores")) || [];

    scores.forEach(function (newScore) {
        let liEl = document.createElement ("li")
        liEl.textContent = newScore.inT + "--" + newScore.score

        let olEl = document.querySelector("#highscores");
        olEl.appendChild(liEl);
    });

}

printScores();