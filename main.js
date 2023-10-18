// JS for Bio Practice Quiz

// eventListener
document.getElementById('button').addEventListener('click', checkAnswers);

// Element References
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let answer1Status = document.getElementById('answer1status');
let answer2Status = document.getElementById('answer2status');
let answer3Status = document.getElementById('answer3status');
let answer4Status = document.getElementById('answer4status');
let feedback = document.getElementById('feedback');

function checkAnswers() {
  let score = 0;
  if (+answer1.value === 36) {
    answer1Status.innerHTML = 'Correct';
    answer1Status.style.color = 'green';
    answer1.style.borderColor = 'green';
    score++;
  } else {
    answer1Status.innerHTML = 'Incorrect';
    answer1Status.style.color = 'red';
    answer1.style.borderColor = 'red';
  }
  if (answer2.value === 'matrix') {
    answer2Status.innerHTML = 'Correct';
    answer2Status.style.color = 'green';
    answer2.style.borderColor = 'green';
    score++;
  } else {
    answer2Status.innerHTML = 'Incorrect';
    answer2Status.style.color = 'red';
    answer2.style.borderColor = 'red';
  }

  if (answer3.value === 'oxaloacetate') {
    answer3Status.innerHTML = 'Correct';
    answer3Status.style.color = 'green';
    answer3.style.borderColor = 'green';
    score++;
  } else {
    answer3Status.innerHTML = 'Incorrect';
    answer3Status.style.color = 'red';
    answer3.style.borderColor = 'red';
  }
  if (
    answer4.value === 'glycolysis' ||
    answer4.value === 'link reaction' ||
    answer4.value === 'pyruvate oxidation' ||
    answer4.value === 'krebs cycle' ||
    answer4.value === 'etc' ||
    answer4.value === 'chemiosmosis'
  ) {
    answer4Status.innerHTML = 'Correct';
    answer4Status.style.color = 'green';
    answer4.style.borderColor = 'green';
    score++;
  } else {
    answer4Status.innerHTML = 'Incorrect';
    answer4Status.style.color = 'red';
    answer4.style.borderColor = 'red';
  }
  if (score < 2) {
    feedback.innerHTML = 'You may need to study on this topic more!';
  } else if (score === 3) {
    feedback.innerHTML = 'Not bad!';
  } else if (score === 4) {
    feedback.innerHTML = 'Well done!';
  }
  document.getElementById('score').innerHTML = score * 25;
}
