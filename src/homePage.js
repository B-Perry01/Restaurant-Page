import { createHomeCard } from "./pageLoader";

function homePage() {
    const content = document.getElementById("content");
    
    //restaurant welcome div
    const [infoContainer, restInfoSign, restInfoTxt] = createHomeCard(document);
    restInfoTxt.textContent = "This pastry shop is the best shop around for all penguins, even you picky King penguins! From IceRolls to FrostedLattes there's something for every type of beak! Come now!";
    restInfoSign.textContent = "- Pingu";
    restInfoTxt.classList.remove("text");
    infoContainer.appendChild(restInfoTxt);
    infoContainer.appendChild(restInfoSign);
    
    //time information div
    const [timesContainer, timesTitle, timesTxt] = createHomeCard(document);
    timesTxt.setAttribute("id", "open-times");
    timesTitle.textContent = "Hours";
    timesTxt.textContent = "Sunday: 8am - 8pm"
    + "\nMonday: 6am - 6pm" + "\nTuesday: 6am - 6pm" + "\nWednesday: 6am - 6pm"
    + "\nThursday: 6am - 10pm" + "\nFriday: 6am - 10pm"+ "\nSaturday: 8am - 10pm"
    + "\nSunday: 10am - 4pm";
    timesTxt.innerHTML = timesTxt.innerHTML.replaceAll("\n", "<br>");//safe from XSS injection    
    timesContainer.appendChild(timesTitle);
    timesContainer.appendChild(timesTxt);

    //location information div
    const [locationContainer, locationTitle, locationTxt] = createHomeCard(document);
    locationTitle.textContent = "Location";
    locationTxt.textContent = "123";
    locationContainer.appendChild(locationTitle);
    locationContainer.appendChild(locationTxt);


    content.appendChild(infoContainer);
    content.appendChild(timesContainer);
    content.appendChild(locationContainer);
}

export {homePage as default};