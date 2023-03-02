const quizData = [
    {
        question: 'How old is Gosha?',
        a: '11',
        b: '14',
        c: '16',
        d: '19',
        correct : 'd'
    },

    {
        question: 'How old is Varvara?',
        a: '16',
        b: '17',
        c: '18',
        d: '19',
        correct: 'c'
    },

    {
        question: 'How old is Andrey?',
        a: '19',
        b: '20',
        c: '25',
        d: '27',
        correct: 'a'
    },

    {
        question: 'How old is the Earth?',
        a: '2023',
        b: 'doesn`t really matter',
        c: '2 billlion years',
        d: 'matrix',
        correct: 'b'
    },

]

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const questionEl = document.getElementById('questionData');
const subBtn = document.getElementById('submit');
const answerEls = document.getElementsByName('answer');
const results = document.getElementById('results');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnsweres();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnsweres() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

subBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if (currentQuestion<quizData.length){
            loadQuiz();
        }
        else{
            results.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});