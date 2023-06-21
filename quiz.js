let score = 0;

function showScore() {
  const totalScore = document.getElementById('score-message');

  if (score === 15) {
    totalScore.innerHTML = score + "点：満点"
  } else if (score === 14) {
    totalScore.innerHTML = score + "点";
  } else if (score === 13) {
    totalScore.innerHTML = score + "点";
  } else if (score === 12) {
    totalScore.innerHTML = score + "点";
  } else if (score === 11) {
    totalScore.innerHTML = score + "点";
  } else if (score === 10) {
    totalScore.innerHTML = score + "点";
  } else if (score === 9) {
    totalScore.innerHTML = score + "点";
  } else if (score === 8) {
    totalScore.innerHTML = score + "点";
  } else if (score === 7) {
    totalScore.innerHTML = score + "点";
  } else if (score === 6) {
    totalScore.innerHTML = score + "点";
  } else if (score === 5) {
    totalScore.innerHTML = score + "点";
  } else if (score === 4) {
    totalScore.innerHTML = score + "点";
  } else if (score === 3) {
    totalScore.innerHTML = score + "点";
  } else if (score === 2) {
    totalScore.innerHTML = score + "点";
  } else if (score === 1) {
    totalScore.innerHTML = score + "点";
  } else {
    totalScore.innerHTML = score + "点：残念";
  }
}


const correct = '正解です';
const incorrect = '不正解です';

function answerQuiz1() {
  const quiz_1 = document.getElementById('quiz-1');
  const select = '1問目：' + quiz_1.answer.value + 'を選択しました';
  if (quiz_1.answer.value == 'a') {
    score = score + 2;
  }
}
function answerQuiz2() {
  const quiz_2 = document.getElementById('quiz-2');
  const select = '2問目：' + quiz_2.answer.value + 'を選択しました';
  if (quiz_2.answer.value == 'a') {
    score = score + 1;
  }
}
function answerQuiz3() {
  const quiz_3 = document.getElementById('quiz-3');
  const select = '3問目：' + quiz_3.answer.value + 'を選択しました';
  if (quiz_3.answer.value == 'a') {
    score = score + 2;
  }
}
function answerQuiz4() {
  const quiz_4 = document.getElementById('quiz-4');
  const select = '4問目：' + quiz_4.answer.value + 'を選択しました';
  if (quiz_4.answer.value == 'a') {
    score = score + 3;
  }
}
function answerQuiz5() {
  const quiz_5 = document.getElementById('quiz-5');
  const select = '5問目：' + quiz_5.answer.value + 'を選択しました';
  if (quiz_5.answer.value == 'a') {
    score = score + 2;
  }
}
function answerQuiz6() {
  const quiz_6 = document.getElementById('quiz-6');
  const select = '6問目：' + quiz_6.answer.value + 'を選択しました';
  if (quiz_6.answer.value == 'a') {
    score = score + 1;
  }
}
function answerQuiz7() {
  const quiz_7 = document.getElementById('quiz-7');
  const select = '7問目：' + quiz_7.answer.value + 'を選択しました';
  if (quiz_7.answer.value == 'a') {
    score = score + 3;
  }
}
function answerQuiz8() {
  const quiz_8 = document.getElementById('quiz-8');
  const select = '8問目：' + quiz_8.answer.value + 'を選択しました';
  if (quiz_8.answer.value == 'a') {
    score = score + 1;
  }
}
