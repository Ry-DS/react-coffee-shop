import React, {Component} from 'react';
import {Button} from 'primereact/button';
import $ from 'jquery';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        setTimeout(()=>{

        },1);

    }
  render() {
    return (
     <div>
         <div className="welcome">
            <h1>Welcome</h1>
         </div>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-sm-3 text-center overview">Selections</div>

                 <div className="col-sm-7 offset-sm-2 text-center selector">
                     Carousel
                     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                         <ol className="carousel-indicators">
                             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                             <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                             <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                         </ol>
                         <div className="carousel-inner">
                             <div className="carousel-item active">
                                 <div className="container">
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="This Type"
                                                                                               className="p-button-secondary type-button"/>
                                         </div>
                                         <div className="col-sm-6 button-padding-right"><Button label="This Type"
                                                                                                className="p-button-secondary type-button"/>
                                         </div>
                                     </div>
                                     <div className="row row-padding">
                                         <div className="col-sm-6 button-padding-left"><Button label="This Type"
                                                                                               className="p-button-secondary type-button"/>
                                         </div>
                                         <div className="col-sm-6 button-padding-right"><Button label="This Type"
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
                         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                             <span className="sr-only">Previous</span>
                         </a>
                         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
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
