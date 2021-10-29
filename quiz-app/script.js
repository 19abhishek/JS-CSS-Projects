const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: 4,
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: 2,
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: 1,
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: 2,
  },
];

const Question = document.getElementById("question");
const optionA = document.getElementById("option_a");
const optionB = document.getElementById("option_b");
const optionC = document.getElementById("option_c");
const optionD = document.getElementById("option_d");
const submitBtn = document.getElementById("btn");

let currentQuestion = 0;
let correctAnswer = 0;

function loadQuiz() {
  if (currentQuestion < quizData.length) {
    Question.textContent = quizData[currentQuestion].question;
    optionA.textContent = quizData[currentQuestion].a;
    optionB.textContent = quizData[currentQuestion].b;
    optionC.textContent = quizData[currentQuestion].c;
    optionD.textContent = quizData[currentQuestion].d;

    const radio = document.getElementsByTagName("input");
    let isCorrect = false;
    // console.log(quizData[currentQuestion].correct);
    for (let i = 0; i < radio.length; i++) {
      let x = i + 1;
      // console.log(x +" ? "+ quizData[currentQuestion].correct);
      if(radio[i].checked) {
        alert("c1");
        if (x === quizData[currentQuestion].correct) {
          alert("correct");
          isCorrect = true;
          correctAnswer++;
          break;
        }
        radio[i].checked = false;
      }
      // if (x === quizData[currentQuestion].correct) {
      //     if(radio[i].checked){
      //       alert("correct");
      //       isCorrect = true;
      //       correctAnswer++;
      //       break;
      //     }
      // } 
      // if (radio[i].checked) {
      //   radio[i].checked = false;
      // }
    }
    currentQuestion++;
  } else {
    console.log(correctAnswer);
  }
}

loadQuiz();

submitBtn.addEventListener("click", loadQuiz);
