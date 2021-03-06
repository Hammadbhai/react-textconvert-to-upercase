import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
    return (
        
     <nav className="navbar navbar-default">
    <div className="container-fluid">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a  className="navbar-brand" to="/">{props.title}</a>
      </div>
  
      {/* Collect the nav links, forms, and other content for toggling  */}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a to="/">a <span className="sr-only">(current)</span></a></li>
          <li><a to="/about">About Us</a></li>
          <li className="dropdown">
            <a to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a to="/Textfoam">action</a></li>
              <li><a to="/">Another action</a></li>
              <li><a to="/">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a to="/">Separated a</a></li>
              <li role="separator" className="divider"></li>
              <li><a to="/">One more separated a</a></li>
            </ul>
          </li>
        </ul>
        <form className="navbar-form navbar-right">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div> 
    </div>
  </nav>
    
    )
}

Navbar.prototype = {title : PropTypes.string}
