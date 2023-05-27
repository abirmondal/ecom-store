const storedTheme = localStorage.getItem("theme");

const getPreferredTheme = () => {
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const setTheme = function (theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  if (theme === "dark") {
    document.querySelector("#theme-icon").classList.add("fa-moon");
  } else {
    document.querySelector("#theme-icon").classList.remove("fa-moon");
  }
};

window.onload = function () {
  setTheme(getPreferredTheme());

  document.querySelector("#theme-icon").addEventListener("click", function () {
    setTheme(document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
  });
};
