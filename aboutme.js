
import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = function() {
    alert ('welcome to my quiz');
    const myConfirmation = confirm ('do you want to take my quiz???');

    console.log(myConfirmation);

    const userAnswer = prompt('is my fav color coffee? (yes/no)');

    const sanitizedUserAnswer = userAnswer.toLowerCase();

    const userIsCorrect = isCorrect(sanitizedUserAnswer);

    if (userAnswer === 'yes'){
        alert('right-o!');
    } else {
        alert ('nah');
    }
   
    
};

