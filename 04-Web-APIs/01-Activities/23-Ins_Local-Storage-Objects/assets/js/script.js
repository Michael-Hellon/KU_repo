const student = document.getElementById('student-names');
const grade = document.getElementById('grades');
const comment = document.getElementById('msg');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  const studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(), // .trim  removes the extra white space from the comment

  };

  localStorage.setItem('studentGrade', JSON.stringify(studentGrade)); // takes js object and converts to a JSON string
  renderMessage();
});

function renderMessage() {
  const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
  if (lastGrade !== null) {
    document.querySelector('.message').textContent =
      lastGrade.student + ` received a/an ${lastGrade.grade}`;
  }
}
