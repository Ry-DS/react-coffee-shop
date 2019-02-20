import React from 'react';

function Coffee(props) {
    const type = props.state.order.type;
    console.log(type);
    return (
        <div className="saucer">
            <div className="inner"/>
            <div className="cup">
                <div className={type === undefined ? "empty" : "coffee " + type.code}>
                    <div
                        className={type !== undefined && type.name.includes("Short Black") ? "marshmallow" : ""}/>
                    <div className="shine"/>
                    <div className="shine left"/>
                    <div className="foam"></div>
                </div>
                <div className="holder"></div>
            </div>
        </div>);
}

export default Coffee;
