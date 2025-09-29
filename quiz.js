function checkAnswer() {
  const correctAnswer = `4`;
  const checkedRadio = document.querySelector(`[name="quiz"]:checked`);
  let userAnswer = checkedRadio.value;
  let para = document.getElementById(`feedback`);

  userAnswer === correctAnswer
    ? (para.textContent = `Correct! Well done.`)
    : (para.textContent = `That's incorrect. Try again!`);
}

const submit = document.getElementById(`submit-answer`);

submit.addEventListener(`click`, checkAnswer);
