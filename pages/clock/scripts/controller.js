import { darkMode } from "../../../scripts/darkMode.js";
import { loadData, setClock } from "./functions.js";


setInterval(() => {
    loadData();
}, 2000);

window.setClock = setClock

document.getElementById("btn").addEventListener("click", darkMode);
