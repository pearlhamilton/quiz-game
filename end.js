const username = document.getElementById('username');
const saveScoreButton = document.getElementById('saveScoreButton')
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
console.log(highScores)



finalScore.innerText =  mostRecentScore;

username.addEventListener('keyup', () => {
    console.log(username.value)
    saveScoreButton.disabled = !username.value;
})


saveHighScore = (e) => {
    e.preventDefault();

    const score ={
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score)
    console.log(highScores)
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");

    console.log(score)

}