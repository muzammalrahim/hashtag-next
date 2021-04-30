import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import './style.css';
import {Carousel} from '3d-react-carousal';
export default class Slider extends Component{
  constructor(props) {
    super(props)
  }
  
  render() {
    let slides = [
      <img  src="../images/shopify/together-home.jpg" alt="slider1" />,
    <img  src="../images/shopify/warped-table-s.jpg" alt="slider2" />  ,
    <img  src="../images/shopify/shopurbanalchemy.jpg" alt="slider3" />  , 
    <img  src="../images/shopify/berrybay.jpg" alt="slider4" />  ];
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        
       
        <br/>
       
       
      <Carousel slides={slides} autoplay={true} interval={3000000}/>
{/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
      </div>
    );
  }
}
