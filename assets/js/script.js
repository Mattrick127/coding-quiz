var startQuiz = document.getElementById("start");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var countdownEl = document.getElementById("countdown");
var section = document.querySelector(".questions");
var uno = document.querySelector(".uno");

var myCountdown;
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            countdownEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
                countdownEl.textContent = timeLeft + ' second remaining';
                timeLeft--;
            } else {
                countdownEl.textContent = '';
                clearInterval(timeInterval);
        }
    }, 1000);
  }
var changeElements = function () {
    startQuiz.classList.add ("hidden")
    title.classList.add ("hidden")
    instructions.classList.add ("hidden")
    section.classList.remove ("hidden")
    uno.classList.remove ("hidden")
countdown()
}

function quizLogic(e) {
    if (e.target.matches(".correct")) {
        console.log ("correct answer")
    } else {
        console.log ("wrong answer")
        countdownEl--;
    }
}
section.addEventListener ("click",quizLogic)


startQuiz.addEventListener ("click",changeElements) 