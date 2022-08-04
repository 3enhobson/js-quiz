var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('save-score');
var finalScore = document.getElementById('final-score');
var mostRecentScore = localStorage.getItem('recentScore');
finalScore.innerText = mostRecentScore;
var hallOfFame = [];
var updatedScores = JSON.parse(localStorage.getItem("scoreCard"));



if (updatedScores !== null) { 
    hallOfFame = updatedScores
}

 username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
 });

 saveHighScore = e => { 
    //console.log("clicked the save button");
    e.preventDefault();

var leaderBoard = {
 hallOfName: username.value,
 score: mostRecentScore
//var nameScore = hallOfName + ": " + mostRecentScore;
}
hallOfFame.push(leaderBoard);
hallOfFame.sort((a,b) => b.score - a.score);
hallOfFame.splice(3)

localStorage.setItem("scoreCard", JSON.stringify(hallOfFame))

window.location.assign('../index.html')
};
 
saveScoreBtn.addEventListener('click', function(event){
    saveHighScore(event)
});
 
 
  