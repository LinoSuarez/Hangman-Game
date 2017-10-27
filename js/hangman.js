var bankWords = ["School", "Car", "Mexico", "Computer", "Football", "Beer"];

var guessesRemaining = 8;
var lettersGuessed = [];
var buildedAnswer = [];
var word;
function setup(){
    guessesRemaining = 8;
    lettersGuessed = [];
    buildedAnswer = [];
    
    word = randomWord();
    wordLength = word.length;
    console.log(word);
    buildedAnswer = generateUnderscore(word);
    document.getElementById("generatedWord").innerHTML = buildedAnswer.join(' ');
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("lettersGuessed").innerHTML = "";
}
setup();

document.onkeyup = function(event){
    var key = event.key;
    if (key.charCodeAt(0) <= 122 && key.charCodeAt(0) >= 97){ //Only accept lowercase letters

        
        var guessed = false;
        for (var i = 0; i < word.length; i++){
            if (key === word[i].toLocaleLowerCase()){ //IF USER GUESSES

                buildedAnswer[i] = word[i];
                document.getElementById("generatedWord").innerHTML = buildedAnswer.join(' ');
                guessed = true;
                
            }
        }
        if (lettersGuessed.indexOf(key) < 0){
            if (!guessed){guessesRemaining--;}
            lettersGuessed.push(key);
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(', ').toUpperCase();
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
            if (guessesRemaining === 0){
                alert("You loosed, try again!")
                setup();
            }
        } else {
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

        }

        if (buildedAnswer.indexOf("_") < 0){
            alert("You WON!!! The word was " + buildedAnswer.join(""))
            setup();
        } 
    }

}

function randomWord() {
    return bankWords[Math.floor(Math.random() * bankWords.length)];
}

function generateUnderscore(word) {
    buildedAnswer = [];
    for (var i = 0; i < word.length; i++){
        buildedAnswer.push("_");
    }
    return buildedAnswer;
}
