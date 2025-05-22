let score = 0;

function checkAnswer(level) {
    let answer = document.getElementById(`answer-${level}`).value.toLowerCase();
    let correctAnswer = "";
    let points = 0;

    if (level === 1) {
        correctAnswer = "chat";
        points = 10;
    } else if (level === 2) {
        correctAnswer = "air";
        points = 20;
    }

    if (answer === correctAnswer) {
        score += points;
        alert("Bonne réponse !");
    } else {
        alert("Mauvaise réponse !");
    }

    document.getElementById("score").innerText = score;
    document.getElementById(`answer-${level}`).value = ""; // Reset answer field
}
