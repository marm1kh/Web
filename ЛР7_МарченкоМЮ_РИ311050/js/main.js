let randomNumber = Math.floor(Math.random() * 11);

let numTries = document.querySelector(".numTries");
let answerField = document.querySelector('.answerField');
let answerSubmit = document.querySelector('.answerSubmit');

let countAnswer = 5;
numTries.textContent = countAnswer; 

function checkAnswer() {
    let userAnswer = document.getElementById("answerField").value;

    if (userAnswer !== "") {     
        if (Number(userAnswer) === randomNumber){
            alert("Вы угадали число!");
            setGameOver(); 
        }
        else if (Number(userAnswer) < randomNumber){
            countAnswer--;
            alert("Ваше число меньше заданного.");
        }
        else if (Number(userAnswer) > randomNumber) {
            countAnswer--;
            alert("Ваше число больше заданного.");
        }
        
        numTries.textContent = countAnswer;
        document.getElementById("answerField").value = "";
        
        if (countAnswer === 0) {
            alert("Вы проиграли!");
            setGameOver();
        }
    }
    else {
        alert('Пожалуйста, заполните поле ввода.');
    }
    answerField.focus();
}

function setGameOver() {
    answerField.disabled = true;
    answerSubmit.disabled = true;
    if (confirm("Хотите попробовать еще?") == true){
        resetGame();
    }
    else {
        return false;
    }
}

function resetGame() {
    document.getElementById("answerField").value = ""; 
    answerField.disabled = false;
    answerSubmit.disabled = false;
    countAnswer = 5;
    numTries.textContent = countAnswer;
    answerSubmit.addEventListener("click", checkAnswer);
    randomNumber = Math.floor(Math.random() * 11);
}

answerSubmit.addEventListener("click", checkAnswer);
