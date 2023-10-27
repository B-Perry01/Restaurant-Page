import Sandwich from "./logo.png";

if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode!');
  }

const content = document.getElementById("content");

const logo = new Image();
logo.src = Sandwich;
content.appendChild(logo);
