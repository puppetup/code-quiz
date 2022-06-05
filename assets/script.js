//list of questions and corresponding options
var myQuestions = [
    {
        questionText: 'Commonly used data types do not include',
        options: [
           '1. boolean',
           '2. numbers',
           '3. strings',
           '4. sandwich'
        ],
        answer: '4. sandwich',
    },
    {
        questionText: 'A very useful tool used during development and debugging is?',
        options: [
            '1. console.log',
            '2. ham sandwich',
            '3. cheese sandwich',
            '4. meat sandwich'
        ],
        answer: '1. console.log'
    },
    {
        questionText: 'Arrays in javascript can be used to store ____?',
        options: [
           '1. eggs',
           '2. strings',
           '3. bacon',
           '4. breakfast sausage patties'
        ],
        answer: '2. strings'
    },
    {
        questionText: 'String values must be enclosed with _____ when assigned to variables',
        options: [
            '1. french fries',
            '2. french toast',
            '3. quotes',
            '4. french polynesia'
        ],
        answer: '3. quotes',
    }
    
];

//global variables
var startCard = document.getElementById('start-card');
var quizCard = document.getElementById('quiz-card');
var scoreCard = document.getElementById('score-card');
var leaderboardCard = document.getElementById('leaderboard-card');
var score = document.getElementById('score');
var resultText = document.getElementById('result-text');
var resultDiv = document.getElementById('results');
var currentQuestion
var intervalID;
var time;

//hide all cards
function hideCards() {
    startCard.setAttribute('hidden', true);
    quizCard.setAttribute('hidden',true);
    scoreCard.setAttribute('hidden', true);
    leaderboardCard.setAttribute('hidden', true);
}

//hide the correct/incorrect text
function hideResults() {
    results.style.display = 'none'
}

//shows quiz card and timer/begins countdown
function startQuiz() {
    hideCards();
    quizCard.removeAttribute('hidden');
    currentQuestion = 0;
    showQuestion();
    time = myQuestions.length * 10;
    intervalID = setInterval(countdown, 1000);
    displayTime

}

//subtract time via interval
function countdown () {
    time--;
    displayTime();
    if (time < 1) {
        quizOver();
    }
}

//display timer
var timeDisplay = document.getElementById('time');
function displayTime() {
    timeDisplay.textContent = time;
}

//show question + options
function showQuestion() {
    var question = myQuestions[currentQuestion];
    var options = question.options;

    var questionDisplayed = document.getElementById('question-text');
    questionDisplayed.textContent = question.questionText;

    for (let i = 0; i < options.length; i++) {
        var option = options[i];
        var optionButton = document.getElementById('option' + i)
        optionButton.textContent = option;

    }

}

//print answer result
function checkAnswer (eventObject) {
    var optionButton = eventObject.target;
    results.style.display = 'block'
    if (isCorrect(optionButton)) {
        resultText.textContent = "Correct"
        setTimeout(hideResults, 1000);
    } else {
        resultText.textContent = "WRONG"
        setTimeout(hideResults, 1000);
        if (time >= 10) {
            time = time - 10;
            displayTime();
        } else {
            time = 0;
            displayTime();
            quizOver();
        }
    }

    currentQuestion++

    if (currentQuestion < myQuestions.length) {
        showQuestion();
    } else {
        quizOver();
    }
}

//compares selection with answer
function isCorrect (optionButton) {
    
    
    return optionButton.textContent === myQuestions[currentQuestion].answer
     
 }

//clears timer
function quizOver() {
    clearInterval(intervalID);
    hideCards();
    scoreCard.removeAttribute('hidden');
    score.textContent = time;
}

var submitButton = document.getElementById('submit-button');
var inputElement = document.getElementById('initials');

//shows scorecard
function storeScore(event) {

    event.preventDefault();

    if (!inputElement.value) {
        alert('Please enter your shit before pressing the god damn button');
        return;
    }

    let leaderboardItem = {
        initials: inputElement.value,
        score: time,
    };

    updateBoard(leaderboardItem);

    hideCards();
    leaderboardCard.removeAttribute('hidden');

    renderLeaderboard();
}

//saves string to board
function updateBoard(leaderboardItem) {
    let leaderboardArray = getLeaderboard();
    leaderboardArray.push(leaderboardItem);
    localStorage.setItem('leaderboardArray', JSON.stringify(leaderboardArray));
}

//returns leader board array
function getLeaderboard() {
    let storedLeaderboard = localStorage.getItem('leaderboardArray');
    if (storedLeaderboard !== null) {
        let leaderboardArray = JSON.parse(storedLeaderboard);
        return leaderboardArray;
    } else {
        leaderboardArray = [];
    }
    return leaderboardArray;
}

//displays board
function renderLeaderboard() {
    let sortedLeaderboardArray = sortBoard();
    let highscoreList = document.getElementById('highscore-list');
    highscoreList.innerHTML = '';
    for (let i=0; i < sortedLeaderboardArray.length; i++) {
        let leaderboardEntry = sortedLeaderboardArray[i];
        let newListItem = document.createElement('li');
        newListItem.textContent = 
            leaderboardEntry.initials + ' - ' + leaderboardEntry.score;
        highscoreList.append(newListItem);
    }
}

//sort from high to low score
function sortBoard() {
    let leaderboardArray = getLeaderboard();
    if (!leaderboardArray) {
        return;
    }

    leaderboardArray.sort(function (a, b) {
        return b.score - a.score;
    });
    return leaderboardArray;
}

const clearButton = document.getElementById('clear-button');

//clears local storage
function clearHighscores() {
    localStorage.clear();
    renderLeaderboard();
}

const backButton = document.getElementById('back-button');


function returnToStart() {
    hideCards();
    startCard.removeAttribute('hidden');
}

//shows leaderboard if link is pressed
const leader = document.getElementById('view-scores');

function showLeaderboard() {
    hideCards();
    leaderboardCard.removeAttribute('hidden');

    clearInterval(intervalID);

    time = undefined;
    displayTime();

    renderLeaderboard();
}

//event listeners
document.getElementById('options').addEventListener('click', checkAnswer);
leader.addEventListener('click', showLeaderboard);
backButton.addEventListener('click', returnToStart);
clearButton.addEventListener('click', clearHighscores);
document.getElementById('start-button').addEventListener('click', startQuiz);
submitButton.addEventListener('click', storeScore);

