import React, { Component } from 'react';

class Summary extends Component {
  render () {
    return (
      <fieldset id="basic">
        <h2>Summary of your order</h2>
        <div className="form-group">
          <label><b>Last Name</b></label><br/>
          <label>{this.props.state.lastName}</label>
        </div>
        <div className="form-group">
          <label><b>First Name</b></label><br/>
          <label>{this.props.state.firstName}</label>
        </div>
        <div className="form-group">
          <label><b>Phone</b></label><br/>
          <label>{this.props.state.phone}</label>
        </div>
        <div className="form-group">
          <label><b>Email</b></label><br/>
          <label>{this.props.state.email}</label>
        </div>
        <div className="form-group">
          <label><b>Address</b></label><br/>
          <label>{this.props.state.address}</label>
        </div>
        <div className="form-group">
          <label><b>Number of copies for #1</b></label><br/>
          <label>{this.props.state.numCopies1}</label>
        </div>
        <div className="form-group">
          <label><b>Number of copies for #2</b></label><br/>
          <label>{this.props.state.numCopies2}</label>
        </div>
        <div className="form-group">
          <label><b>Number of copies for #3</b></label><br/>
          <label>{this.props.state.numCopies3}</label>
        </div>
        <div className="form-group">
          <label><b>Number of copies for #4</b></label><br/>
          <label>{this.props.state.numCopies4}</label>
        </div>
        <div className="form-group">
          <label><b>Number of copies for #5</b></label><br/>
          <label>{this.props.state.numCopies5}</label>
        </div>
      </fieldset>
    );
  }
}

export default Summary;
