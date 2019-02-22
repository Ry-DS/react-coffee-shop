import Coffee from "./Coffee";
import React from "react";
import PRICES from "./Prices";

function Selections(props) {
    let entries = [];
    let order = props.state.order;

    let keys = Object.keys(order);
    let finalPrice = 0;
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        entries.push(<h4 className="selector-text"
                         key={i}>{order[key] !== undefined ? PRICES[key].name + ": " + order[key].name : ""}</h4>)
        finalPrice += order[key].price;
    }
    return (<div>
        <Coffee state={props.state}/>
        <div className="selections-text">
            {entries}
        </div>
        <div className="selector-text">{"Final Price: $" + finalPrice.toFixed(2)}</div>


    </div>);
}

export default Selections;