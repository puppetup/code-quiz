//list of questions and corresponding options
var myQuestions= [
    {
        questionText: 'Answer is B?',
        options: [
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        ]
        answer: 'b',
    },
    {
        questionText: 'Answer is B?',
        options: [
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        ]
        answer: 'b',
    },
    {
        questionText: 'Answer is B?',
        options: [
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        ]
        answer: 'b',
    },
    {
        questionText: 'Answer is B?',
        options: [
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        ]
        answer: 'b',
    }
    
];

//variables assigned to cards
var startCard = document.getElementById("#start-card");
var quizCard = document.getElementById("#quiz-card");

//current question variable
var currentQuestion

//start quiz function
function startQuiz() {

}

//show question + options
function showQuestion() {
    var question = [currentQuestion];
    var options = myQuestions.options;

    var questionDisplayed = document.getElementById('#question-text');
    questionDisplayed.textContent = myQuestions.questionText;

    for (let i = 0; i < options.length; i++) {

    }

}
