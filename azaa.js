function checkAnswer() {
    const result = document.getElementById('result');
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        result.textContent = "Silakan pilih jawaban terlebih dahulu!";
        result.style.color = "red";
        return;
    }

    const correctAnswer = "C"; // Jawaban yang benar

    if (selectedAnswer.value === correctAnswer) {
        result.textContent = "yey..intannya sayang huhuy..!";
        result.style.color = "green";
    } else {
        result.textContent = "gk mau² harus benar eummp!";
        result.style.color = "red";
    }
}
