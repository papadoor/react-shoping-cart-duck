import React from 'react';
import { Link } from 'react-router';

let NavigationBar = React.createClass({
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
},

componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
},

handleScroll: function(event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60),
        range = 30,
        nav = document.getElementsByClassName("navbar")[0];
        if(scrollTop > range){
          nav.classList.add("top-nav-collapse");
        }else {
          nav.classList.remove("top-nav-collapse");
        }
},

  render: function() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Home</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

});

export default NavigationBar
