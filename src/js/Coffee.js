import React from 'react';
import PRICES from "./Prices";

function Coffee(props) {
    console.log(props);
    const type = props.state.order.type;
    const sugar = props.state.order.sugar;
    const size = props.state.order.size;
    const sugars = [];
    const twoActive = sugar === PRICES.sugar.two;
    const oneActive = twoActive || sugar === PRICES.sugar.one;
    if (oneActive)
        sugars.push(<div className="sugar1" key={0}/>);
    if (twoActive)
        sugars.push(<div className="sugar2" key={1}/>);
    const foam = [];
    if (type === PRICES.type.cappuccino || type === PRICES.type.flat_white) {
        foam.push(<div className="foam" key={0}/>);
    }
    console.log(type);
    return (
        <div className={"coffee-" + size.code}>
            <div className="saucer">
                <div className="inner">
                    <div className="cup">
                        <div className={type === undefined ? "empty" : "coffee " + type.code}>
                            <div
                                className={type !== undefined && type.name.includes("Cappuccino") ? "marshmallow" : ""}/>
                            {sugars}
                            <div className="shine"/>
                            <div className="shine left"/>
                            {foam}

                        </div>
                        <div className="holder"/>
                    </div>
                </div>
            </div>
        </div>);
}

export default Coffee;
