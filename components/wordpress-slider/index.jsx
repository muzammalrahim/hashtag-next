import React, {useState} from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// import uuidv4 from "uuid";
import dynamic from "next/dynamic";
const { Carousel } = dynamic(() => import("3d-react-carousal"), { ssr: false });
// import { Carousel } from "react-responsive-carousel";

// import { config } from "react-spring";

 const Wpslider = ()=>{
//  const [state, setState] = useState({
//    goToSlide: 0,
//    offsetRadius: 2,
//    showNavigation: true,
//    config: config.gentle,
//  });
    let slides = [
     
          <img src="../images/wordpress/67-baltimore.png" alt="catering" />,
       
          <img src="../images/wordpress/face-shield.png" alt="Face shield" />,
     
          <img src="../images/wordpress/stories-upon.png" alt="stories writing" />,
     
          <img src="../images/wordpress/global-moonshot.png" alt="global moonshot" />,
     
          <img src="../images/wordpress/society-kitchella.png" alt="society kitchen" />,
      
          <img
            src="../images/wordpress/sharon-get-organised.png"
            alt="online shopping"
          />,
         <img src="../images/wordpress/fameleon.png" alt="Fashion and lifestyle" />
    ]
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>

        <br />

        {/* <Carousel
          showIndicators={false}
          autoFocus={true}
          useKeyboardArrows={true}
          autoPlay={true}
          infiniteLoop={true}
        >
          {slides.map((media, index) => {
            return (
              <figure key={index} className="w-lightbox-figure">
                {media}
              </figure>
            );
          })}
        </Carousel> */}
        <Carousel slides={slides} autoplay={true} interval={3000000} />
        {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
      </div>
    );
  
}

export default Wpslider