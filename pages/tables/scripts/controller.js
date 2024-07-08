import { darkMode } from "../../../scripts/darkMode.js";
import { loadTable, loadData} from "./functions.js";


loadData();

document.getElementById("btn").addEventListener("click", darkMode);
