let questionsData = [
   {
      title: 'What is HTML',
      a: 'HyperTextMarkupLenguage',
      b: 'Hyper Text',
      c: 'Web Development',
      d: 'Python',
      correct: a
   },
   {
      title: 'React is a framework?',
      a: 'No',
      b: 'No, ReactJS is a programming lenguage',
      c: 'Yes, python',
      d: 'Javascript framework',
      correct: d
   },
   {
      title: 'What is CSS?',
      a: 'Cascading lenguage',
      b: 'Crud style sheet',
      c: 'Cascading crud lenguage',
      d: 'Cascading style sheet',
      correct: d
   },
   {
      title: 'Python',
      a: 'Python > c++',
      b: 'Python >= Javascript',
      c: 'Python < Javascript',
      d: 'Python != java',
      correct: b
   }
];

const $select = document.querySelector.bind(document);

let text_question = $select('#question_text');
let question_a = $select('#a_text');
let question_b = $select('#b_text');
let question_c = $select('#c_text');
let question_d = $select('#d_text');
let btn = $select('#btn');

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
   const currentQuizData = questionsData[currentQuestion];

   text_question.innerText = currentQuizData.title;
   
   question_a.innerText = currentQuizData.a;
   question_b.innerText = currentQuizData.b;
   question_c.innerText = currentQuizData.c;
   question_d.innerText = currentQuizData.d;

};


btn.addEventListener('click', () =>{
   currentQuestion++
   console.log(currentQuestion);

   if(currentQuestion < questionsData.length) {
      loadQuiz();
   } else {
      console.log('Your finish quiz!')
   }
});