import Sandwich from "./logo.png";

function pageLoad() {
    const content = document.getElementById("content");
    const logo = new Image();
    const Header = document.createElement("h1");
    const restaurantText = document.createElement("p");

    logo.src = Sandwich;
    logo.style.height = "100px";
    logo.style.width = "100px";

    Header.textContent = "Welcome to the Penguin Sandwich Shop!";
    restaurantText.textContent = "This sandwich shop is the best shop around for all penguins, even King penguins! From IceBurgers to FrostedLattes there's something for every type of beak! Come now!";

    content.appendChild(logo);
    content.appendChild(Header);
    content.appendChild(restaurantText);
}

export {pageLoad as default};