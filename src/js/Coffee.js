import React from 'react';
import PRICES from "./Prices";

function Coffee(props) {
    console.log(props);
    const type = props.state.order.type;
    const sugar = props.state.order.sugar;
    const sugars = [];
    const twoActive = sugar === PRICES.sugar.two;
    const oneActive = twoActive || sugar === PRICES.sugar.one;
    if (oneActive)
        sugars.push(<div className="sugar1" key={0}/>);
    if (twoActive)
        sugars.push(<div className="sugar2" key={1}/>);
    console.log(type);
    return (
        <div className="saucer">
            <div className="inner"/>
            <div className="cup">
                <div className={type === undefined ? "empty" : "coffee " + type.code}>
                    <div
                        className={type !== undefined && type.name.includes("Cappuccino") ? "marshmallow" : ""}/>
                    {sugars}
                    <div className="shine"/>
                    <div className="shine left"/>
                    <div className="foam"/>
                </div>
                <div className="holder"/>
            </div>
        </div>);
}

export default Coffee;
