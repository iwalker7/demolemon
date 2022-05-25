import React from "./ComponentBase.js";

function Button({ onPress, ...rest }) {
    React.call(this, rest);

    this.render = render;

    function render() {
        const self = this.createElement("button", rest);
        self.addEventListener("click", onClick);
        return self;
    }

    function onClick(e) {
        onPress && onPress();
    }
}

export default Button;

Button.prototype.render = function () {
    return this.render();
};
