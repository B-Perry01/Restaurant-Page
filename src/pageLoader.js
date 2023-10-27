//module for helper functions
function createHomeCard(document) {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const txt = document.createElement("p");

    div.classList.add("card");
    title.classList.add("title");
    txt.classList.add("text");

    return [div, title, txt]
}

export {createHomeCard}