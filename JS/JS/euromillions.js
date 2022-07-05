function createBoule(number) {
  const boule = document
    .querySelector("#template .number-template")
    .cloneNode(true);
  boule.querySelector(".number").innerText = number;
  document.querySelector("#number-container").append(boule);
}
// createBoule(44)
// createBoule(87)
// createBoule(98)

function createBoule(number) {
  const boule = document
    .querySelector("#template .star-template")
    .cloneNode(true);
  boule.querySelector(".stzr").innerText = number;
  document.querySelector("#star-container").append(boule);
}
// createBoule(44)
// createBoule(87)
// createBoule(98)

function generateInteger(max){
    return Math.floor(Math.random() * max);
}

function start() {
  //init tab boules
  let numbers = [];
  for (let i = 0; i < 50; i++) {
    numbers.push(i);
  }
  let stars = [];
  for (let i = 0; i < 13; i++) {
    stars.push(i);
  }
  //init compteur
  let boulesCpt = 0;
  let starsCpt = 0;
  let boulesIntervalHandle = setInterval(function () {
    let index = generateInteger(numbers.length);
    let boule = numbers.splice(index, 1);
    createBoule(boule);
    boulesCpt++;
    if (boulesCpt >= 5) {
      clearInterval(boulesIntervalHandle);
      let starsIntervalHandle = setInterval(function () {
        let index2 = generateInteger(stars.length);
        let star = stars.splice(index2, 1);
        createBoule(boule);
        starsCpt++;
        if (starsCpt >= 5) {
          clearInterval(starsIntervalHandle);
        }
      }, 1000);
    }
  }, 1000);
}

start();
