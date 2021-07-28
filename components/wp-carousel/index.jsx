import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';

/*import dynamic from "next/dynamic";
const { Slider } = dynamic(() => import("react-slick"), { ssr: false });*/

import Slider from "react-slick";

// import Slider from "react-slick";

export default class Wpcarousel extends Component {

render() {
    var settings = {
       dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="text-center my-auto d-flex"><img src="../images/wordpress/acf-plugin.svg" alt="acf" className="img-fluid mx-auto my-auto "/> 
			  			</div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/all-in-one-seo.svg" alt="all-in-one-seo" className="img-fluid mx-auto my-auto"/>
			  			</div>
			  			  <div className="text-center my-auto d-flex"><img src="../images/wordpress/autoptimize.svg" alt="autoptimize" className="img-fluid mx-auto my-auto"/>
			  			</div>
              <div className="text-center my-auto d-flex"><img src="../images/wordpress/bbpres.svg" alt="bbpres" className="img-fluid mx-auto my-auto"/>
              </div>
           
        </div>
       
      
        <div>
        <div className="text-center my-auto d-flex"><img src="../images/wordpress/buddy-press.svg" alt="buddy-press" className="img-fluid mx-auto my-auto"/> 
              </div>
          
              <div className="text-center my-auto d-flex"><img src="../images/wordpress/classic-editor.svg" alt="classic-editor" className="img-fluid mx-auto my-auto"/>
              </div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/cloudfare.svg" alt="cloudfare" className="img-fluid mx-auto my-auto"/>
              </div>
			  			 
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/disable-comment.svg" alt="disable-comment" className="img-fluid mx-auto my-auto"/>
			  			</div>
        </div>
       
        
        
        <div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/event-manager.svg" alt="event-manager" className="img-fluid mx-auto my-auto"/>
			  			</div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/acf-plugin.svg" alt="acf-plugin" className="img-fluid mx-auto my-auto"/>
			  			</div>
			  			 <div className="text-center my-auto d-flex"><img src="../images/wordpress/featured-video.svg" alt="featured-video" className="img-fluid mx-auto my-auto"/>
			  			</div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/filemanager.svg" alt="filemanager" className="img-fluid mx-auto my-auto"/> 
			  			</div>
        </div>
       
        <div>
          <div className="text-center my-auto d-flex"><img src="../images/wordpress/google-map.svg" alt="google-map" className="img-fluid mx-auto my-auto"/>
			  			</div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/gravity-form.svg" alt="gravity-form" className="img-fluid mx-auto my-auto"/>
			  			</div>
			  			 <div className="text-center my-auto d-flex"><img src="../images/wordpress/jetpack.svg" alt="jetpack" className="img-fluid mx-auto my-auto"/>
			  			</div>
			  			 <div className="text-center my-auto d-flex"><img src="../images/wordpress/layer-slider.svg" alt="layer-slider" className="img-fluid mx-auto my-auto"/></div>
        </div>
        <div>
          <div className="text-center my-auto d-flex"><img src="../images/wordpress/learnpress.svg" alt="learnpress" className="img-fluid mx-auto my-auto"/>
              </div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/mailichimp.svg" alt="mailchimp" className="img-fluid mx-auto my-auto"/>
              </div>
               <div className="text-center my-auto d-flex"><img src="../images/wordpress/openmenu.svg" alt="openmenu" className="img-fluid mx-auto my-auto"/>
              </div>
               <div className="text-center my-auto d-flex"><img src="../images/wordpress/paid-member-pro.svg" alt="paid-member-pro" className="img-fluid mx-auto my-auto"/></div>
        </div>
        <div>
          <div className="text-center my-auto d-flex"><img src="../images/wordpress/pdf-plugin.svg" alt="pdf-plugin" className="img-fluid mx-auto my-auto"/>
              </div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/slider-revolution.svg" alt="slider-revolution.svg"  className="img-fluid mx-auto my-auto"/>
              </div>
               <div className="text-center my-auto d-flex"><img src="../images/wordpress/smush.svg" alt="smush" className="img-fluid mx-auto my-auto"/>
              </div>
               <div className="text-center my-auto d-flex"><img src="../images/wordpress/ssl.svg" alt="ssl" className="img-fluid mx-auto my-auto"/></div>
        </div>
        <div>
          <div className="text-center my-auto d-flex"><img src="../images/wordpress/woocommerce.svg" alt="woocommerce" className="img-fluid mx-auto my-auto"/>
              </div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/woocommerce-service.svg" alt="woocommerce-service" className="img-fluid mx-auto my-auto"/>
              </div>
               <div className="text-center my-auto d-flex"><img src="../images/wordpress/word-defence.svg" alt="word-defence" className="img-fluid mx-auto my-auto"/>
              </div>
               <div className="text-center my-auto d-flex"><img src="../images/wordpress/wp-page.svg" alt="wp-page" className="img-fluid mx-auto my-auto"/></div>
        </div>
         <div>
           <div className="text-center my-auto d-flex"><img src="../images/wordpress/yoast.svg" alt="yoast" className="img-fluid mx-auto my-auto"/>
              </div>
           <div className="text-center my-auto d-flex">
              </div>
               <div className="text-center my-auto d-flex">
              </div>
           <div className="text-center my-auto d-flex">
              </div>
        </div>
        
       
      </Slider>
    );
  }
} 