import React, {Component} from 'react';
import {Button} from 'primereact/button';
import $ from 'jquery';

import './App.css';
import Coffee from "./Coffee";
import ButtonSection from "./ButtonSection";


class App extends Component {
    constructor(props) {
        super(props);
        this.prices = {//we define all prices here
            type: {
                name: "Type",
                flat_white: {name: "Flat White", code: "flat_white", price: 2.5},
                cappuccino: {name: "Cappuccino", code: "cappuccino", price: 3},
                short_black: {name: "Short Black", code: "short_black", price: 2},
                latte: {name: "Latte", code: "latte", price: 3}
            },
            milk: {
                name: "Milk Type",
                full_cream_milk: {name: "Full Cream Milk", code: "full_cream_milk", price: 0},
                skim_milk: {name: "Skim Milk", code: "skim_milk", price: 0.5},
                soy_milk: {name: "Soy Milk", code: "soy_milk", price: 1}
            },
            size: {
                name: "Size",
                small: {name: "Small", code: "small", price: 0},
                regular: {name: "Regular", code: "regular", price: 0.5},
                large: {name: "Large", code: "large", price: 1}
            },
            sugar: {
                name: "Sugar",
                none: {name: "None", code: "none", price: 0},
                one: {name: "None", code: "one", price: 0.05},
                two: {name: "None", code: "two", price: 0.1}
            }

        };
        this.state = {order: {type: this.prices.type.latte}};//we put a default order so the coffee mug can render properly

        setTimeout(() => {//we do this on a delay since bootstrap might have not loaded by now
            $('#chooserCarousel').carousel({interval: false, keyboard: false});
        }, 50);


    }

    handleButtonClick(type, value) {
        const order = {...this.state.order};
        order[type] = this.prices[type][value];
        this.setState({...this.state, order: order})

    }

    render() {
        const type = this.state.order.type;
        const milk = this.state.order.milk;
        return (
            <div>
                <div className="welcome">
                    <h1>Welcome to Fred's Cafe</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 text-center overview">Selections
                            <div className="selections-text">
                                <h4 className="selector-text">{type !== undefined ? "Type: " + type.name : ""}</h4>
                                <h4 className="selector-text">{milk !== undefined ? "Milk: " + milk.replaceAll("_", " ") : ""}</h4>
                            </div>
                            <div className="coffee-container text-center">
                                <Coffee state={this.state}/>
                            </div>
                        </div>

                        <div className="col-sm-7 offset-sm-2 text-center selector">

                            <div id="chooserCarousel" className="carousel slide">
                                <ol className="carousel-indicators">
                                    <li data-target="#chooserCarousel" data-slide-to="0" className="active"/>
                                    <li data-target="#chooserCarousel" data-slide-to="1"/>
                                    <li data-target="#chooserCarousel" data-slide-to="2"/>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <ButtonSection value={this.prices.type}
                                                       onClick={(value) => this.handleButtonClick('type', value)}
                                                       selected={this.state.order.type}/>

                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <h1 className="selector-text text-center" style={{color: 'white'}}>Choose a
                                                Milk
                                                Type</h1>
                                            <div className="row row-padding">
                                                <div className="col-sm-6 button-padding-left"><Button
                                                    label="Full Cream Milk"
                                                    onClick={() => this.handleButtonClick('milk', 'Full_Cream_Milk')}
                                                    className={(milk === 'Full_Cream_Milk' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                                </div>
                                                <div className="col-sm-6 button-padding-right"><Button label="Skim Milk"
                                                                                                       onClick={() => this.handleButtonClick('milk', 'Skim_Milk')}
                                                                                                       className={(milk === 'Skim_Milk' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                                </div>
                                            </div>
                                            <div className="row row-padding">
                                                <div className="col-sm-6 button-padding-left"><Button label="Soy Milk"
                                                                                                      onClick={() => this.handleButtonClick('milk', 'Soy_Milk')}
                                                                                                      className={(milk === 'Soy_Milk' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <Button label="This Size" className="p-button-secondary type-button"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#chooserCarousel" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#chooserCarousel" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        );
    }
}


export default App;
/*<div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>
</div>*/
