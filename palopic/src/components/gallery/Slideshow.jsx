/* Core imports */
import React, { Component } from 'react';
/* Component imports */
import { Link } from 'react-router-dom'
import './Slideshow.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Model to store current slide. Assumes index is 1 based, not 0 */
      currentSlide: 1,
      /* Set the maximum number of slides here */
      max: 5
    }
  }

  /* Function to navigate to the next slide in slideshow */
  next = () => {
    var increased = this.state.currentSlide + 1
    if (increased > this.state.max) {
      this.setState({currentSlide: 1})
    } else {
      this.setState({currentSlide: increased})
    }
  }

  /* Function to navigate to the previous slide in slideshow */
  previous = () => {
    var decreased = this.state.currentSlide - 1
    if (decreased === 1) {
      this.setState({currentSlide: this.state.max})
    } else {
      this.setState({currentSlide: decreased})
    }

  }

  render() {
    return (
      <div className="slideshow no-select">
        <h2>Gallery</h2>
        <h3>Ref: #{this.state.currentSlide}</h3>
        <div className="d-flex align-items-stretch">
          <div className="nav d-flex" onClick={()=> this.previous()}><FaArrowLeft className="align-self-center"/></div>
          <div className="placeholder">
            <div className="mask"></div>
            <img alt="Phuket snap" src={require('../../assets/images/gallery/'+ this.state.currentSlide +'.jpg')} />
          </div>
          <div className="nav d-flex" onClick={()=> this.next()}><FaArrowRight className="align-self-center"/></div>
        </div>
        <Link to="/order" className="btn btn-success pay-now">Pay Now</Link>
      </div>
    );
  }
}

export default Slideshow;
