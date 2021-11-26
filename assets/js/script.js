var startQuiz = document.getElementById("start");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var countdownEl = document.getElementById("countdown");

var myCountdown;

// function countdown () {
//     myCountdown = setTimeout(function(){
//         countdownEl.textContent = ("3 seconds.");
//     },3000)
// }
// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        countdownEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
    }, 1000);
  }
console.log (startQuiz)
console.log (countdownEl)


var hideElements = function () {
    startQuiz.classList.add ("hidden")
    title.classList.add ("hidden")
    instructions.classList.add ("hidden")
countdown()
}


startQuiz.addEventListener ("click",hideElements) 