const button = document.getElementById('btn');

button.addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = document.getElementById('text1').value;
    const userScramble = document.getElementById('text2').value;
    const finalOutput = document.getElementById('text3');
    

    scrambleInput(userInput, userScramble, finalOutput);
});


function maskWord(match) {
    return "*".repeat(match.length);
  };
const scrambleInput = function (userEntry, wordToScramble, finalOutput) {
    
    const regexPattern = new RegExp(`\\b${wordToScramble}\\b`, 'gi');
    const scrambledText = userEntry.replace(regexPattern, maskWord)

    finalOutput.value = scrambledText;
    
}

