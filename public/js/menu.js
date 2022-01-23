let prevMenu = document.getElementById("prevMenu");
let nextMenu = document.getElementById("nextMenu");

// var sliderList = document.querySelector(".sliderM");
var sliderListPcosM = document.querySelector(".sliderPcosM");
var countP = 1;
function prevPcosMSlide() {
  if (countP > 1) {
    countP = countP - 2;
    sliderListPcosM.style.left = "-" + countP * 300 + "px";

    countP++;
  }
}

function nextPcosMSlide() {
  if (countP < 4) {
    sliderListPcosM.style.left = "-" + countP * 300 + "px";
    countP++;
  }
}

prevMenu.addEventListener("click", prevPcosMSlide);
nextMenu.addEventListener("click", nextPcosMSlide);

let hair = document.getElementById("hair");
let skin = document.getElementById("skin");
let pcos = document.getElementById("pcos");
let weight = document.getElementById("weight");
let feminineCare = document.getElementById("feminineCare");

let b1 = document.getElementById("mBtn1");
let b2 = document.getElementById("mBtn2");
let b3 = document.getElementById("mBtn3");
let b4 = document.getElementById("mBtn4");
let b5 = document.getElementById("mBtn5");

let down1 = document.querySelector(".down1");
let down2 = document.querySelector(".down2");
let down3 = document.querySelector(".down3");
let down4 = document.querySelector(".down4");
let down5 = document.querySelector(".down5");

firstShow();

function firstShow() {
  hair.style.display = "block";
  skin.style.display = "none";
  pcos.style.display = "none";
  weight.style.display = "none";
  feminineCare.style.display = "none";
  b1.style.backgroundColor = "rgb(103, 86, 128)";
  b1.style.color = "white";
  b2.style.backgroundColor = "rgb(232, 244, 255)";
  b2.style.color = "rgb(25, 100, 171)";
  b3.style.backgroundColor = "rgba(45, 142, 123, 0.1)";
  b3.style.color = "rgb(0, 112, 97)";
  b4.style.backgroundColor = "rgba(232, 102, 105, 0.1)";
  b4.style.color = "rgb(232, 102, 105)";
  b5.style.backgroundColor = "rgba(94, 146, 189, 0.1)";
  b5.style.color = "rgb(94, 147, 189)";
  down1.style.color = "rgb(103, 86, 128)";
  down2.style.color = "white";
  down3.style.color = "white";
  down4.style.color = "white";
  down5.style.color = "white";
}

function skinFun() {
  skin.style.display = "block";
  hair.style.display = "none";
  pcos.style.display = "none";
  weight.style.display = "none";
  feminineCare.style.display = "none";
  b1.style.backgroundColor = "rgba(103, 86, 128, 0.1)";
  b1.style.color = "rgb(102, 80, 154)";
  b2.style.backgroundColor = "rgb(25, 100, 171)";
  b2.style.color = "white";
  b3.style.backgroundColor = "rgba(45, 142, 123, 0.1)";
  b3.style.color = "rgb(0, 112, 97)";
  b4.style.backgroundColor = "rgba(232, 102, 105, 0.1)";
  b4.style.color = "rgb(232, 102, 105)";
  b5.style.backgroundColor = "rgba(94, 146, 189, 0.1)";
  b5.style.color = "rgb(94, 147, 189)";
  down1.style.color = "white";
  down2.style.color = "rgb(25, 100, 171)";
  down3.style.color = "white";
  down4.style.color = "white";
  down5.style.color = "white";
}

function nutritionFun() {
  weight.style.display = "block";
  hair.style.display = "none";
  pcos.style.display = "none";
  skin.style.display = "none";
  feminineCare.style.display = "none";
  b1.style.backgroundColor = "rgba(103, 86, 128, 0.1)";
  b1.style.color = "rgb(102, 80, 154)";
  b2.style.backgroundColor = "rgb(232, 244, 255)";
  b2.style.color = "rgb(25, 100, 171)";
  b3.style.backgroundColor = "rgb(45, 142, 123)";
  b3.style.color = "white";
  b4.style.backgroundColor = "rgba(232, 102, 105, 0.1)";
  b4.style.color = "rgb(232, 102, 105)";
  b5.style.backgroundColor = "rgba(94, 146, 189, 0.1)";
  b5.style.color = "rgb(94, 147, 189)";
  down1.style.color = "white";
  down2.style.color = "white";
  down3.style.color = "rgb(45, 142, 123)";
  down4.style.color = "white";
  down5.style.color = "white";
}

function pcosFun() {
  pcos.style.display = "block";
  hair.style.display = "none";
  weight.style.display = "none";
  skin.style.display = "none";
  feminineCare.style.display = "none";
  b1.style.backgroundColor = "rgba(103, 86, 128, 0.1)";
  b1.style.color = "rgb(102, 80, 154)";
  b2.style.backgroundColor = "rgb(232, 244, 255)";
  b2.style.color = "rgb(25, 100, 171)";
  b3.style.backgroundColor = "rgba(45, 142, 123, 0.1)";
  b3.style.color = "rgb(0, 112, 97)";
  b4.style.backgroundColor = "rgb(232, 102, 105)";
  b4.style.color = "white";
  b5.style.backgroundColor = "rgba(94, 146, 189, 0.1)";
  b5.style.color = "rgb(94, 147, 189)";
  down1.style.color = "white";
  down2.style.color = "white";
  down3.style.color = "white";
  down4.style.color = "rgb(232, 102, 105)";
  down5.style.color = "white";
}

function feminineCareFun() {
  feminineCare.style.display = "block";
  hair.style.display = "none";
  pcos.style.display = "none";
  skin.style.display = "none";
  weight.style.display = "none";
  b1.style.backgroundColor = "rgba(103, 86, 128, 0.1)";
  b1.style.color = "rgb(102, 80, 154)";
  b2.style.backgroundColor = "rgb(232, 244, 255)";
  b2.style.color = "rgb(25, 100, 171)";
  b3.style.backgroundColor = "rgba(45, 142, 123, 0.1)";
  b3.style.color = "rgb(0, 112, 97)";
  b4.style.backgroundColor = "rgba(232, 102, 105, 0.1)";
  b4.style.color = "rgb(232, 102, 105)";
  b5.style.backgroundColor = "rgb(94, 147, 189)";
  b5.style.color = "white";
  down1.style.color = "white";
  down2.style.color = "white";
  down3.style.color = "white";
  down4.style.color = "white";
  down5.style.color = "rgb(94, 147, 189)";
}
