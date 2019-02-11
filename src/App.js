import React, {Component} from 'react';
import {Button} from 'primereact/button';
import $ from 'jquery';

import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {data: []};
        setTimeout(() => {
            $('#chooserCarousel').carousel({interval: false, keyboard: false});
        }, 50);



    }

    handleButtonClick(type, value) {
        const data = this.state.data.slice();
        data[type] = value;
        this.setState({...this.state, data: data})

    }
  render() {
      const type = this.state.data['type'];
    return (
     <div>
         <div className="welcome">
             <h1>Welcome to Fred's Cafe</h1>
         </div>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-sm-3 text-center overview">Selections
                     <div className="selections-text">
                         <h4>{type !== undefined ? "Type: " + type : ""}</h4>
                     </div>
                     <div className="coffee-container text-center">
                     <div className="saucer">
                         <div className="inner"></div>
                         <div className="cup">
                             <div className={type === undefined ? "empty" : "coffee " + type.toLowerCase()}>
                                 <div
                                     className={type !== undefined && type.includes("Hot-Chocolate") ? "marshmallow" : ""}/>
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
                                 <div className="container">
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="Americano"
                                                                                               onClick={() => this.handleButtonClick('type', 'Americano')}
                                                                                               className="p-button-secondary type-button"/>
                                         </div>
                                         <div className="col-sm-6 button-padding-right"><Button label="Latte"
                                                                                                onClick={() => this.handleButtonClick('type', 'Latte')}
                                                                                                className="p-button-secondary type-button"/>
                                         </div>
                                     </div>
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="Hot Chocolate"
                                                                                               onClick={() => this.handleButtonClick('type', 'Hot-Chocolate')}
                                                                                               className="p-button-secondary type-button"/>
                                         </div>
                                         <div className="col-sm-6 button-padding-right"><Button label="Water"
                                                                                                onClick={() => this.handleButtonClick('type', 'Water')}
                                                                                                className="p-button-secondary type-button"/>
                                         </div>
                                     </div>

                                 </div>

                             </div>
                             <div className="carousel-item">
                                 <Button label="This Milk" className="p-button-secondary"/>
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
