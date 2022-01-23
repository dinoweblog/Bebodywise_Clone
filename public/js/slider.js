// slider js

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let prevPcos = document.getElementById("prevPcos");
let nextPcos = document.getElementById("nextPcos");
let prevCare = document.getElementById("prevCare");
let nextCare = document.getElementById("nextCare");

let prevSkin = document.getElementById("prevSkin");
let nextSkin = document.getElementById("nextSkin");
let prevNut = document.getElementById("prevNut");
let nextNut = document.getElementById("nextNut");

let prevBlog = document.getElementById("prevBlog");
let nextBlog = document.getElementById("nextBlog");
let prevReting = document.getElementById("prevReting");
let nextReting = document.getElementById("nextReting");

let prevMeet = document.getElementById("prevMeet");
let nextMeet = document.getElementById("nextMeet");

let prevResult = document.getElementById("prevResult");
let nextResult = document.getElementById("nextResult");

var sliderList = document.querySelector(".slider");
var sliderListPcos = document.querySelector(".sliderPcos");
var sliderListCare = document.querySelector(".sliderCare");
let sliderMeet = document.querySelector(".sliderMeet");
var sliderListSkin = document.querySelector(".sliderSkin");
let sliderListNut = document.querySelector(".sliderNut");

var sliderListBlog = document.querySelector(".blog");
let sliderListReting = document.getElementById("retings");

let sliderListResult = document.querySelector(".resultSlider");

// Hair Slider function
var count = 1;

function prevSlide() {
  console.log("hiiii");
  if (count > 1) {
    count = count - 2;
    sliderList.style.left = "-" + count * 300 + "px";

    count++;
  }
}

function nextSlide() {
  if (count < 10) {
    sliderList.style.left = "-" + count * 300 + "px"; //   left : -300px
    count++;
  }
}

// Skin slider
var countS = 1;

function prevSkinSlide() {
  if (countS > 1) {
    countS = countS - 2;
    sliderListSkin.style.left = "-" + countS * 300 + "px";

    countS++;
  }
}

function nextSkinSlide() {
  if (countS < 4) {
    sliderListSkin.style.left = "-" + countS * 300 + "px";
    countS++;
  }
}

// Nutrition slider
var countN = 1;

function prevNutSlide() {
  if (countN > 1) {
    countN = countN - 2;
    sliderListNut.style.left = "-" + countN * 300 + "px";

    countN++;
  }
}

function nextNutSlide() {
  if (countN < 4) {
    sliderListNut.style.left = "-" + countN * 300 + "px";
    countN++;
  }
}

// Pcos slider
var countP = 1;

function prevPcosSlide() {
  if (countP > 1) {
    countP = countP - 2;
    sliderListPcos.style.left = "-" + countP * 300 + "px";

    countP++;
  }
}

function nextPcosSlide() {
  if (countP < 4) {
    console.log("ffff");
    sliderListPcos.style.left = "-" + countP * 300 + "px";
    countP++;
  }
}

// Feminine Care slider
var countC = 1;

function prevCareSlide() {
  if (countC > 1) {
    countC = countC - 2;
    sliderListCare.style.left = "-" + countC * 300 + "px";

    countC++;
  }
}

function nextCareSlide() {
  if (countC < 4) {
    sliderListCare.style.left = "-" + countC * 300 + "px";
    countC++;
  }
}

// Blog slider
var countBl = 1;

function prevBlogSlide() {
  if (countBl > 1) {
    countBl = countBl - 2;
    sliderListBlog.style.left = "-" + countBl * 455 + "px";

    countBl++;
  }
}

function nextBlogSlide() {
  if (countBl < 4) {
    sliderListBlog.style.left = "-" + countBl * 455 + "px";
    countBl++;
  }
}

// Reting slider
var countRe = 1;

function prevRetingSlide() {
  if (countRe > 1) {
    countRe = countRe - 2;
    sliderListReting.style.left = "-" + countRe * 480 + "px";

    countRe++;
  }
}

function nextRetingSlide() {
  if (countRe < 4) {
    sliderListReting.style.left = "-" + countRe * 480 + "px";
    countRe++;
  }
}

// Result Slider
var countRes = 1;

function prevResultSlide() {
  if (countRes > 1) {
    countRes = countRes - 2;
    sliderListResult.style.left = "-" + countRes * 300 + "px";

    countRes++;
  }
}

function nextResultSlide() {
  if (countRes < 10) {
    sliderListResult.style.left = "-" + countRes * 300 + "px"; //   left : -300px
    countRes++;
  }
}

// recent slider
// var countRe = 1;
// function prevRecentSlide() {
//   if (countRe > 1) {
//     countRe = countRe - 2;
//     sliderRecent.style.left = "-" + countRe * 300 + "px";

//     countRe++;
//   }
// }

// function nextRecentSlide() {
//   if (countRe < 4) {
//     sliderRecent.style.left = "-" + countRe * 300 + "px";
//     countRe++;
//   }
// }

// // Meet  slider

// var countM = 1;
// function nextMeetSlide() {
//   if (countM < 3) {
//     sliderMeet.style.left = "-" + countM * 450 + "px";
//     countM++;
//   }
// }
// function prevMeetSlide() {
//   if (countM > 1) {
//     countM = countM - 2;
//     sliderMeet.style.left = "-" + countM * 450 + "px";

//     countM++;
//   }
// }

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
prevPcos.addEventListener("click", prevPcosSlide);
nextPcos.addEventListener("click", nextPcosSlide);
prevCare.addEventListener("click", prevCareSlide);
nextCare.addEventListener("click", nextCareSlide);
// prevRecent.addEventListener("click", prevRecentSlide);
// nextRecent.addEventListener("click", nextRecentSlide);
// prevMeet.addEventListener("click", prevMeetSlide);
// nextMeet.addEventListener("click", nextMeetSlide);

prevSkin.addEventListener("click", prevSkinSlide);
nextSkin.addEventListener("click", nextSkinSlide);
prevNut.addEventListener("click", prevNutSlide);
nextNut.addEventListener("click", nextNutSlide);

prevBlog.addEventListener("click", prevBlogSlide);
nextBlog.addEventListener("click", nextBlogSlide);
prevReting.addEventListener("click", prevRetingSlide);
nextReting.addEventListener("click", nextRetingSlide);
prevResult.addEventListener("click", prevResultSlide);
nextResult.addEventListener("click", nextResultSlide);

prevSlide();
nextSlide();
nextPcosSlide();
nextCareSlide();
prevPcosSlide();
prevCareSlide();
