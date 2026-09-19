//your JS code here. If required.
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let audio = new Audio(`sounds/${button.innerText}.mp3`);
        audio.play();
    });
});