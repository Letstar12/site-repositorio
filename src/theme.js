export function getInitialTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}