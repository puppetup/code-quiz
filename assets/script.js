//list of questions and corresponding options
var myQuestions = [
    {
        questionText: 'Answer is B?',
        options: [
           '1. answer',
           '2. answer',
           '3. answer',
           '4. answer'
        ],
        answer: '4. answer',
    },
    {
        questionText: 'Answer is B?',
        options: [
            '1. answer',
            '2. answer',
            '3. answer',
            '4. answer'
        ],
        answer: '4. answer'
    },
    {
        questionText: 'Answer is B?',
        options: [
           '1. answer',
           '2. answer',
           '3. answer',
           '4. answer'
        ],
        answer: '4. answer'
    },
    {
        questionText: 'Answer is B?',
        options: [
            '1. answer',
            '2. answer',
            '3. answer',
            '4. answer'
        ],
        answer: 'b',
    }
    
];

//variables assigned to cards
var startCard = document.getElementById("start-card");
var quizCard = document.getElementById("quiz-card");


//current question variable
var currentQuestion

//starts quiz
document.getElementById("start-button").addEventListener('click', startQuiz);

//start quiz function
function startQuiz() {

    currentQuestion = 0;
    showQuestion();

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

//check answer when clicked
document.getElementById('options').addEventListener('click', checkAnswer);

function isCorrect (optionButton) {
    var optionButton = optionButton.target
    
    if (optionButton.textContent === myQuestions[currentQuestion].answer) {
        return console.log('nice')
    } ;
    
}

function checkAnswer ()

