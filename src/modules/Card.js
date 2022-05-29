import React from "./ComponentBase.js";

function Card({ id, src, alt, title, description, ...rest }) {
    React.call(this, rest);

    this.render = render;

    function render() {
        const card = this.createElement("div", rest);

        if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.alt = alt;
            card.appendChild(img);
        }
        const section = document.createElement("div");
        if (title) {
            const h4Element = document.createElement("h4");
            const bTag = document.createElement("b");
            const mTitle = document.createTextNode(title);
            bTag.appendChild(mTitle);
            h4Element.appendChild(bTag);

            section.appendChild(h4Element);
        }

        if (description) {
            const pElement = document.createElement("p");
            pElement.appendChild(document.createTextNode(description));

            section.appendChild(pElement);
        }

        if (section.hasChildNodes()) {
            card.appendChild(section);
        }

        card.addEventListener("click", onClick);
        return card;
    }

    function onClick(e) {
        rest.onClick && rest.onClick();
    }
}

export default Card;

Card.prototype.render = function () {
    return this.render();
};
