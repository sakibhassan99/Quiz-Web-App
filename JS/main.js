let quizData = [
  {
    question: "What is the most used programming language in 2023?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "C",
    correct: "c",
  },
  {
    question: "What is the full form of HTML?",
    a: "Cascading Style Sheets",
    b: "HyperText Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlinks and Text Markup Language",
    correct: "b",
  },
  {
    question: "Choose the correct HTML element for the largest heading",
    a: "h6",
    b: "head",
    c: "heading",
    d: "h1",
    correct: "d",
  },
  {
    question: "What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Creative Style Sheets",
    c: "Computer style sheets",
    d: "Colorful Style Sheets",
    correct: "a",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "javascript",
    b: "script",
    c: "js",
    d: "scripting",
    correct: "b",
  },
];

// Calling Variables From DOM
const submitBtn = document.getElementById("submitBtn");
const question_text = document.getElementById("question_text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  let currentQuizData = quizData[currentQuiz];
  question_text.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();

function getSelected() {
  let answer = undefined;
  let answers = document.querySelectorAll(".answer");
  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
    if (ans.checked) {
      ans.checked = false;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.querySelector(
        ".quiz_inner_container"
      ).innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}</h2>`;
      document.querySelector(
        "#submitBtn"
      ).innerHTML = `<button id="submitBtn" onclick="location.reload()">Reload</button>`;
    }
  }
});
