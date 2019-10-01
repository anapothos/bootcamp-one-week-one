import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = function() {
    alert ('welcome to my quiz');
        
    const userAnswer1 = prompt('is her fav color coffee?');
    const sanitizedUserAnswer = userAnswer1.toLowerCase();
    // const userIsCorrect = isCorrect(sanitizedUserAnswer);

    if (isCorrect(sanitizedUserAnswer)) { 
        alert('hell yeah');
    } else {
        alert ('nah');
    }
        // console.log(myConfirmation); 

    const userAnswer2 = prompt('has she left the united states ever in her life?');
    // const sanitizedUserAnswer = userAnswer.toLowerCase();
    // const userIsCorrect = isCorrect(sanitizedUserAnswer);

    if (userAnswer2 === 'yes'){
        alert ('you are correct');
    } else {
        alert ('nahhh b');
    }
    
    const userAnswer3 = prompt('does the author have a big big dog?');
    // const sanitizedUserAnswer = userAnswer.toLowerCase();
    // const userIsCorrect = isCorrect(sanitizedUserAnswer);

    if (userAnswer3 === 'no'){
        alert ('congratulations on your successful knowledge absortion');
    } else {
        alert ('nahhh b');
    }

};

// 
// 