import restMenu from "./menu.json";

function homePage() {
    const menu = document.createElement("div");
    menu.classList.add("menu")
    menu.innerHTML = "<h1 class='home-title'>BrewTech Café</h3>"

    restMenu.menu.map(getMenuItem)

    function getMenuItem(item) {
        const itemContainer = document.createElement("div")
        itemContainer.classList.add("item-container")

        const itemName = document.createElement("h3");
        itemName.textContent = item.item;
        const itemCategory = document.createElement("h4")
        itemCategory.textContent = "Category: "+ item.category
        const description = document.createElement("p");
        description.textContent = item.description;
        const price = document.createElement("h5")
        price.textContent = "price: " + item.price
        itemContainer.append(itemName, itemCategory,description, price);
        menu.appendChild(itemContainer);
    }


    return menu
}

export {homePage}

