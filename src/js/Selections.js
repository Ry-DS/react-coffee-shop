import Coffee from "./Coffee";
import React from "react";
import PRICES from "./Prices";

function Selections(props) {
    let entries = [];
    let order = props.state.order;

    let keys = Object.keys(order);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        entries.push(<h4 className="selector-text"
                         key={i}>{order[key] !== undefined ? PRICES[key].name + ": " + order[key].name : ""}</h4>);
    }
    return (<div>
        <div className="selections-text">
            {entries}
        </div>
            <Coffee state={props.state}/>
    </div>);
}

export default Selections;