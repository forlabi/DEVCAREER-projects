const button = document.getElementById('btn');

button.addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = document.getElementById('text1').value;
    const userScramble = document.getElementById('text2').value;
    const finalOutput = document.getElementById('text3');
    const hashKey = document.getElementById('hash').value;
    

    scrambleInput(userInput, userScramble, finalOutput, hashKey);
});



const scrambleInput = function (userEntry, wordToScramble, finalOutput, keyToUse) {
    const wordsToMaskArray = wordToScramble.split(',').map(word => word.trim());
    let scrambledText = userEntry;
    for (let word of wordsToMaskArray){
        const regexPattern = new RegExp(`\\b${word}\\b`, 'gi');
        scrambledText = scrambledText.replace(regexPattern, keyToUse.repeat(word.length));

        
    }
    finalOutput.value = scrambledText; 
}

