export const isCorrect = (userAnswer) => {
    if (userAnswer === 'yes') {
        return true; 
    }
    else { 
        return false; 
    }
};

export const questionOneFunction = (sanitizedUserAnswer) => {
    if (isCorrect(sanitizedUserAnswer)) { 
        alert('hell yeah');
    } else {
        alert ('nah');
    }   
};
export const questionThreeFunction = (sanitizedUserAnswer) => {
    if (!isCorrect(sanitizedUserAnswer)) { 
        alert('hell yeah');
    } else {
        alert ('nah');
    }   
};

export const sanitizedUserAnswerFunction = (sanitizedUserAnswer) => {
    questionOneFunction(sanitizedUserAnswer);
    const userAnswer2 = prompt('has she left the united states ever in her life?');
    questionOneFunction(userAnswer2);
    const userAnswer3 = prompt('does the author have a big big dog?');
    questionThreeFunction(userAnswer3);
    sanitizedUserAnswer;
};