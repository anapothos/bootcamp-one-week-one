import { isCorrect, sanitizedUserAnswerFunction } from './functions.js';

const myButton = document.getElementById('action-button');

myButton.onclick = function() {
    alert ('welcome to my quiz');
        
    const userAnswer1 = prompt('is her fav color coffee?');
    const sanitizedUserAnswer = userAnswer1.toLowerCase();
    sanitizedUserAnswerFunction(sanitizedUserAnswer);
};