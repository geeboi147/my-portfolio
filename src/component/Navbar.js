import React, { Component } from 'react'
import logo from './images/logo.png';
import './Navbar.css';
import bars from './images/bars.png';
import times from './images/X.png';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  state={clicked: false};
  handleClick=()=>{
    this.setState({clicked: !this.state.clicked});
  };
  render(){
  return (
    
        <nav>
          <a href="index.html">
      <img className='logo' src={logo} alt="logo"/>
      </a>
      <div>
        <ul id="links" className={this.state.clicked ? "#links active" : "#links"}
        >
            <li>
            <Link to="/" className='active'>Home</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            
            <li>
            <Link to="/About">About</Link>
            </li>
            
        </ul>
      </div>
      <div className='mobile'
      onClick={this.handleClick}>
    <img id="bar" src={this.state.clicked ? times:
    bars} alt=""/>
      </div>
      </nav>
   
  );
}
}

export default Navbar;