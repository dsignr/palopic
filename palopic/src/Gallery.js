/* Core imports */
import React, { Component } from 'react';
/* Component imports */
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navigation/Navbar.jsx'
import Slideshow from './components/gallery/Slideshow.jsx'

class Gallery extends Component {
  render() {
    return (
      <div id="app">
        <Navbar></Navbar>
        <Slideshow></Slideshow>
      </div>
    );
  }
}

export default Gallery;
