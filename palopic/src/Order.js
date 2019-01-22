/* Core imports */
import React, { Component } from 'react';
/* Component imports */
import './Order.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navigation/Navbar.jsx'
import OrderForm from './components/order/Form.jsx'

class Home extends Component {
  render() {
    return (
      <div id="app">
        <Navbar></Navbar>
        <OrderForm></OrderForm>
      </div>
    );
  }
}

export default Home;
