let themeSwitch = document.querySelector("#theme-switch-toggle");

themeSwitch.addEventListener("change", changeTheme);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

// function changeTheme() {
//   if (themeSwitch.checked) {
//     document.body.classList.add("dark-theme");
//   } else {
//     document.body.classList.remove("dark-theme");
//   }
// }
function changeTheme() {
  if (themeSwitch.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
let darkThemeOn = localStorage.getItem("theme");
if (darkThemeOn === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeSwitch.checked = true;
}
// console.log(themeSwitch.checked);
// console.log(darkThemeOn);
// console.log(Theme.DARK);
