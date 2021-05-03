import React, { Component } from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import Contact from '../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
require('typeface-montserrat')

export default class Service extends Component {
	render() {
		const meta = {
			title: 'Services - FullStack Web Development| Bay area, California',


			meta: {
				charset: 'utf-8',
				name: {
					keywords: 'Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california'
				}


			}
		};
		return (

			<div className="service-main" id="service-main">

				<DocumentMeta {...meta} />
				<Header></Header>
				<section class="content-container">
					<div className="container-fluid service-bg p-0 m-0 ">
						<div className="service-bg-right">
							<div className="service-banner-frame">
								<div className="container ">

									<div className="row justify-content-center service-banner-content pl-3 pr-3">
										<div className="col-lg-6 col-md-12">
											<p className="sub-text-above-main-title title-white">A Full stack development company</p>
											<h1 className="main-title title-white d-block">Our Services</h1>

										</div>
										<div className="col-lg-6 col-md-12 text-white  ">
											<p className="bold-contents service-content-box pl-4">
												Outsourcing excellent quality IT services and offering our clients worldwide impeccable full-cycle customized software development, support, and maintenance is our area of expertise.
							</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						{/* section 1 */}
						<div className="row justify-content-center mt-3" id="service-db">

							<div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-12 order-md-2 order-sm-2">
								<h1 className="service-title">Database & Backend Development</h1>
								<div className="service-sub-title">Database design & Migration Backend development | Python | Django</div>
								<div className="service-content mt-4">
									<p>We stuff your apps with best technologies & best brain. We understand how you need to securely and safely handle all the rich data of your business.</p>
									<p> Build your apps with any platform. You name it, We’ll do it.</p>
								</div>
								<a href="/services/database-and-backend" class="nj-who-we-are-button float-right font-12 font-bold">read more <span class="nj-arrow"><span class="hashtag-arrow btn-right-arrow"></span></span></a>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 order-3  text-center ">
								<img src="images/service/database.svg" alt="db_backend" className="img-fluid service-image mobile-image-border" />
							</div>

						</div>
						{/* section 2 */}
						<div className="row justify-content-center mt-3" id="service-aws">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12">

								<h1 className="service-title">Infrastructure – <br />Built on AWS</h1>
								<div className="service-sub-title">AWS | Database storage | Cloud consulting & Development</div>
								<div className="service-content mt-4">
									<p>Build your web applications with the powerful AWS. Amazon Web Service is easy to use and the user should not worry about the servers, security, and databases.</p>
									<p> Start or optimise your journey to Cloud. Leave it to us. We are the experts.</p>
								</div>

							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 text-center">
								<img src="images/service/aws.svg" alt="aws" className="img-fluid service-image " />


							</div>
						</div>
						{/* section 3 */}
						<div className="row justify-content-center mt-3" id="service-mob">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-12 order-md-2 order-sm-2">

								<h1 className="service-title">Mobile App Development</h1>
								<div className="service-sub-title">Mobile apps | iOS app | Android Apps </div>
								<div className="service-content mt-4">
									<p>Custom mobile app development is one of our passions. Our knowledge and experience of how users interact with apps helps in delivering high quality iphone and android apps.</p>
									<p>Using the latest technologies and industry experience, our expert developers will provide you successful Android/ IOs apps. Our quality analyst team ensures the apps are tested against various segments so that you will get highly productive and user friendly mobile applications.</p>

								</div>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 order-3 text-center">
								<img src="images/service/mobile-app.svg" alt="mobile_app" className="img-fluid service-image" />

							</div>
						</div>
						{/* section 4 */}
						<div className="row justify-content-center mt-3" id="service-design">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12">
								<h1 className="service-title">Design & Prototyping</h1>
								<div className="service-sub-title">Style guide | Wireframe | PSD MOCKUP</div>
								<div className="service-content mt-4">
									<p>Planning-out apps and websites, taking into careful consideration the needs and motivations of your users and the goals of your business.</p>
									<p> Creating modern, beautiful, and functional designs to enhance and optimize the user experience. Improving usability, reducing time on task, and making other measurable improvements.</p>
								</div>
								<a href="/services/design-and-prototyping" className="nj-who-we-are-button float-right font-12 font-bold">read more <span className="nj-arrow"><span class="hashtag-arrow btn-right-arrow"></span></span></a>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 text-center ">
								<img src="images/service/prototype.svg" alt="design_prototype" className="img-fluid service-image" />

							</div>
						</div>
						{/* section 5 */}
						<div className="row justify-content-center mt-3" id="service-ui">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-12 order-md-2 order-sm-2">

								<h1 className="service-title">UI Development </h1>
								<div className="service-sub-title">Clean Code | Responsive | Light weight</div>
								<div className="service-content mt-4">
									<p>Our team of web developers transforms designs into rich, interactive websites that are intuitive, user-friendly and responsive. </p>
									<p>We’re experts in content management systems, front-end web development, and custom integrations.</p>
									<p> We believe performance is the key!</p>
								</div>
								<a href="/services/ui-development" class="nj-who-we-are-button float-right font-12 font-bold">read more <span class="nj-arrow"><span class="hashtag-arrow btn-right-arrow"></span></span></a>

							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 order-3 text-center">
								<img src="images/service/ui-development.svg" alt="ui" className="img-fluid service-image" />
							</div>
						</div>
						{/* section 6 */}
						<div className="row justify-content-center mt-3" id="service-cms">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12">
								<h1 className="service-title">CMS – WordPress </h1>
								<div className="service-sub-title">PSD to WP | Custom WP | Plugins | Integrations</div>
								<div className="service-content mt-4">
									<p>We build technically-complex WordPress instances that scale.</p>
									<p> We are deeply involved in high-performance WordPress website development services through its team of expert WordPress developers who have several years of experience in providing highly compelling and customized WordPress solutions.</p>
								</div>
								<a href="/services/wordpress-development" className="nj-who-we-are-button float-right font-12 font-bold">read more <span className="nj-arrow"><span class="hashtag-arrow btn-right-arrow"></span></span></a>

							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 text-center ">
								<img src="images/service/wp.svg" alt="wp" className="img-fluid service-image" />

							</div>


						</div>
						{/* section 7 */}
						<div className="row justify-content-center mt-3" id="service-shopify">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-12 order-md-2 order-sm-2">
								<h1 className="service-title">Shopify Experts</h1>
								<div className="mt-4 mb-4">
									<img src="images/service/shopify-partner.svg" alt="shopify-partner" className="img-fluid mx-auto my-auto pr-4" />
									<img src="images/service/shopify-experts.svg" alt="shopify-experts" className="img-fluid mx-auto my-auto" />
								</div>
								<div className="service-sub-title">Shopify Design & Development | Site Migration | Store Setup</div>
								<div className="service-content mt-4">
									<p>Get your store online with the class-leading eCommerce platform, Shopify. Our Shopify experts are dedicated to build Shopify stores that are not only pixel perfect responsive websites but also promote your business growth.</p>
									<p> Dedicated to delivering excellence in ecommerce for our clients.</p>
								</div>
								<a href="/shopify-experts" className="nj-who-we-are-button float-right font-12 font-bold">read more <span className="nj-arrow"><span class="hashtag-arrow btn-right-arrow"></span></span></a>



							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 order-3 text-center">
								<img src="images/service/shopify.svg" alt="shopify" className="img-fluid service-image" />

							</div>
						</div>
						{/* section 8 */}
						<div className="row justify-content-center mt-3" id="service-filemaker">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12 ">
								<h1 className="service-title">FileMaker Pro Development</h1>
								<div className="service-sub-title">Filemaker development | Multi-platform apps Filemaker Database design</div>
								<div className="service-content mt-4">
									<p>We provide expert Filemaker development services across multiple platforms.</p>
									<p> Our experts throws excellent quality Customized FileMaker Apps for all business requirements in multiple industry domains.</p>
								</div>


							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 text-center">
								<img src="images/service/file-maker.svg" alt="filemaker" className="img-fluid service-image" />

							</div>
						</div>

						{/* section 9 */}
						<div className="row justify-content-center mt-3" id="service-ui">
							<div className="col-lg-12 mt-5 mb-5"> </div>

							<div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-12 order-md-2 order-sm-2">

								<h1 className="service-title">Blockchain Development</h1>
								<div className="service-sub-title">Smart contract |Ethereum | Dapp</div>
								<div className="service-content mt-4">
									<p>Blockchain has become most discussed topic around many businesses. As this technology has made a new gateway,
									Hashtag focus on deploys custom high quality blockchain applications with an interactive and engaging approach.</p>
									<p>Hashtag Systems is the place where the innovations come out. Lets use the opportunity to build something awesome together.</p>
								</div>
								<a href="/services/blockchain-development" class="nj-who-we-are-button float-right font-12 font-bold">read more <span class="nj-arrow"><span class="hashtag-arrow btn-right-arrow"></span></span></a>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 order-3 text-center">
								<img src="/images/blockchain/blockchain.svg" alt="blockchain" className="img-fluid service-image" />
							</div>
						</div>

					</div>
					{/* contact form */}

					<Contact></Contact>
				</section>
				<Footer></Footer>
			</div>

		)
	}
}
