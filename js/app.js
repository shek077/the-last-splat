import { createHomeScreen } from "./ui.js";

const app = document.getElementById("app");

function init() {

    app.innerHTML = createHomeScreen();

}

document.addEventListener("DOMContentLoaded", init);
