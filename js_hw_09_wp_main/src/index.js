import "./index.js";
import "./styles.css";
import "./js/theme.js";
import menuData from "./menu.json";
import menuTemplate from "./templates/template.hbs";

let menu = document.querySelector(".js-menu");
// let markup = menuTemplate(menuData);
let markup = menuData.map((obj) => menuTemplate(obj)).join("");
menu.insertAdjacentHTML("beforeend", markup);
// console.log(markup);
