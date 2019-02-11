import React, {Component} from 'react';
import {Button} from 'primereact/button';
import $ from 'jquery';

import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {order: {type: 'Latte'}};
        this.prices = {
            type: {flat_white: 2.5, cappuccino: 3, short_black: 2, latte: 3},
            milk: {full_cream_milk: 0, skim_milk: 0.5, soy_milk: 1},
            size: {small: 0, regular: 0.5, large: 1},
            sugar: {none: 0, one: 0.05, two: 0.1}

        };
        setTimeout(() => {
            $('#chooserCarousel').carousel({interval: false, keyboard: false});
        }, 50);



    }

    handleButtonClick(type, value) {
        const order = {...this.state.order};
        order[type] = value;
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
                         <h4 className="selector-text">{type !== undefined ? "Type: " + type.replaceAll("_", " ") : ""}</h4>
                         <h4 className="selector-text">{milk !== undefined ? "Milk: " + milk.replaceAll("_", " ") : ""}</h4>
                     </div>
                     <div className="coffee-container text-center">
                     <div className="saucer">
                         <div className="inner"></div>
                         <div className="cup">
                             <div className={type === undefined ? "empty" : "coffee " + type.toLowerCase()}>
                                 <div
                                     className={type !== undefined && type.includes("Hot_Chocolate") ? "marshmallow" : ""}/>
                                 <div className="shine"></div>
                                 <div className="shine left"></div>
                                 <div className="foam"></div>
                             </div>
                             <div className="holder"></div>
                         </div>
                     </div>
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
                                 <h1 className="selector-text text-center" style={{color: 'white'}}>Choose a Type</h1>
                                 <div className="container">
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="Flat White"
                                                                                               onClick={() => this.handleButtonClick('type', 'Americano')}
                                                                                               className={(type === 'Americano' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                         </div>
                                         <div className="col-sm-6 button-padding-right"><Button label="Latte"
                                                                                                onClick={() => this.handleButtonClick('type', 'Latte')}
                                                                                                className={(type === 'Latte' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                         </div>
                                     </div>
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="Cappuccino"
                                                                                               onClick={() => this.handleButtonClick('type', 'Hot_Chocolate')}
                                                                                               className={(type === 'Hot_Chocolate' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                         </div>
                                         <div className="col-sm-6 button-padding-right"><Button label="Short Black"
                                                                                                onClick={() => this.handleButtonClick('type', 'Water')}
                                                                                                className={(type === 'Water' ? "p-button-success" : "p-button-secondary") + " type-button"}/>
                                         </div>
                                     </div>

                                 </div>

                             </div>
                             <div className="carousel-item">
                                 <div className="container">
                                     <h1 className="selector-text text-center" style={{color: 'white'}}>Choose a Milk
                                         Type</h1>
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="Full Cream Milk"
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
