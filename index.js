// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10);
    if (right >= 0 && right <= 350) {
        dodger.style.left = `${right + 10}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        console.log(event, dodger.style.cssText);
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        console.log(event, dodger.style.cssText);
        moveDodgerRight();
    }
});