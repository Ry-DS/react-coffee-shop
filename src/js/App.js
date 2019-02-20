import React, {Component} from 'react';
import $ from 'jquery';

import '../App.css';
import ButtonSection from "./ButtonSection";
import Selections from "./Selections";
import PRICES from "./Prices";



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: {
                type: PRICES.type.latte,
                milk: PRICES.milk.full_cream_milk,
                size: PRICES.size.regular,
                sugar: PRICES.sugar.none
            }
        };//we put a default order so the coffee mug can render properly

        setTimeout(() => {//we do this on a delay since bootstrap might have not loaded by now
            $('#chooserCarousel').carousel({interval: false, keyboard: false});
        }, 50);


    }

    handleButtonClick(type, value) {
        const order = {...this.state.order};
        order[type] = PRICES[type][value];
        this.setState({...this.state, order: order})

    }

    render() {
        return (
            <div>
                <div className="welcome">
                    <h1>Welcome to Fred's Cafe</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 text-center overview">
                            <Selections state={this.state}/>
                        </div>

                        <div className="col-sm-7 offset-sm-2 text-center selector">

                            <div id="chooserCarousel" className="carousel slide">
                                <ol className="carousel-indicators">
                                    <li data-target="#chooserCarousel" data-slide-to="0" className="active"/>
                                    <li data-target="#chooserCarousel" data-slide-to="1"/>
                                    <li data-target="#chooserCarousel" data-slide-to="2"/>
                                    <li data-target="#chooserCarousel" data-slide-to="3"/>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <ButtonSection value={PRICES.type}
                                                       onClick={value => this.handleButtonClick('type', value)}
                                                       selected={this.state.order.type}/>

                                    </div>
                                    <div className="carousel-item">
                                        <ButtonSection value={PRICES.milk}
                                                       onClick={value => this.handleButtonClick('milk', value)}
                                                       selected={this.state.order.milk}/>
                                    </div>
                                    <div className="carousel-item">
                                        <ButtonSection value={PRICES.size}
                                                       onClick={value => this.handleButtonClick('size', value)}
                                                       selected={this.state.order.size}/>
                                    </div>
                                    <div className="carousel-item">
                                        <ButtonSection value={PRICES.sugar}
                                                       onClick={value => this.handleButtonClick('sugar', value)}
                                                       selected={this.state.order.sugar}/>
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
