// For The clicking button one
document.querySelector(".btn").addEventListener("click", (evt) => {
  evt.target.classList.add("loading");

  setTimeout(() => {
    evt.target.classList.remove("loading");
  }, 3000);
});

// For Button Btn
const btn = document.querySelector(".btn");
if (btn) {
  btn.addEventListener("click", function () {
    this.classList.add("loading");
    setTimeout(() => {
      this.classList.remove("loading");
    }, 3000);
  });
}

// Lottie Animation1
lottie.loadAnimation({
  container: document.getElementById("lottie1"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./documents/Runing_men.json",
});

// Lottie Animation3
lottie.loadAnimation({
  container: document.getElementById("lottie3"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./documents/zzfinal.json",
});
