import React, {Component} from 'react';
import {Button} from 'primereact/button';
import $ from 'jquery';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.coffeeType = ''


    }
  render() {
    return (
     <div>
         <div className="welcome">
            <h1>Welcome</h1>
         </div>
         <div className="container-fluid">
             <div className="row">
                 <div className="col-sm-3 text-center overview">Selections

                     <div className="saucer">
                         <div className="inner"></div>
                         <div className="cup">
                             <div className="coffee">
                                 <div className="shine"></div>
                                 <div className="shine left"></div>
                                 <div className="foam"></div>
                             </div>
                             <div className="holder"></div>
                         </div>
                     </div>
                 </div>

                 <div className="col-sm-7 offset-sm-2 text-center selector">
                     Carousel
                     <div id="myCarousel" className="carousel slide">
                         <ol className="carousel-indicators">
                             <li className="item1 active"></li>
                             <li className="item2"></li>
                             <li className="item3"></li>
                             <li className="item4"></li>
                         </ol>

                         <div className="carousel-inner" role="listbox">

                             <div className="item active">
                                 <img src="img_chania.jpg" alt="Chania" width="460" height="345"/>
                                 <div className="carousel-caption">
                                     <h3>Chania</h3>
                                     <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                                 </div>
                             </div>

                             <div className="item">
                                 <img src="img_chania2.jpg" alt="Chania" width="460" height="345"/>
                                 <div className="carousel-caption">
                                     <h3>Chania</h3>
                                     <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                                     </div>
                             </div>

                             <div className="item">
                                 <img src="img_flower.jpg" alt="Flower" width="460" height="345"/>
                                 <div className="carousel-caption">
                                     <h3>Flowers</h3>
                                     <p>Beautiful flowers in Kolymbari, Crete.</p>
                                     </div>
                             </div>

                             <div className="item">
                                 <img src="img_flower2.jpg" alt="Flower" width="460" height="345"/>
                                 <div className="carousel-caption">
                                     <h3>Flowers</h3>
                                     <p>Beautiful flowers in Kolymbari, Crete.</p>
                                 </div>
                             </div>

                         </div>

                         <a className="left carousel-control" href="#myCarousel" role="button">
                             <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                             <span className="sr-only">Previous</span>
                         </a>
                         <a className="right carousel-control" href="#myCarousel" role="button">
                             <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
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
