// Modo Claro/Escuro
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Aplica tema salvo
if (localStorage.getItem("theme") === "dark") html.classList.add("dark");

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const theme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
});

// Atualiza ícone no carregamento
themeToggle.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
