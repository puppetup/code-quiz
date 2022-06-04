var myQuestions= [
    {
        question: 'Answer is B?',
        options: {
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        }
        answer: 'b',
    },
    {
        question: 'Answer is B?',
        options: {
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        }
        answer: 'b',
    },
    {
        question: 'Answer is B?',
        options: {
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        }
        answer: 'b',
    },
    {
        question: 'Answer is B?',
        options: {
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd'
        }
        answer: 'b',
    }
    
];

const startCard = document.querySelector("#start-card");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");

function hideCards() {
    startCard.setAttribute("hidden", true);
    questionCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
    leaderboardCard.setAttribute("hidden", true);
  }

  const resultDiv = document.querySelector("#result-div");
  const resultText = document.querySelector("#result-text");

function 