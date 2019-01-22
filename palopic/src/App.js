/* Core imports */
import React, { Component } from 'react';
/* Component imports */
import Home from './Home.js'
import Order from './Order.js'
import Gallery from './Gallery.js'
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/order' render={() => (
            <div className="Order">
              <Order />
            </div>
          )}/>
          <Route exact={true} path='/gallery' render={() => (
            <div className="Gallery">
              <Gallery />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
