const levels = [
  {
    question: "Level 1: What is the strong combination of letters, numbers & symbols used to protect accounts?",
    answer: "password"
  },
  {
    question: "Level 2: A fraudulent attempt to obtain sensitive information is called ___?",
    answer: "phishing"
  },
  {
    question: "Level 3: Keeping your data unchanged and accurate means maintaining data ___?",
    answer: "integrity"
  },
  {
    question: "Level 4: What should you enable to add an extra layer of security on your accounts?",
    answer: "2fa"
  },
  {
    question: "Level 5: What practice scrambles data so only authorized people can read it?",
    answer: "encryption"
  }
];

const levelsContainer = document.getElementById('levels-container');

levels.forEach((level, index) => {
  const levelDiv = document.createElement('div');
  levelDiv.classList.add('level');
  if (index === 0) levelDiv.classList.add('active');

  levelDiv.innerHTML = `
    <h3>${level.question}</h3>
    <input type="text" placeholder="Your answer..."/>
    <button>Submit</button>
    <p class="feedback"></p>
  `;

  const input = levelDiv.querySelector('input');
  const button = levelDiv.querySelector('button');
  const feedback = levelDiv.querySelector('.feedback');

  button.addEventListener('click', () => {
    const userAnswer = input.value.trim().toLowerCase();
    if (userAnswer === level.answer) {
      feedback.textContent = "✅ Correct!";
      feedback.className = "feedback correct";
      if (index + 1 < levels.length) {
        levelsContainer.children[index + 1].classList.add('active');
      } else {
        feedback.textContent += " 🎉 You've unlocked the treasure of privacy knowledge! Protect your data!";

      }
    } else {
      feedback.textContent = "❌ Wrong! Try again.";
      feedback.className = "feedback wrong";
    }
  });

  levelsContainer.appendChild(levelDiv);
});
