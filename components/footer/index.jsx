import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import Link from 'next/link'
import $ from 'jquery';


import './style.css';

export default class Footer extends Component {



	componentDidMount() {

		$(window).scroll(function () {
	        var scroll = $(window).scrollTop();
	        if (scroll >= 250) {
	            $('.text-back-to-top').addClass('sticky');
	        } else {
	            $('.text-back-to-top').removeClass('sticky');
	        }

	    });
	    
		$(".text-back-to-top a").click(function() {
	        $("html, body").animate({ 
	            scrollTop: 0 
	        }, "slow");
	        return false;
	    });

	}



  render() {
    return (

    	

   
 <footer className="footer no-padding-footer">
	<div className="container-fluid">
		<div className="row">
				<div className="col-md-12 p-0">
			     <div className="ns-back-to-top h-100 d-none d-md-none d-lg-block d-xl-block"><div className="text-back-to-top ">back to the top <span><a href="javascript:void(0);"><button className="btn-arrow"><img src="/images/left-arrow.svg" alt="scrollTop" /></button></a></span></div></div>
				<div className="row footer-second-row">
				
					<div className="col-lg-3 col-md-12">
						 <img id="logo" src="/images/hashtag-footer-logo.svg" alt="logo" />
					</div>
					<div className="col-lg-5 col-md-12 footer-second-row2">
	 					{/*<img id="shopify-experts-logo" src="/images/Footer/shopify-experts.svg" />
	 					<img id="footer-vertical-image" src="/images/Footer/verticle-line.svg" />
	 					<img id="shopify-partner-logo" src="/images/Footer/shopify-partner.svg" />*/}
 					</div>
 					<div className="col-lg-4 col-md-12 footer-second-row3">
						<div className="form-inline form-inline-bottom my-2 my-lg-0">
							<button className="btn-transparent btn btn-outline-success my-2 my-sm-0">
								<Link to="/">En
								</Link>
							</button>
							<a href="/contact-us"><button className="speak-btn btn-orange btn btn-outline-success my-2 my-sm-0">
								<Link to="/contact-us">Let's Speak
								</Link>
						    </button></a>
	                   </div>
               		</div>
               		<div className="col-md-1">
               		</div>

               		{/* footer section one end */}

               		<div className="w-100"></div>
               		<div className="col-md-12 ">
		              <div className="footer-middle-line mr-3 ">
		              </div>
            		</div>

            		{/* footer section line end */}


            		<div className="w-100"></div>


            		<div className="col-lg-3 col-md-12">
 							<p className="footer-desc">
	 						<p className="footer-desc d-block d-md-block d-sm-none">Hashtag Systems Inc, an international Software development and outsourcing company with its headquarters in Sunnyvale, California and development centers in San Diego, California & Kochi.</p>
							<p className="footer-desc d-none d-md-none d-sm-block">Hashtag Systems Inc,<br/> an international Software<br/> development and outsourcing<br/> company with its <br/>headquarters in Sunnyvale,<br/> California and development<br/> centers in San Diego,<br/> California &amp; Kochi. </p>

							</p>
							<a href="https://www.linkedin.com/company/hashtag-systems-inc/" target="_blank"><img id="footer-linkedin" src="/images/Footer/linkedin.svg" alt="linkedin" /></a>
							<a href="https://www.facebook.com/hashtagsystemsca/" target="_blank"><img id="footer-fb" src="/images/Footer/facebook-icon.svg" alt="facebook" /></a>
							
							<div className="footer-badge">
								<a href="https://topwebdevelopmentcompanies.com/us/top-10/web-development/sunnyvale" target="_blank"> 
									<img src="https://topwebdevelopmentcompanies.com/badges/top-web-development-companies.png" alt="web development companies sunnyvale" title="Web Development Companies Sunnyvale" style={{height: "100px", width: "100px"}} />
								</a>
							</div>
					</div>

					<div className="col-lg-2 col-md-12">
							<p className="footer-sub-title footer-sub-title-one">MENU</p>
							<ul>
							    
							     
								<li><Link to="/" className="footer-nav">Home</Link></li>
								<li><Link to="/about-us" className="footer-nav">About Us </Link></li>							
								<li><Link to="/services" className="footer-nav">Service</Link></li>
								<li><Link to="/blogs" className="footer-nav">Blog</Link></li>
					 			<li><Link to="/careers" className="footer-nav">Careers</Link></li>
								<li><Link to="/shopify-experts" className="footer-nav">Shopify</Link></li>
      							{/*<li><a href="/services/wordpress-development" className="footer-nav"> Wordpress</a></li>*/}
								<li><Link to="/contact-us" className="footer-nav">Contact</Link></li>
					
							
							</ul>

					</div>
					<div className="col-lg-3 col-md-12">
								<p className="footer-sub-title">SERVICES</p>
								<ul>
										<li> <Link to="/services/database-and-backend" className="footer-nav">DB & Backend Development</Link> </li>
										<li> <Link to="/services/blockchain-development" className="footer-nav">Blockchain Development</Link> </li>
										{/*<li><Link to="/services#service-aws" className="footer-nav">Infrastructure – Built on AWS</Link></li>*/}
										{/*<li><Link to="/services#service-mob" className="footer-nav">Mobile App Development</Link> </li>*/}
										<li><Link to="/services/design-and-prototyping" className="footer-nav">Design & Prototyping</Link></li>
										<li><Link to="/services/ui-development" className="footer-nav">UI Development</Link></li>
										<li><Link to="/services/wordpress-development" className="footer-nav">CMS – WordPress</Link></li>
										<li><Link to="/shopify-experts" className="footer-nav">Shopify Experts</Link></li>
										<li><Link to="/services/filemaker" className="footer-nav">FileMaker Pro Development</Link></li>
								</ul>
					</div>

						<div className="col-lg-3 col-md-12">
							<div className="footer-center footer-info">
								<div className="">
										<img id="footer-location" src="/images/Footer/location.svg" alt="location" />
										<p className="loaction-para"><span>100 S. Murphy Ave. Suite 200</span>Sunnyvale, CA 94086<br/> USA</p>
								</div>
								<div>
										<img id="footer-phone" src="/images/Footer/phone.svg" alt="phone" />	
										<p className="contact-links"><a href="tel:+1-408-596-2525">+1 408 596 2525 </a></p>

								</div>

						 		<div>
							 			<img id="footer-email" src="/images/Footer/email.svg" alt="email" />
							 			<p className="contact-links footer-email-link">
										<a href="mailto:info@hashtag-ca.com">info@hashtag-ca.com</a>
										</p>
								</div>
								<div className="d-none d-md-block d-lg-none">
										<Link to="#main-section"><a id="back-to-top-btn" className="show"></a></Link>
								</div>
							</div> 
			
						</div>
						{/*<div className="col-md-1"> 
               			</div>*/}
						<div className="w-100"></div>											
				</div>
				
			</div>

			




		</div>
	</div>
	<div className="container-fluid footer-mobile">
		<div className="row">
				<div className="col-md-12 p-0">
					<div className="ns-back-to-top h-100 d-none d-md-block d-lg-block d-xl-block"> </div>
					<div className="footer-copy-second-row">
						<p className="copyright-text">Copyright &copy; 2020 Hashtag Systems Inc. All Rights Reserved.</p>
					</div>
				</div>
		</div>
	</div>
 </footer>

    )
  }
}
