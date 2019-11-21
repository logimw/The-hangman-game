class Hangman {
    constructor(word, attempts) {
        this.word = word;
        this.attempts = attempts;
        this.guess = []
        this.status = "playing"
    }
    getLetters() {
        let characters = this.word.toLowerCase().split("");
        return characters;
    }
    makeGuess(letter) {
        letter = letter.toLowerCase();
        let characters = this.getLetters();
        if (characters.includes(letter)) {
            if (!this.guess.includes(letter)) {
                this.guess.push(letter);
            }
            else if (this.guess.includes(letter)) {
                alert("You have to put an unique character!");
            }
            return this.guess;
        }
        else if (!characters.includes(letter)) {
            this.attempts--;
        }
    }
    get guessLetter() {
        let characters = this.getLetters();
        let letters = '';
        characters.forEach((char) => {
            if (this.guess.includes(char) || char === " ") {
                letters += char;
            }
            else {
                letters += "*";
            }
        });
        return letters;
    }
    get statusMessage() {
        let msg = '';
        if (this.attempts < 1) {
            this.status = "failed";
            msg = `Game over! The word was "${this.word}".`;
        }
        else if (!this.guessLetter.includes("*")) {
            this.status = "finished";
            msg = `Great work! You guessed the word.`;
        }
        else {
            this.status = "playing";
            msg = `Guesses left: ${this.attempts}`;
        }
        return msg;
    }
}