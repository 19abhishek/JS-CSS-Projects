const quizData = [
  {
    question: "Who's my favourite football player?",
    a: "Cristiano Ronaldo",
    b: "Andrés Iniesta",
    c: "Ronaldo Nazário",
    d: "Lionel Andrés Messi",
    correct: 'd',
  },
  {
    question: "Which city do I live in?",
    a: "New Delhi",
    b: "Dhanbad",
    c: "Banglore",
    d: "Ranchi",
    correct: 'b',
  },
  {
    question: "What is my favourite movie?",
    a: "Batman: The Dark Knight",
    b: "Zindagi Na Milegi Dobara",
    c: "3 Idiots",
    d: "The Shawshank Redemption",
    correct: 'a',
  },
  {
    question: "Which one of the below activity I don't enjoy doing?",
    a: "Listening to music",
    b: "Political debates",
    c: "Tech talks",
    d: "Playing games",
    correct: 'b',
  },
  {
    question: "What sports do I enjoy playing?",
    a: "Volleyball",
    b: "Badminton",
    c: "Swimming",
    d: "Bhai Ko sab Pasand hai!!",
    correct: 'b',
  }
];

const Question = document.getElementById("question");
const optionA = document.getElementById("option_a");
const optionB = document.getElementById("option_b");
const optionC = document.getElementById("option_c");
const optionD = document.getElementById("option_d");
const submitBtn = document.getElementById("btn");
const answerEls = document.querySelectorAll(".answer");
//console.log(answerEls);

let currentQuestion = 0;
let correctAnswerCount = 0;

loadQuiz();

function loadQuiz() {
  // if (currentQuestion < quizData.length) {
    deselectAnswers();


    //currentQuestion = currentQuestion === -1 ? 0: currentQuestion; 
    Question.textContent = quizData[currentQuestion].question;
    optionA.textContent = quizData[currentQuestion].a;
    optionB.textContent = quizData[currentQuestion].b;
    optionC.textContent = quizData[currentQuestion].c;
    optionD.textContent = quizData[currentQuestion].d;



    // const radio = document.getElementsByTagName("input");
    // let isCorrect = false;
    // // console.log(quizData[currentQuestion].correct);
    // for (let i = 0; i < radio.length; i++) {
    //   let x = i + 1;
    //   // console.log(x +" ? "+ quizData[currentQuestion].correct);
    //   if(radio[i].checked) {
    //     //alert("c1");
    //     // console.log(x +" "+ quizData[currentQuestion-1].correct);
    //     // console.log(x === quizData[currentQuestion-1].correct);
    //     if (x === quizData[currentQuestion-1].correct) {
    //       //alert("correct");
    //       isCorrect = true;
    //       correctAnswer++;
    //       //break;
    //     }
    //     radio[i].checked = false;
    //   }
    // }
    // console.log(correctAnswer);
    // currentQuestion++;
  // } else {
  //   console.log(correctAnswer);
  // }
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
      answerEl.checked = false;
  });
}


submitBtn.addEventListener("click", () => {
  const currentAnswer = getSelected();

  if(currentAnswer) {
    if(currentAnswer === quizData[currentQuestion].correct) {
      correctAnswerCount++;
    }
    currentQuestion++;
    if(currentQuestion < quizData.length){
      loadQuiz();
    }else {
      const quizHeader = document.querySelector('.quiz-header');
      const result = document.querySelector('.result');
      const sValue = document.getElementById('score_value');
      sValue.textContent = correctAnswerCount;
      quizHeader.style.display = 'none';
      submitBtn.style.display = 'none';
      result.style.display = 'block';
    }
  }
});
