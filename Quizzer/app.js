const form = document.querySelector(".fm");
const result = document.querySelector(".res");
const correct_answers = ["A", "C", "A"]

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const user_answers = [form.op.value, form.op1.value, form.op2.value];
    user_answers.forEach((answer, index) => {
        if(answer == correct_answers[index]){
            score += 1
        }
    })

    result.textContent += score 

    result.style.display = "block"
})
