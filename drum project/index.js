let buttons = document.querySelectorAll(".drum");


buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let key = button.textContent;
    makeSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch(key) {
    case "w":
      new Audio("sound/1.mp3").play();
      break;

    case "a":
      new Audio("sound/2.mp3").play();
      break;

    case "s":
      new Audio("sound/3.mp3").play();
      break;

    case "d":
      new Audio("sound/4.mp3").play();
      break;

    case "j":
      new Audio("sound/5.mp3").play();
      break;

    case "k":
      new Audio("sound/6.mp3").play();
      break;

    case "l":
      new Audio("sound/7.mp3").play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

