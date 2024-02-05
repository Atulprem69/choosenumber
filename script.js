let timer = 60;
let score = 0;
var hitrn;

function increaseScore() {
  score += 2;
  document.querySelector("#scoreval").textContent = score;
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
function makebubble() {
  let clutter = "";

  for (let i = 0; i <= 139; i++) {
    let ap = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${ap}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  let timerint = setInterval(function() {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1> Game Over!`;
    }
  }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(a) {
  var clickednum = Number(a.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makebubble();
    getNewHit();

  }
})
runTimer();
makebubble();
getNewHit();

// JavaScript Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series!
// Master Advanced JavaScript Concepts and Become a JavaScript Ninja
// JavaScript Advance Crash Course: Level Up Your Coding Skills! Accelerate Your Front-End Mastery!
// JavaScript Full Course (2023) - Beginner to Pro - Part 1