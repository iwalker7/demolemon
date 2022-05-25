import { homeData } from "../common/homeData.js";
import Button from "../../modules/Button.js";
import Card from "../../modules/Card.js";
import { Colors } from "../common/colors.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryType = urlParams.get("category");

const main = document.getElementById("homeMain");

const categories = document.createElement("ul");
categories.className = "category";

const itemsContainer = document.createElement("div");
itemsContainer.className = "grid-container";


function renderItems(items = []) {
    var child = itemsContainer.lastElementChild;
    while (child) {
        itemsContainer.removeChild(child);
        child = itemsContainer.lastElementChild;
    }
    items.map((e, i) => {
        const card = new Card({
            id: i,
            class: "card",
            src: e.imgSrc,
            alt: "contentImage" + (i + 1),
            title: e.section.title,
            description: e.section.description,
        });

        itemsContainer.appendChild(card.render());
    });
}
function onCategory(index) {
    const buttonList = document.querySelectorAll("button");
    buttonList.forEach((e, i) => {
        i === index
            ? (e.style.backgroundColor = Colors.primary)
            : ((e.style.backgroundColor = Colors.inActive),
              (e.style.color = Colors.black));
    });

    renderItems(homeData[index].items);
}

function createListItem(item, index) {
    const label = item.title;

    const listItem = document.createElement("li");

    const catButton = new Button({
        id: index,
        text: label,
        class: "catButton",
        onPress: function onPress() {
            onCategory(index);
        },
    });

    listItem.appendChild(catButton.render());
    return listItem;
}

function createCategories() {
    homeData.map((e, i) => {
        categories.appendChild(createListItem(e, i));
    });

    main.appendChild(categories);
    main.appendChild(itemsContainer);

    const index = homeData.findIndex((e) => e.category === categoryType);

    onCategory(index > -1 ? index : 0);
}

createCategories();
