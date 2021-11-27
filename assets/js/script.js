var startQuiz = document.getElementById("start");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var countdownEl = document.getElementById("countdown");
var section = document.querySelector(".questions");
var uno = document.querySelector(".uno");
var dos = document.querySelector(".dos");
var tres = document.querySelector(".tres");
var quatro = document.querySelector(".quatro");
var cinco = document.querySelector(".cinco");
var finishQuiz = document.querySelector(".finishQuiz");
var highScore = document.querySelector(".highScore");

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

//////////////////////

function secondQuestion(e) {
    if (e.target.matches(".correct-uno")) {
        console.log ("correct answer")
        uno.classList.add ("hidden")
        dos.classList.remove ("hidden")
    } else {
        
    }
}
section.addEventListener ("click",secondQuestion)

//////////////////////

function thirdQuestion(e) {
    if (e.target.matches(".correct-dos")) {
        console.log ("correct answer")
        dos.classList.add ("hidden")
        tres.classList.remove ("hidden")
    } else {
        
    }
}
section.addEventListener ("click",thirdQuestion)

//////////////////////

function fourthQuestion(e) {
    if (e.target.matches(".correct-tres")) {
        console.log ("correct answer")
        tres.classList.add ("hidden")
        quatro.classList.remove ("hidden")
    } else {
        
    }
}
section.addEventListener ("click",fourthQuestion)

//////////////////////

function fifthQuestion(e) {
    if (e.target.matches(".correct-quatro")) {
        console.log ("correct answer")
        quatro.classList.add ("hidden")
        cinco.classList.remove ("hidden")
    } else {
        
    }
}
section.addEventListener ("click",fifthQuestion)

//////////////////////

function finishQuiz(e) {
    if (e.target.matches(".correct-cinco")) {
        console.log ("correct answer")
        cinco.classList.add ("hidden")
        finishQuiz.classList.remove ("hidden")
    } else {

    }
}
section.addEventListener ("click",finishQuiz)

startQuiz.addEventListener ("click",changeElements) 