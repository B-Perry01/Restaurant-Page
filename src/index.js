import Sandwich from "./logo.png";
import {default as homePage} from "./homePage.js";
import {default as menuPage} from "./menuPage.js";
import {default as contactPage} from "./contactPage.js";
import "./style.css";

if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode!');
  }

//topbar logic
const topBar = document.getElementById("top-bar");
const header = document.createElement("div");
const logo = new Image();
const headerTxt = document.createElement("h1");

header.setAttribute("id", "header")

headerTxt.textContent = "Pingus Perfect Pastries!";
    
logo.src = Sandwich;
logo.style.height = "75px";
logo.style.width = "75px";

header.appendChild(logo);
header.appendChild(headerTxt);
header.appendChild(logo.cloneNode(true));//to insert an element more than once

//button logic to display content
const content = document.getElementById("content")
const btnContainer = document.createElement("div");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const cntctBtn = document.createElement("button");

btnContainer.classList.add("btn-container");
homeBtn.setAttribute("id", "home-btn");
menuBtn.setAttribute("id", "menu-btn");
cntctBtn.setAttribute("id", "cntct-btn");

homeBtn.addEventListener("click", e => {
    content.innerHTML("");
    homePage();
});
menuBtn.addEventListener("click", e => {
    content.innerHTML("");
    menuPage();
})
cntctBtn.addEventListener("click", e => {
    content.innerHTML("");
    contactPage();
})

btnContainer.appendChild(homeBtn);
btnContainer.appendChild(menuBtn);
btnContainer.appendChild(cntctBtn);

topBar.appendChild(header);
topBar.appendChild(btnContainer);