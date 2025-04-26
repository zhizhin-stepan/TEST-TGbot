const questionList = document.querySelectorAll('.question-element');


questionList.forEach((questionElement) => {
    questionText = questionElement.querySelector('.question-text');

    questionText.addEventListener('click', displaySwitch = () => {
        const questionAnswer = questionElement.querySelector('.question-answer')
    
        questionAnswer.classList.toggle("hidden");
    })
});