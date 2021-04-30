import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './style.css';
import Slider from "react-slick";

export default class Carousel extends Component {

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
          <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/html5.svg" alt="html5" className="img-fluid mx-auto my-auto "/> 
			  			</h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/mysql.svg" alt="mysql" className="img-fluid mx-auto my-auto"/>
			  			</h3>
			  			  <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/amazon.svg" alt="amazon" className="img-fluid mx-auto my-auto"/>
			  			</h3>
              <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/node-js.svg" alt="node_js" className="img-fluid mx-auto my-auto"/>
              </h3>
           
        </div>
       
      
        <div>
        <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/bootstrap.svg" alt="bootstrap" className="img-fluid mx-auto my-auto"/> 
              </h3>
          
              <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/shopify.svg" alt="shopify" className="img-fluid mx-auto my-auto"/>
              </h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/php.svg" alt="php" className="img-fluid mx-auto my-auto"/>
              </h3>
			  			 
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/angular-js.svg" alt="angular_js" className="img-fluid mx-auto my-auto"/>
			  			</h3>
        </div>
       
        <div>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/ethereum.svg" alt="ethereum" className="img-fluid mx-auto my-auto"/>
			  			</h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/react-js.svg" alt="react_js" className="img-fluid mx-auto my-auto"/>
			  			</h3>
			  			 <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/wordpress.svg" alt="wordpress" className="img-fluid mx-auto my-auto"/> 
			  			</h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/jquery.svg" alt="jquery" className="img-fluid mx-auto my-auto"/>
			  			</h3>
        </div>
        
        <div>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/codeigniter.svg" alt="codeigniter" className="img-fluid mx-auto my-auto"/>
			  			</h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/django.svg" alt="django" className="img-fluid mx-auto my-auto"/>
			  			</h3>
			  			 <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/python.svg" alt="python" className="img-fluid mx-auto my-auto"/>
			  			</h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/mongodb.svg" alt="mongodb" className="img-fluid mx-auto my-auto"/> 
			  			</h3>
        </div>
       
        <div>
          <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/truffle.svg" alt="truffle" className="img-fluid mx-auto my-auto"/>
			  			</h3>
           <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/solidity.svg" alt="solidity" className="img-fluid mx-auto my-auto"/>
			  			</h3>
			  			 <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/docker.svg" alt="docker" className="img-fluid mx-auto my-auto"/>
			  			</h3>
			  			 <h3 className="text-center my-auto d-flex pt-5"><img src="images/home/ionic.svg" alt="ionic" className="img-fluid mx-auto my-auto"/></h3>
        </div>
         
        
       
      </Slider>
    );
  }
} 