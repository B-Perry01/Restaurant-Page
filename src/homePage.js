function homePage() {
    const content = document.createElement("div");
    const restaurantText = document.createElement("p");


    restaurantText.textContent = "This pastry shop is the best shop around for all penguins, even you picky King penguins! From IceRolls to FrostedLattes there's something for every type of beak! Come now!";
    
    content.appendChild(restaurantText);
}

export {homePage as default};