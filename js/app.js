'use strict';

let siteVisitor = prompt('Hey! What is your name?');

alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);

let questionOne = prompt('Do I like to cook?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  alert('Correct, in fact I am making a delicious bowl of cereal right now.');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('Incorrect, in fact, I am making a delicious bowl of cereal right now.');
} else {
  alert('Psst, you forgot to say yes or no.');
}

let questionTwo = prompt('Am I originally from Michigan?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('Incorrect, in fact, I will never go to Michigan');
} else if(questionTwo === 'no' || questionTwo === 'n'){
  alert('Correct! Though I am one slip up away from living in Detroit');
} else {
  alert('Psst, you forgot to say yes or no.');
}

let questionThree = prompt('Did I attend college?').toLowerCase();

if(questionThree === 'yes' || questionThree === 'y'){
  alert('Suuurree, I attended Does Not Exist University. Incorrect!');
} else if(questionThree === 'no' || questionThree === 'n'){
  alert('Unfortunately, that is correct :D .');
} else {
  alert('Psst, you forgot to say yes or no.');
}

let questionFour = prompt('Would my previous job experiences be considered impressive?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y'){
  alert('Thank you, now can you say that on my LinkedIn please?');
} else if(questionFour === 'no' || questionFour === 'n'){
  alert('That is so mean I am trying my best out here.');
} else {
  alert('Psst, you forgot to say yes or no.');
}


let questionFive = prompt('Are one of my goals to catch all the Pokemon?').toLowerCase();

if(questionFive === 'yes' || questionFive === 'y'){
  alert('I mean, when I was five, but no. Incorrect!');
} else if(questionFive === 'no' || questionFive === 'n'){
  alert('Correct! I am trying to catch all the money though. ' + 'Thanks for taking my About Me quiz, ' + siteVisitor + '!');
} else {
  alert('Psst, you forgot to say yes or no.');
}









