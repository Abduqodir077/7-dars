
let local = document.querySelector(".local_page");
let span = document.querySelector(".ili");
let btn = document.querySelector(".sssssssss");

btn.addEventListener("click", function () {
    local.style.transform = "translateX(0px)";
});
span.addEventListener("click", function () {
    local.style.transform = "translateX(450px)"
});


// ------------


let adzBtn = document.querySelector("#adz");
let suzBtn = document.querySelector("#suz");
let qtz = document.querySelector("#qtzBox");

adzBtn.addEventListener("click", () => {
  qtz.value = parseInt(qtz.value) + 1;
});

suzBtn.addEventListener("click", () => {
  if (qtz.value <= 0) {
    qtz.value = 0;
  } else {
    qtz.value = parseInt(qtz.value) - 1;
  }
});

let adwBtn = document.querySelector("#adw");
let suwBtn = document.querySelector("#suw");
let qtw = document.querySelector("#qtwBox");

adwBtn.addEventListener("click", () => {
  qtw.value = parseInt(qtw.value) + 1;
});

suwBtn.addEventListener("click", () => {
  if (qtw.value <= 0) {
    qty.value = 0;
  } else {
    qtw.value = parseInt(qtw.value) - 1;
  }
});

// ----------------------------------------

let adtBtn = document.querySelector("#adt");
let sutBtn = document.querySelector("#sut");
let qtt = document.querySelector("#qttBox");

adtBtn.addEventListener("click", () => {
  qtt.value = parseInt(qtt.value) + 1;
});

sutBtn.addEventListener("click", () => {
  if (qtt.value <= 0) {
    qtt.value = 0;
  } else {
    qtt.value = parseInt(qtt.value) - 1;
  }
});

// --------------------------------------

let adqBtn = document.querySelector("#adq");
let suqBtn = document.querySelector("#suq");
let qtq = document.querySelector("#qtqBox");

adqBtn.addEventListener("click", () => {
  qtq.value = parseInt(qtq.value) + 1;
});

suqBtn.addEventListener("click", () => {
  if (qtq.value <= 0) {
    qtq.value = 0;
  } else {
    qtq.value = parseInt(qtq.value) - 1;
  }
});

// =============================


