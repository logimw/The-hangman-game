const attemptsDOM = document.querySelector("#attempts");
const wordDOM = document.querySelector("#word");
const statusDOM = document.querySelector("#status");


// wordDOM.textContent = game1.guessLetter;
// attemptsDOM.textContent = game1.attempts;

window.addEventListener("keypress", (key) => {
    key.preventDefault();
    if (!game1.attempts < 1) {
        const letter = String.fromCharCode(key.charCode);
        game1.makeGuess(letter);
        render()
        // game1.statusMessage;
    } else {
        console.log("  .   " + game1.attempts)
    }
    statusDOM.textContent = game1.statusMessage;
});
const render = () => {
    // wordDOM.textContent = game1.guessLetter;
    wordDOM.innerHTML = '';
    attemptsDOM.textContent = game1.attempts;
    statusDOM.textContent = game1.statusMessage;
    game1.guessLetter.split('').forEach(letter => {
        const letterEl = document.createElement("span");
        letterEl.textContent = letter;
        wordDOM.appendChild(letterEl);
    })
}
const startGame = async () => {
    const word = await getWord()
    game1 = new Hangman(word, 5)
    render()
}
document.querySelector("#reset").addEventListener("click", startGame)

startGame()

// getWord().then(task => console.log('task.puzzle :', task))

window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        e.preventDefault();
    }
})