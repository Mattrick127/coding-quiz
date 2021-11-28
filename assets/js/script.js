var startQuiz = document.getElementById("start");
var title = document.getElementById("title");
var instructions = document.getElementById("instructions");
var countdownEl = document.getElementById("countdown");
var questionsContainer = document.querySelector(".questions");
var uno = document.querySelector(".uno");
var dos = document.querySelector(".dos");
var tres = document.querySelector(".tres");
var quatro = document.querySelector(".quatro");
var cinco = document.querySelector(".cinco");
var finishQuiz = document.querySelector(".finishQuiz");
var highScore = document.querySelector(".highScore");

var timeLeft;
var id;
var myCountdown;
function countdown() {
    timeLeft = 60;
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
  // Hide Elements after start quiz button
var changeElements = function () {
    startQuiz.classList.add ("hidden")
    title.classList.add ("hidden")
    instructions.classList.add ("hidden")
    questionsContainer.classList.remove ("hidden")
    uno.classList.remove ("hidden")
    
countdown()
}
var answerFunction = function (e) {
    var classEl = e.target.classList;
    console.log (classEl)
    id = e.target.getAttribute("id")
    console.log (id)
    if (id === "correct"){
        timeLeft += 10;
        console.log ("It worked!")
        if (e.target.classList.contains("correctUno")) {
        uno.classList.add ("hidden")
        dos.classList.remove ("hidden")
    }   if (e.target.classList.contains("correctDos")) {
        dos.classList.add ("hidden")
        tres.classList.remove ("hidden")
    }   if (e.target.classList.contains("correctTres")) {
        tres.classList.add ("hidden")
        quatro.classList.remove ("hidden")
    }   if (e.target.classList.contains("correctQuatro")) {
        quatro.classList.add ("hidden")
        cinco.classList.remove ("hidden")
    }   if (e.target.classList.contains("correctCinco")) {
        cinco.classList.add ("hidden")
        finishQuiz.classList.remove ("hidden")
}   
    } else {
        timeLeft -= 20;
        if (e.target.classList.contains("wrongUno")) {
        uno.classList.add ("hidden")
        dos.classList.remove ("hidden")
        }
        if (e.target.classList.contains("wrongUno")) {
        dos.classList.add ("hidden")
        tres.classList.remove ("hidden")
        }
        if (e.target.classList.contains("wrongUno")) {
        tres.classList.add ("hidden")
        quatro.classList.remove ("hidden")
        }
        if (e.target.classList.contains("wrongUno")) {
        quatro.classList.add ("hidden")
        cinco.classList.remove ("hidden")
        }
        if (e.target.classList.contains("wrongUno")) {
        cinco.classList.add ("hidden")
        finishQuiz.classList.remove ("hidden")
        }
    }
}
questionsContainer.addEventListener ("click",answerFunction)
startQuiz.addEventListener ("click",changeElements) 

//Idea beforehand.
//////////////////////

// function secondQuestion(e) {
//     if (e.target.matches(".correctUno")) {
//         console.log ("correct answer")
//         uno.classList.add ("hidden")
//         dos.classList.remove ("hidden")
//     } else {
//         console.log ("wrong answer")
//         uno.classList.add ("hidden")
//         dos.classList.remove ("hidden")
// }
        
    
// }
// section.addEventListener ("click",secondQuestion)

// //////////////////////

// function thirdQuestion(e) {
//     if (e.target.matches(".correctDos")) {
//         console.log ("correct answer")
//         dos.classList.add ("hidden")
//         tres.classList.remove ("hidden")
//     } else {
//         console.log ("wrong answer")
//         dos.classList.add ("hidden")
//         tres.classList.remove ("hidden")
//     }   
// }
// section.addEventListener ("click",thirdQuestion)

// //////////////////////

// function fourthQuestion(e) {
//     if (e.target.matches(".correctTres")) {
//         console.log ("correct answer")
//         tres.classList.add ("hidden")
//         quatro.classList.remove ("hidden")
//     } else {
//         console.log ("wrong answer")
//         tres.classList.add ("hidden")
//         quatro.classList.remove ("hidden")
        
//     }
// }
// section.addEventListener ("click",fourthQuestion)

// //////////////////////

// function fifthQuestion(e) {
//     if (e.target.matches(".correctQuatro")) {
//         console.log ("correct answer")
//         quatro.classList.add ("hidden")
//         cinco.classList.remove ("hidden")
//     } else {
//         console.log ("wrong answer")
//         quatro.classList.add ("hidden")
//         cinco.classList.remove ("hidden")
        
//     }
// }
// section.addEventListener ("click",fifthQuestion)

// //////////////////////
// function finishQuiz(e) {
//     if (e.target.matches(".correctCinco")) {
//         console.log ("correct answer")
//         console.log ("It worked!")
//         cinco.classList.add ("hidden")
//     }
// }
// section.addEventListener ("click",finishQuiz)
// //////////////////////

// function highScore(e) {
//     if (e.target.matches(".correct-cinco")) {
//         console.log ("correct answer")
//     }
// }
// section.addEventListener ("click",highScore)