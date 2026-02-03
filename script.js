/* TYPING EFFECT */
const text = "Asfan Ali Khan";
let index = 0;
const speed = 150;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing-name").textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, speed);
    }
}

document.getElementById("typing-name").textContent = "";
typingEffect();

/* SCROLL FADE-IN EFFECT */
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(fade => {
        const rect = fade.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fade.classList.add("show");
        }
    });
});
