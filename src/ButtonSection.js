import React, {Component} from 'react';
import {Button} from "primereact/button";

class ButtonSection extends Component {
    constructor(props) {
        super(props);
        this.data = props.value;
        this.heading = "Choose a " + this.data.name;
        this.onClick = props.onClick;


    }

    render() {
        let keys = Object.keys(this.data);
        let rows = [];
        for (let i = 1; i < keys.length; i++) {
            let entry;
            if (isOdd(i)) {
                entry = [];
                rows.push(entry);

            } else entry = rows[rows.length - 1];
            let buttonData = this.data[keys[i]];
            entry.push(<div key={i} className={"col-sm-6 button-padding-" + (!isOdd(i) ? "right" : "left")}><Button
                    label={buttonData.name}
                    onClick={() => this.onClick(buttonData.code)}
                    className={(this.props.selected === buttonData ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                </div>
            );
            rows[rows.length - 1] = entry;


        }
        let htmlRows = [];
        for (let i = 0; i < rows.length; i++) {
            htmlRows.push(React.createElement('div', {className: 'row row-padding', key: i}, rows[i]));
        }


        return (
            <div className="container">
                <h1 className="selector-text text-center" style={{color: 'white'}}>{this.heading}</h1>
                {htmlRows}

            </div>
        );
    }

}

function isOdd(num) {
    return num % 2;
}

export default ButtonSection;