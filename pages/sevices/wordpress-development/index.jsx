import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Contact from '../../../components/contacts/index.jsx';
import Wpslider from '../../../components/wordpress-slider/index.jsx';
import Wpcarousel from '../../../components/wp-carousel/index.jsx';
import Wpsliderv2 from '../../../components/wordpress-sliderv2/index.jsx';
import Testimonial from '../../../components/testimonial/index.jsx';
import DocumentMeta from 'react-document-meta';
import Slide from "react-reveal/Reveal";
import Axios from "axios";
import https from "https";

export async function getServerSideProps() {
  let data = [];

  const instance = Axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  await instance
    .get("https://api.hashtag-ca.com/api/v1/metadata", {
      params: {
        page_type: "static",
        slug: "sevices",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

require('typeface-montserrat')

export default class Shopify extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data,
    };
  }
  render() {
    
	  let { data } = this.state;

	  const recentWork = [
        {
          id: 1,
          src: "../images/wordpress/67-baltimore.png",
          alt: "slider1",
        },{
          id: 2,
          src: "../images/wordpress/face-shield.png",
          alt: "slider2",
        },{
          id: 3,
          src: "../images/wordpress/stories-upon.png",
          alt: "slider3",
        },{
          id: 4,
          src: "../images/wordpress/global-moonshot.png",
          alt: "slider4",
        },{
          id: 5,
          src: "../images/wordpress/society-kitchella.png",
          alt: "slider5",
        },{
          id: 6,
          src: "../images/wordpress/sharon-get-organised.png",
          alt: "slider6",
        },{
          id: 7,
          src: "../images/wordpress/fameleon.png",
          alt: "slider7",
        }
      ];
	//   console.log(data)
    return (

      <div className="wp-main" id="wp-main">
        <DocumentMeta {...meta} />
        <Header
          title={data.data.title}
          description={data.data.description}
          keywords={data.data.keywords}
        ></Header>
        <section class="content-container">
          <div className="container-fluid shopifyBg p-0 m-0">
            <div className="shopify-bg-right">
              <div className="shopify-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center shopify-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="sub-text-above-main-title title-white">
                        Custom Solutions for
                      </p>
                      <h1 className="main-title  title-white d-block">
                        Wordpress <br />
                        development
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <p className="bold-contents shopify-content-box pl-4">
                        We help agencies code custom Wordpress Solutions. A
                        Silicon Valley Company serving customers worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center mt-5 section-2-row">
              <div className="col-12">
                <p className="text-above-main-title text-center">
                  WE OFFER A WIDE RANGE OF
                </p>
                <h1 className="main-title title-orange text-center">
                  Services On
                </h1>
              </div>
            </div>

            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img
                      src="../images/wordpress/web-programming.svg"
                      alt="wp_dev"
                    />
                    <h4 className="text-level-5 title-black">
                      WordPress Development
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img src="../images/wordpress/group.svg" alt="wp_theme" />
                    <h4 className="text-level-5 title-black">
                      WordPress Theme Customization
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img
                      src="../images/wordpress/puzzke.svg"
                      alt="plugin_dev"
                    />
                    <h4 className="text-level-5 title-black">
                      WordPress Plugin Development
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img src="../images/wordpress/psd-wp.svg" alt="psd_to_wp" />
                    <h4 className="text-level-5 title-black">
                      PSD to WordPress Conversion
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
            </div>

            <div className="row justify-content-center mt-lg-5 mt-md-0 mt-sm-0 section-2-row pl-3 pr-3">
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img
                      src="../images/wordpress/html-wp.svg"
                      alt="html_to_wp"
                    />
                    <h4 className="text-level-5 title-black">
                      HTML to WordPress Conversion
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img src="../images/wordpress/development.svg" alt="hire" />
                    <h4 className="text-level-5 title-black">
                      Hire WordPress Developer
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
              <Slide bottom>
                <div className="col-lg-3 col-sm-6 mob-padding">
                  <div className="what-we-do-border-style what-we-do-responsive">
                    <img
                      src="../images/wordpress/education.svg"
                      alt="training"
                    />
                    <h4 className="text-level-5 title-black">
                      Corporate Traning WP Development
                    </h4>
                    <hr className="hashtag-underline ml-2" />
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <div className="container-fluid wordpress-section-3 top-index">
            <div className="row">
              <div class="col-12 wp-sec-3-content shopify-sec-3-content">
                <p class="text-above-main-title text-center">OUR EXPERIENCE</p>
                <h1 class="main-title title-orange text-center">
                  Recent Works
                </h1>
              </div>
            </div>
            {/*section 3 */}

            {/* <Wpslider> </Wpslider> */}
             <Wpsliderv2 images={recentWork}> </Wpsliderv2>
          </div>
          <div className="container-fluid ask-expert-section">
            <div className="row">
              <div className="container">
                <div className="row justify-content-center about-row pl-3 pr-3">
                  <div className="col-12 col-lg-5 col-sm-6 col-md-12">
                    <p className="text-above-main-title">FREE CONSULTATIONS</p>
                    <h1 className="main-title">
                      <span class="title-orange d-block">Ask Our Expert</span>
                    </h1>
                    <p className="hash-content-col title-black why-us-hash-content">
                      <p>
                        Not sure if WordPress is the right solution for you?
                        <br />
                        Ask our WordPress expert
                      </p>
                    </p>
                    <h1 className="main-title">
                      <img
                        src="../images/wordpress/wp-quoute.svg"
                        alt="quote"
                      />
                    </h1>

                    <p className="nj-who-we-are-sub-content">
                      <p className="font-normal">
                        When they say experts, they mean it!
                        <br />
                        From the beginning the team helped to structure every
                        projects nicely so it was easy to stay on track. They
                        are also very responsive with any questions and
                        resolving issues, even beyond the project which is
                        really appreciated. I can always trust them.
                      </p>
                    </p>
                    <div className="contact-form-link">
                      <a href="/contact-us">
                        {" "}
                        <div className="btn-group form-btn">
                          <button
                            type="button"
                            className="btn form-button font-12 font-bold"
                          >
                            LET'S CONNECT
                          </button>
                          <button
                            type="button"
                            className="btn form-button-child px-3"
                          >
                            <span className="">
                              <span className="form-btn-arrow btn-right-arrow"></span>
                            </span>
                          </button>
                          <div className="dropdown-menu"></div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="col-12 col-lg-5 col-sm-6 col-md-12 expert-img-section">
                    <img
                      className="experts-img"
                      src="../images/wordpress/tony-hashtag-sys.png"
                      alt="tony-hashtag"
                    />
                    <h1 className="shopify-title title-margin text-center text-level-4">
                      Tony Zeoli
                    </h1>
                    <p className="nj-who-we-are-sub-content text-center">
                      <p className="font-normal small-font font-italics">
                        Experienced product manager,
                        <br />
                        Digital strategist and WordPress technical solution
                        consultant
                      </p>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid plugin-dev-section">
            <div className="container">
              <div class="row">
                <div class="col-12 plugin-integration-section shopify-sec-3-content">
                  <p class="text-above-main-title text-center">
                    LET OUR EXPERTS SUGGEST THE BEST PLUGIN INTEGRATION FOR YOUR
                    WORDPRESS
                  </p>
                  <h1 class="main-title title-orange text-center">
                    Plugin Integration
                  </h1>
                </div>
              </div>

               <div className="d-block d-sm-none"><Wpcarousel> </Wpcarousel></div>
               {/*<div className="d-block d-sm-none"><Wpsliderv2> </Wpsliderv2></div>*/}

              <div class="desktop-only-expertise d-none d-sm-block">
                <div className="row justify-content-center about-row pl-3 pr-3 pt-4">
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/acf-plugin.svg"
                      alt="acf-plugin"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/all-in-one-seo.svg"
                      alt="all-in-one-seo"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/autoptimize.svg"
                      alt="autoptimize"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img src="../images/wordpress/bbpres.svg" alt="bbpres" />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/buddy-press.svg"
                      alt="buddy-press"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/classic-editor.svg"
                      alt="classic-editor"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/cloudfare.svg"
                      alt="cloudfare"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/disable-comment.svg"
                      alt="disable-comment"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/event-manager.svg"
                      alt="event-manager"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/acf-plugin.svg"
                      alt="acf-plugin"
                    />{" "}
                  </div>
                </div>

                <div className="row justify-content-center about-row pl-3 pr-3 pt-4">
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/featured-video.svg"
                      alt="featured-video"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/filemanager.svg"
                      alt="filemanager"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/google-map.svg"
                      alt="google-map"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/gravity-form.svg"
                      alt="gravity-form"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img src="../images/wordpress/jetpack.svg" alt="jetpack" />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/layer-slider.svg"
                      alt="layer-slider"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/learnpress.svg"
                      alt="learnpress"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/mailichimp.svg"
                      alt="mailchimp"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/openmenu.svg"
                      alt="openmenu"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/paid-member-pro.svg"
                      alt="paid-member-pro"
                    />{" "}
                  </div>
                </div>
                <div className="row justify-content-center about-row pl-3 pr-3 pt-4">
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/pdf-plugin.svg"
                      alt="pdf-plugin"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/slider-revolution.svg"
                      alt="slider-revolution"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img src="../images/wordpress/smush.svg" alt="smush" />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img src="../images/wordpress/ssl.svg" alt="ssl" />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/woocommerce.svg"
                      alt="woocommerce"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/woocommerce-service.svg"
                      alt="woocommerce-service"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img
                      src="../images/wordpress/word-defence.svg"
                      alt="word-defence"
                    />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img src="../images/wordpress/wp-page.svg" alt="wp-page" />{" "}
                  </div>
                  <div class="col-lg-1 col-md-1">
                    <img src="../images/wordpress/yoast.svg" alt="yoast" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="container-fluid testimonial-section">
            <div className="row">
              <div className="container">
                <div class="row">
                  <div class="col-12">
                    <p class="text-above-main-title text-center testimonial-margin">
                      WHAT CLIENT SAY ABOUT US
                    </p>
                    <h1 class="main-title title-orange text-center">
                      Testimonials
                    </h1>

                    <Testimonial></Testimonial>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>

          {/* contact form */}

          <Contact></Contact>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
