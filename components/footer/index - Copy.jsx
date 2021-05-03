import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';



import './style.css';

export default class Footer extends Component {



  render() {
    return (

    	

   
 <footer className="footer no-padding-footer">
 	<div className="container-fluid no-padding-container">
		<div className="row">
 			<div className="col-md-1 footer-first-row d-none d-sm-block">
 			<p className="back-to-top rotate">back to the top <span><Link to="#main-section"><button className="btn-arrow"><img src="images/left-arrow.svg" /></button></Link></span></p>
			</div>
 		<div className="col-md-10 footer-second-row">
			<div className="row">
				<div className="col-lg-3 col-md-12 footer-second-row1">
					<Link to="/"> <img id="logo" src="images/hashtag-footer-logo.svg" /></Link>
				</div>
				<div className="col-lg-5 col-md-12 footer-second-row2">
 					<img id="shopify-experts-logo" src="images/Footer/shopify-experts.svg" />
 					<img id="footer-vertical-image" src="images/Footer/verticle-line.svg" />
 					<img id="shopify-partner-logo" src="images/Footer/shopify-partner.svg" />
 				</div>
				<div className="col-lg-4 col-md-12 footer-second-row3">
					<div className="form-inline form-inline-bottom my-2 my-lg-0">
						<button className="btn-transparent btn btn-outline-success my-2 my-sm-0">
							<Link to="/">En
							</Link>
						</button>
						<button className="speak-btn btn-orange btn btn-outline-success my-2 my-sm-0">
							<Link to="/contact-us">Let's Speak
							</Link>
					    </button>
                   </div>
                </div>
          </div>
 
          <div className="row">  
            <div className="col-md-12">
              <div className="footer-middle-line">
              </div>
            </div>
     	  </div>

		  <div className="row">
 			<div className="col-lg-3 col-md-12">
 				<p className="footer-desc">
	 <p className="footer-desc d-block d-md-block d-sm-none">Hashtag Systems Inc, an international Software development and outsourcing company with its headquarters in Sunnyvale, California and development centers in San Diego, California & Kochi.</p>
					<p className="footer-desc d-none d-md-none d-sm-block">Hashtag Systems Inc,<br/> an international Software<br/> development and outsourcing<br/> company with its <br/>headquarters in Sunnyvale,<br/> California and development<br/> centers in San Diego,<br/> California &amp; Kochi. </p>

					</p>
						<a href="https://www.linkedin.com/company/hashtag-systems-inc/" target="_blank"><img id="footer-linkedin" src="images/Footer/linkedin.svg" /></a>
					<a href="https://www.facebook.com/hashtagsystemsca/" target="_blank"><img id="footer-fb" src="images/Footer/facebook-icon.svg" /></a>
	

 			</div>
			<div className="col-lg-2 col-md-12">
				<p className="footer-sub-title footer-sub-title-one">MENU</p>
				<ul>
					<li><NavLink to="/" className="footer-nav">Home</NavLink></li>
					<li><NavLink to="/about-us" className="footer-nav">About Us</NavLink></li>
					<li><NavLink to="/services" className="footer-nav">Service</NavLink></li>
				<li><NavLink to="/blogs" className="footer-nav">Blog</NavLink></li>
					 	<li><NavLink to="/careers" className="footer-nav">Careers</NavLink></li>
					<li><NavLink to="/shopify-experts" className="footer-nav">Shopify</NavLink></li>
					<li><NavLink to="/contact-us" className="footer-nav">Contact</NavLink></li>
					
					</ul>

			</div>
			<div className="col-lg-3 col-md-12">
				<p className="footer-sub-title">SERVICES</p>
				<ul>
				<li> <NavLink to="/services#service-db" className="footer-nav">DB & Backend Development</NavLink> </li>
				<li><NavLink to="/services#service-aws" className="footer-nav">Infrastructure – Built on AWS</NavLink></li>
				<li><NavLink to="/services#service-mob" className="footer-nav">Mobile App Development</NavLink> </li>
				<li><NavLink to="/services#service-design" className="footer-nav">Design & Prototyping</NavLink></li>
				<li><NavLink to="/services#service-ui" className="footer-nav">UI Development</NavLink></li>
				<li><NavLink to="/services#service-cms" className="footer-nav">CMS – WordPress</NavLink></li>
<li><NavLink to="/services#service-shopify" className="footer-nav">Shopify Experts</NavLink></li>
<li><NavLink to="/services#service-filemaker" className="footer-nav">FileMaker Pro Development</NavLink></li>
				</ul>
			</div>
			<div className="col-lg-4 col-md-12">
				<div className="footer-center footer-info">


					<div className="footer-map-section">
						<img id="footer-location" src="images/Footer/location.svg" />
						<p className="loaction-para"><span>100 S. Murphy Ave. Suite 200</span>Sunnyvale, CA 94086<br/> USA</p>
					</div>

					<div>
						<img id="footer-phone" src="images/Footer/phone.svg" />


						<p className="contact-links"><a href="tel:+1-408-596-2525">+1 408 596 2525 </a></p>

					</div>

					<div>
						<img id="footer-email" src="images/Footer/email.svg" />
						<p className="contact-links footer-email-link"><a href="mailto:info@hashtag-ca.com">info@hashtag-ca.com</a></p>
					</div>
					<div className="d-block d-sm-none"><Link to="#main-section"><a id="back-to-top-btn" className="show"></a></Link></div>

				</div> 
			
			</div>


		</div>

	</div>


<div className="col-md-1 footer-third-row"></div>

 
</div>
  	<div className="row">
 		<div className="col-md-1 footer-copy-first-row">

 		</div>
 		<div className="col-md-11 footer-copy-second-row">

			<p className="copyright-text">Hashtag Systems 2020 </p>
 		</div>
 
			</div>


	</div>



 </footer>

    )
  }
}
