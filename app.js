const React = require("react");
const ReactDOM = requires("react-dom");

const GroceryList = (
    <ul>
        <li>Bread</li>
        <li>Milk</li>
    </ul>
);


ReactDOM.render(
    GroceryList,
    document.getElementById('app')
);