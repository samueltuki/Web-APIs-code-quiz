let clearBtn = document.querySelector ("#clear")

function printScores(){
    let scores = JSON.parse(localStorage.getItem("highScores")) || [];

    scores.sort(function(a, b){
        return b.score - a.score
    })

    scores.forEach(function(newScore) {
        let liEl = document.createElement ("li")
        liEl.textContent = newScore.inT + "--" + newScore.score

        let olEl = document.querySelector("#highscores");
        olEl.appendChild(liEl);
    });

}


function clearScores(){
    window.localStorage.removeItem("highScores");
    window.location.reload()
}
clearBtn.addEventListener("click", clearScores);
printScores();vjvyy 
