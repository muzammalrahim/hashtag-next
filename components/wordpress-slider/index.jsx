import React, {useState} from 'react';
import dynamic from "next/dynamic";
const { Carousel } = dynamic(() => import("3d-react-carousal"), { ssr: false });

 const Wpslider = ()=>{
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
        <Carousel slides={slides} autoplay={true} interval={3000000} />
      </div>
    );
  
}

export default Wpslider