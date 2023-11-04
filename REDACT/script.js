const button = document.getElementById('btn'); // button element
const closeButton = document.getElementById('close-btn'); // button element


button.addEventListener('click', function (event) { //Event listener to action scrambling function
    event.preventDefault();
    const userInput = document.getElementById('text1').value;
    const userScramble = document.getElementById('text2').value;
    const finalOutput = document.getElementById('text3');
    const hashKey = document.getElementById('hash').value;
    
    // const wordCount = document.getElementById('word-count'); 
    // const scramCount = document.getElementById('scramble-count'); 
    // const popup = document.getElementById('popup');
    
       

    scrambleInput(userInput, userScramble, finalOutput, hashKey); //Scramblig function is called with arguments
});


//Scrambling function
const scrambleInput = function (userEntry, wordToScramble, finalOutput, keyToUse) { 
    
    const wordCount = document.getElementById('word-count'); 
    const scramCount = document.getElementById('scramble-count'); 
    const popup = document.getElementById('popup');
    const chaCount = document.getElementById('character-count');
    const scramChaCount = document.getElementById("scram-cha-count");
    const count = document.querySelector('.count');
    const wordsToMaskArray = wordToScramble.split(',').map(word => word.trim());
    let scrambledText = userEntry;
    const words = scrambledText.match(/\w+/g); // Total words scanned
  
    const numWords = words.length;
    let scramCharacter = 0; //Tracker for the number of characters to be scrambled
    let scrambleCounter = 0; //Tracker for the number of words to be scrambled

    // Loop to match and scramble selected words
        wordsToMaskArray.forEach(word => {
            const scrambledPattern = new RegExp(`\\b${word}\\b`, 'gi');
            const matches = scrambledText.match(scrambledPattern);
            if (matches) {
                scrambleCounter += matches.length;
                scramCharacter += matches.join('').length; // Gets the character count of the scrambled words
                
            }
            scrambledText = scrambledText.replace(scrambledPattern, keyToUse.repeat(4));
            
        });
        
        finalOutput.value = scrambledText; // Final output text
       
        // Words stats popup car
        popup.classList.remove('hidden');
        wordCount.textContent  = numWords;
        scramCount.textContent =  scrambleCounter; 
        chaCount.textContent =  userEntry.length; 
        scramChaCount.textContent = scramCharacter; 
        
        
    }
    

  
    

// Close button for the stats popup
closeButton.addEventListener('click', (event) => {
    popup.classList.add('hidden');
    event.preventDefault();
});