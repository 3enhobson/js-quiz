var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('save-score');
var finalScore = document.getElementById('final-score');
var mostRecentScore = localStorage.getItem('recentScore');
finalScore.innerText = mostRecentScore;

 username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
 });

 saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();
};
 
 
 
 