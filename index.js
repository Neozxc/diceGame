// Button stuff
const pressesRoll = document.getElementById("rollButton");
const changeScoreText = document.getElementById("theScore");
const image = document.getElementById("images");

// Lost Text
const lost = document.getElementById("youLost");
const won = document.getElementById("youWon");

// Audio
const playAudioLost = document.getElementById("audioLost");
const playAudioWon = document.getElementById("audioWon");

// Pre set 
lost.style.display = "none";
won.style.display = "none";

let theScore = 0;

pressesRoll.addEventListener("click", () => {
    let onRoll = Math.ceil(Math.random() * 6);
    theScore += onRoll;
    changeScoreText.textContent = theScore;
    image.src = `images/${onRoll}.png`;

    if (theScore >= 20 && won.style.display == "none") {
        won.style.display = "block";
        won.style.color = "green";
        playAudioWon.volume = 0.1;
        playAudioWon.play();
        theScore = 0;
        pressesRoll.textContent = "Restart?";
        pressesRoll.style.fontSize = "14px";
    } else if (theScore == 1 && lost.style.display == "none") {
        lost.style.display = "block";
        lost.style.color = "darkred";
        playAudioLost.volume = 0.1;
        playAudioLost.play();
        theScore = 0;
        pressesRoll.textContent = "Restart?";
        pressesRoll.style.fontSize = "14px";
    } else {
        pressesRoll.textContent = "keep pressing me >.<";
        pressesRoll.style.fontSize = "14px";
        lost.style.display = "none";
        won.style.display = "none";
    }
});