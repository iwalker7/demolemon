class PopUpInfo extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        if (this.hasAttribute("for")) {
            const wrapperId = this.getAttribute("for");

            const wrapper = document.getElementById(wrapperId);

            console.log("wrapperId", wrapperId);

            const info = document.createElement("span");
            info.setAttribute("class", "info");

            // Take attribute content and put it inside the info span
            const text = this.getAttribute("data-text");
            info.textContent = text;
            wrapper.appendChild(info);

            // Create some CSS to apply to the shadow dom
            const style = document.createElement("style");

            style.textContent = `
                .wrapper {
                    position: relative;
                }
                .info {
                    font-size: 0.8rem;
                    width: 200px;
                    display: inline-block;
                    border: 1px solid white;
                    padding: 10px;
                    background: white;
                    border-radius: 10px;
                    opacity: 1;
                    transition: 0.6s all;
                    position: absolute;
                    bottom: 20px;
                    left: 10px;
                    z-index: 3;
                }
                img {
                    width: 1.2rem;
                }
                #${wrapperId}:hover + .info, #${wrapperId}:focus + .info {
                    opacity: 1;
                    background: black;
                }
            `;

            // Attach the created elements to the shadow dom
            shadow.appendChild(style);
            shadow.appendChild(wrapper);
        }
    }
}

// Define the new element
customElements.define("popup-info", PopUpInfo);
