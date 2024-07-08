import { darkMode } from "../../../scripts/darkMode.js";
import { loadData, setClock } from "./functions.js";

loadData();

window.setClock = setClock

document.getElementById("btn").addEventListener("click", darkMode);
