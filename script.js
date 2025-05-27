const questions = [
    {
        question: "1. What is the capital of India?",
        answer: "new delhi",
        correctResponse: "Correct!",
        incorrectResponse: "Nope, the correct answer is New Delhi"
    },
    {
        question: "2. Who was the first emperor of China?",
        answer: "qin shi huang",
        correctResponse: "Absolutely correct!",
        incorrectResponse: "Nope, the correct answer is Qin Shi Huang"
    },
    {
        question: "3. What is the color of the sky on a clear day?",
        answer: "blue",
        correctResponse: "Correct!",
        incorrectResponse: "It's blue!"
    },
    {
        question: "4. How many legs does a spider have?",
        answer: "8",
        correctResponse: "Correct!",
        incorrectResponse: "It has 8 legs"
    },
    {
        question: "5. What do plants need to make food?",
        answer: "sunlight",
        correctResponse: "Yes! Plants need sunlight",
        incorrectResponse: "The answer is sunlight"
    },
    // Extra, more difficult GK questions:
    {
        question: "6. Which physicist developed the theory of general relativity?",
        answer: "albert einstein",
        correctResponse: "Fantastic! That's right.",
        incorrectResponse: "The correct answer is Albert Einstein."
    },
    {
        question: "7. What is the largest desert in the world?",
        answer: "antarctica",
        correctResponse: "Correct! The Antarctic is the largest desert.",
        incorrectResponse: "It's Antarctica! Surprising, right?"
    },
    {
        question: "8. In what year did the Berlin Wall fall?",
        answer: "1989",
        correctResponse: "Right! 1989 is correct.",
        incorrectResponse: "The correct answer is 1989."
    }
];

let score = 0;
let currentQuestion = 0;
const totalQuestions = questions.length;

const quizDiv = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');

function showQuestion() {
    quizDiv.innerHTML = `
        <div>${questions[currentQuestion].question}</div>
        <input type="text" id="answer-input" autocomplete="off" autofocus>
        <div id="feedback"></div>
    `;
    nextBtn.disabled = true;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById('feedback');

    if (userAnswer === "") {
        feedback.textContent = "";
        nextBtn.disabled = true;
        return;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = questions[currentQuestion].correctResponse;
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = questions[currentQuestion].incorrectResponse;
        feedback.style.color = "red";
    }
    nextBtn.disabled = false;
}

function showResult() {
    quizDiv.classList.add('hidden');
    nextBtn.classList.add('hidden');
    let message = '';
    if (score === totalQuestions) {
        message = "You're a quiz master!";
    } else if (score >= Math.floor(totalQuestions * 0.6)) {
        message = "Great job!";
    } else {
        message = "Keep learning and you'll get even better!";
    }
    resultDiv.innerHTML = `
        <p>You finished the quiz!</p>
        <p>Your score is: ${score} out of ${totalQuestions}</p>
        <p><strong>${message}</strong></p>
    `;
    resultDiv.classList.remove('hidden');
}

// Event Listeners
quizDiv.addEventListener('keyup', function(e) {
    if (e.target.id === 'answer-input') {
        checkAnswer();
        if (e.key === 'Enter' && !nextBtn.disabled) {
            nextBtn.click();
        }
    }
});

nextBtn.addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
});

window.onload = function() {
    showQuestion();
};
