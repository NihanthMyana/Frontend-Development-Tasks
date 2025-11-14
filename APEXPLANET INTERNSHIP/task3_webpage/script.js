const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Modern Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS control?",
    options: [
      "Data Processing",
      "HTML Structure",
      "Web Page Styling",
      "Database Queries"
    ],
    answer: "Web Page Styling"
  },
  {
    question: "Which language is used for interactivity?",
    options: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(optionText => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = optionText;
    div.onclick = () => {
      document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      div.classList.add("selected");
      selectedOption = optionText;
    };
    optionsEl.appendChild(div);
  });
}

nextBtn.onclick = () => {
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  selectedOption = null;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quiz.innerHTML = `<h2>🎉 You scored ${score} out of ${questions.length}</h2>`;
}

loadQuestion();
