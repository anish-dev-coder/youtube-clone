// menu button toggle
const menuBtn = document.querySelectorAll(".menu-button");
const overlay = document.querySelector(".overlay");
const theme = document.querySelector(".theme-button i");

if (localStorage.getItem("darkmode") === "enable") {
  document.body.classList.add("dark");
  theme.classList.replace("fa-moon", "fa-sun");
} else {
  theme.classList.replace("fa-sun", "fa-moon");
}

menuBtn.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hide");
  });
});

overlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hide");
});

theme.addEventListener("click", () => {
  let isDarkMode = document.body.classList.toggle("dark");

  localStorage.setItem("darkmode", isDarkMode ? "enable" : "disable");

  theme.classList.toggle("fa-sun", isDarkMode);
  theme.classList.toggle("fa-moon", !isDarkMode);
});

if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hide");
}
