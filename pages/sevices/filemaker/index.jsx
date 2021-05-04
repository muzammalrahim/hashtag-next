import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Contact from '../../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import Underconstruction from '../../../components/under-construction';
import Testimonial from '../../../components/testimonial/index.jsx';
import Slide from 'react-reveal/Reveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default class filemakerPage extends Component {
  render() {
    const meta = {
        title: 'FileMaker Pro Development - FullStack Web Development| Bay area, California',


        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california'
            }


        }
    };

    const settings = { 
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase:'ease-in-out'
    };

    return (

        <div className="case-study filemaker-service" id="filemaker-service">
            <DocumentMeta {...meta} />
            <Header></Header>
            {/*<Underconstruction></Underconstruction>*/}
            <section className="content-container">

                <div className="common-title-blk">
                    <div className="container">
                      <div className="row shopifyBg">
                        <div className="col-md-6 ">
                          <div className="common-title-wrap px-md-3">
                            <div className="common-head-blk">
                              <h2 className="main-title title-white">Filemaker <br/>Development</h2>
                              <p className="text-white"><strong>We are Filemaker development experts located in California <br/> and serving customers worldwide on various filemaker <br/> solutions and integrations</strong></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="project-about-blk">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-11 offset-md-1 col-lg-5 offset-lg-1">
                          <div className="project-blk-title">
                            <h6 className="text-above-main-title">DETERMINE THE OPTIMAL SOLUTION FOR YOUR UNIQUE NEEDS</h6>
                            <h3 class="main-title title-orange">Introduction</h3>
                          </div>
                          <p>We have been in the business of custom software development solutions for several years. We’ve been serving customers worldwide on various filemaker solutions and integrations and  many other unique needs and demands of today's businesses. Apart from providing exceptional service and support, we also provide filemaker integrations with third party applications, filemaker migrations, training and personalized coaching.</p>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="img-blk">
                              <img src="/images/file-maker/about-img.svg" alt="filemaker_img" />
                            </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="outer-grey-blk">
                  <div className="orange-strip-blk white-centered">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-md-8">
                            <div className="project-blk-title">
                              <h3 class="main-title">Committed to creating solutions that provide value for customers.</h3>
                              <div className="btn-comm">
                                <a href="/contact-us">LET'S TALK</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="features-blk">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="project-blk-title text-center">
                            <h6 className="text-above-main-title">WE OFFER A WIDE RANGE OF</h6>
                            <h3 class="main-title title-orange">FileMaker Development Services</h3>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center mt-5 mx-auto section-2-row pl-3 pr-3 sc-ip-pro">
                        <>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature1.svg" alt="feature1" />
                                <h4 className="text-level-5 title-black">FileMaker Database <br/>Conversions</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature2.svg" alt="feature2" />
                                <h4 className="text-level-5 title-black">Migration to <br/>Filemaker Pro</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature3.svg" alt="feature3" />
                                <h4 className="text-level-5 title-black">FileMaker Go Mobile <br/>Development</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature4.svg" alt="feature4" />
                                <h4 className="text-level-5 title-black">Build a new <br/>Filemaker Solution</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>

                        </>
                      </div>

                      <div className="row justify-content-center  section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt">
                        <>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature5.svg" alt="feature5" />
                                <h4 className="text-level-5 title-black">Application <br/>Optimization</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature6.svg" alt="feature6" />
                                <h4 className="text-level-5 title-black">Update & Ongoing <br/>Support</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>
                          <Slide bottom>
                            <div className="col-lg-3 col-sm-6 mob-padding">
                              <div className="what-we-do-border-style what-we-do-responsive">
                                <img src="/images/file-maker/feature7.svg" alt="feature7" />
                                <h4 className="text-level-5 title-black">Third Party <br/>Solutions Integration</h4>
                                <hr class="hashtag-underline" />
                              </div>
                            </div>
                          </Slide>
                        </>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-9">
                            <div className="quote-centered">
                                <blockquote cite="https://www.hashtag-ca.com/">“We can help you implement the solutions that bring immediate improvements in your business workflows”</blockquote>
                            </div>
                        </div>
                      </div>

                    </div>
                </div>

                <div className="testimonial-blk">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="project-blk-title text-center">
                                    <h6 className="text-above-main-title  title-white">WHAT CLIENTs SAY ABOUT US</h6>
                                    <h3 class="main-title title-white">Testimonials</h3>
                                    <p>We have built several business process automation solutions that improved the<br/> operational efficiency and effectiveness of several business processes. </p>
                                </div>
                                <div className="testimonial-wrap">
                                    {/*<Slider {...settings} className="testi-slide-outer">
                                        <div className="slide-content">
                                          <div className="cont-top">
                                              <ul className="rtg">
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                              </ul>
                                              <p>The solution satisfied end-user requirements, thanks to Hashtag Systems Inc’s top-notch deliverables. Despite some pacing issues, their cost-effective approach and seamless collaboration set them apart from other vendors.</p>
                                          </div>
                                          <div className="cont-btm">
                                              <div className="author-col">
                                                  <h6>Duleep Pillai</h6>
                                                  <span><em>CEO, Veltec Networks, Inc</em></span>
                                              </div>
                                              <div className="logo-col">
                                                  <span>read more on</span>
                                                  <a href="https://clutch.co/profile/hashtag-systems#review-607452" target="_blank"><img src="../images/wordpress/clutch.svg" alt="" /></a>
                                              </div>
                                          </div>
                                        </div>
                                        <div className="slide-content">
                                          <div className="cont-top">
                                              <ul className="rtg">
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                              </ul>
                                              <p>Phase one is almost completed, and it has resulted in a functional software. While there is a ramp-up period, the team at Hashtag Systems Inc has made the experience effortless. Their accommodating customer service is noteworthy. They're a knowledgable and dedicated team.</p>
                                          </div>
                                          <div className="cont-btm">
                                              <div className="author-col">
                                                  <h6>Aron Bastuba</h6>
                                                  <span><em>Lab Supervisor, Fertility Center of California</em></span>
                                              </div>
                                              <div className="logo-col">
                                                  <span>read more on</span>
                                                  <a href="https://clutch.co/profile/hashtag-systems#review-1399788" target="_blank"><img src="../images/wordpress/clutch.svg" alt="" /></a>
                                              </div>
                                          </div>
                                        </div>
                                        <div className="slide-content">
                                          <div className="cont-top">
                                              <ul className="rtg">
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                              </ul>
                                              <p>The website's sophisticated design has been well-received. Hashtag Systems Inc - California’s expert team inspires confidence throughout the project by communicating clearly from the start. Even though there are time-zone differences, the team responds quickly to any technical concerns that arise.</p>
                                          </div>
                                          <div className="cont-btm">
                                              <div className="author-col">
                                                  <h6>Abin Mathew</h6>
                                                  <span><em>CEO, appOnstream</em></span>
                                              </div>
                                              <div className="logo-col">
                                                  <span>read more on</span>
                                                  <a href="https://clutch.co/profile/hashtag-systems#review-819638" target="_blank"><img src="../images/wordpress/clutch.svg" alt="" /></a>
                                              </div>
                                          </div>
                                        </div>
                                    </Slider>*/}
                                    <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="4" data-expandifr="true" data-height="auto" data-snippets="true" data-clutchcompany-id="62314"></div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="experts-blk">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="project-blk-title text-center">
                          <h6 className="text-above-main-title">proffessional team</h6>
                          <h3 class="main-title title-orange">Our Experts</h3>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-around pt-4">
                      <div className="col-md-3">
                        <div className="expert-col">
                          <h6>Carlos <br/>Machado</h6>
                          <img src="../images/file-maker/man-profile.svg" alt="expert1" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="expert-col">
                          <h6>Selva V</h6>
                          <img src="../images/file-maker/woman-profile.svg" alt="expert2" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 text-center">
                          <div className="btn-comm orange-btn">
                            <a href="/contact-us">LET'S TALK</a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Contact></Contact>

            </section>
            <Footer></Footer>
        </div>
   

    )
  }
}

