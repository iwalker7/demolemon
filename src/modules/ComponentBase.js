function React(props) {
    this.props = props;

    this.createElement = createElement;

    function createElement(type, props) {
        let elem = document.createElement(type);

        for (const key in props) {
            if (Object.hasOwnProperty.call(props, key)) {
                const attr = document.createAttribute(key);
                attr.value = props[key];
                elem.setAttributeNode(attr);
            }
        }

        if (props.text) {
            elem.innerText = props["text"];
        }
        return elem;
    }
}

export default React;
