// Efek ketikan teks
const typing = document.querySelector(".typing");
if (typing) {
  const text = "Timotius Avaro Andrelo Putra";
  let index = 0;

  function type() {
    typing.textContent = text.slice(0, index);
    index++;
    if (index <= text.length) {
      setTimeout(type, 100);
    }
  }
  type();
}

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  modeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Animasi muncul saat scroll
const fadeEls = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
