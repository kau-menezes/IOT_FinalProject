import { darkMode } from "../../../scripts/darkMode.js";
import { changePermission, getClock, loadData } from "./functions.js";

window.changePermission = changePermission

setInterval(() => {
    loadData();
}, 2000);


document.getElementById("btn").addEventListener("click", darkMode);