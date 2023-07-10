// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let entercomp = document.querySelector("#B2");
let entercompspace= document.querySelector(".buttonClass")
let fristpage= document.querySelector("#mainscreen1")
// little screen 
let ls1 = document.querySelector("#s1")
let lsb= document.querySelector("#next1")
let ls2 = document.querySelector("#s2")
let ls = document.querySelector("#littlescreen")
// loading 
let loadingscreen = document.querySelector("#load")
// homepage 
let homescreen = document.querySelector("#home")
let aboutme = document.querySelector("#me")
//all About me
let aboutmediv = document.querySelector("#Aboutme")










function checkGuess() {
  // Get the guessed number from the input field
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  //  Increment the guess count
  guessCount++;

  // Check if the guess is correct
  if (guess === randomNumber) {
    displayResult(`Congratulations! hacker you got the number ${randomNumber} correctly in ${guessCount} attempts.`);
    disableInput();
    entercomp.style.display="flex"
entercompspace.style.display="flex"
ls.style.display="none"

  } else if (guess < randomNumber) {
    displayResult('Too low! Try again.');
  } else {
    displayResult('Too high! Try again.');
  }

  // Clear the input field
  guessInput.value = '';
}

function displayResult(message) {
  const result = document.getElementById('result');
  result.textContent = message;
}

function disableInput() {
  const guessInput = document.getElementById('guessInput');
  const submitButton = document.querySelector('button');
  guessInput.disabled = true;
  submitButton.disabled = true;
}
entercomp.onclick = function(){

}
// little screen
lsb.onclick = function(){
  ls1.style.display="none"
  ls2.style.display="flex"
  lsb.style.display="none"
}
// Next Page 
entercomp.onclick = function(){
fristpage.style.display = " none"
loadingscreen.style.display = "flex"
}

// loding 
 
// Get the element
const myElement = document.getElementById('load');

let timer;

// Function to perform an action after 5 seconds
function performAction() {
  myElement.textContent = 'Action performed!';
  // Add your desired action here
}

// Add event listeners for mouse enter and leave
myElement.addEventListener('mouseenter', function() {
  // Start the timer when hovering over the element
  timer = setTimeout(performAction, 5000); // 5000 milliseconds = 5 seconds
});

myElement.addEventListener('mouseleave', function() {
  // Clear the timer when leaving the element
  clearTimeout(timer);
  myElement.textContent = 'Hover Over Me';
  myElement.style.display = "none"
homescreen.style.display = "flex"
});
// About me Page
aboutme.onclick=function(){
homescreen.style.display = "none"
aboutmediv.style.display = "flex"
}