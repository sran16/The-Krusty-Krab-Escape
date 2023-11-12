const startButton = document.querySelector(".bouton");
const gameName = document.querySelector(".gameName");
const introduction = document.querySelector(".introduction");
const buttonNext = document.querySelector(".buttonNext");
const gameRules = document.querySelector(".gameRules");
const buttonPlay = document.querySelector(".buttonPlay");


// Event listener for the startButton click
startButton.addEventListener("click", (e)=>{
  console.log(e);
  // Update styles for the introduction section
  introduction.classList;
  introduction.style.transition = "opacity 1.5s ease";
  introduction.style.width = "45rem";
  introduction.style.left = "27%";
  introduction.style.top = "14%";
  introduction.style.opacity = "1";
  buttonNext.style.opacity = "1";
  buttonNext.style.left = "45%";
  startButton.style.opacity = "0";
  startButton.style.opacity = "0";
  gameName.style.opacity = "0";
  buttonNext.style.display = "block";
})
// Event listener for the buttonNext click
buttonNext.addEventListener("click", (e)=>{
  // Update styles for the introduction and buttonNext
  introduction.style.opacity = "0";
  buttonNext.style.opacity = "0";
  buttonNext.style.transition = "opacity 0.5s ease";
  gameRules.style.opacity = "1";
  gameRules.style.transition = "opacity 1.5s ease";
  gameRules.style.width = "45rem";
  gameRules.style.display = "inline";
  buttonPlay.style.opacity = "1";
  buttonPlay.style.left = "35%";
})



