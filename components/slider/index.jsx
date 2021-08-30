import React, { Component } from 'react';
import dynamic from "next/dynamic";
const { Carousel } = dynamic(() => import("3d-react-carousal"), { ssr: false });


export default class Slider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let slides = [
      <img src="/images/shopify/together-home.jpg" alt="Home" />,
      <img src="/images/shopify/warped-table-s.jpg" alt="warped table" />,
      <img src="/images/shopify/shopurbanalchemy.jpg" alt="jewellery" />,
      <img src="/images/shopify/berrybay.jpg" alt="blueberry android tv" />,
    ];
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <br />
        { slides ? <Carousel slides={[<img src="/images/shopify/together-home.jpg" alt="slider1" />]} autoplay={true} interval={3000000} /> : <h1>hi</h1>}
      </div>
    );
  }
}
