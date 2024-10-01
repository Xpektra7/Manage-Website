const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
})

