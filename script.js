let yesSize = 20;
let noSize = 20;
let noTexts = ["Are you sure?", "Really sure?", "Oh cmon now", "Last chance!", "Too late!"];
let noClickCount = 0;

function showCelebration() {
    // Hide the question, GIF, and buttons
    document.getElementById("questionContainer").style.display = "none";

    let celebrationContainer = document.getElementById("celebrationContainer");
    celebrationContainer.innerHTML = "";

    // Create a message
    let message = document.createElement("h1");
    message.innerText = "HEHEHE I knew you were gonna say yes muahhh ❤️🥰";
    message.style.color = "red";

    // Create an image element for the celebration GIF
    let gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDBxdWl6amJodjNnaHg3NXJ4bWd6YW9zaTB3eTA1eHl6b2VkaTN3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rrasLFSTyi4Th1e8Xo/giphy.gif"; // Change this to your preferred GIF
    gif.alt = "Happy GIF";
    gif.style.width = "700px";

    // Append elements to the container
    celebrationContainer.appendChild(message);
    celebrationContainer.appendChild(gif);

    startConfetti(); // Start the confetti animation 🎊
}

function resizeAndChangeText() {
    if (noClickCount < noTexts.length - 1) {
        document.getElementById("noBtn").innerText = noTexts[noClickCount];
        noClickCount++;
    } else {
        document.getElementById("noBtn").style.display = "none"; // Hide button
    }

    yesSize += 10;
    noSize -= 5;

    document.getElementById("yesBtn").style.fontSize = yesSize + "px";
    document.getElementById("yesBtn").style.padding = (yesSize / 2) + "px";

    if (noSize > 0) {
        document.getElementById("noBtn").style.fontSize = noSize + "px";
        document.getElementById("noBtn").style.padding = (noSize / 2) + "px";
    }
}

// 🎊 Confetti Effect 🎊
function startConfetti() {
    let canvas = document.getElementById("confettiCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];
    let confettiCount = 300;

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 5 + 5,
            speed: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((piece) => {
            ctx.beginPath();
            ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            ctx.fillStyle = piece.color;
            ctx.fill();
            piece.y += piece.speed;
            if (piece.y > canvas.height) piece.y = 0;
        });
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
