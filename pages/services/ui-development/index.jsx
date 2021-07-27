import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Contact from '../../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import Slide from 'react-reveal/Reveal';
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
        slug: "services-ui ",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class UIPage extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data,
    };
  }
  render() {
   
    let { data } = this.state;
    return (
      <div className="contact-main" id="Uidevbanner">
        <div className="wp-main" id="wp-main">
          <Header
            title={data.data.title}
            description={data.data.description}
            keywords={data.data.keywords}
            canonical_tags={data.data.canonical_tags}
          ></Header>
        </div>
        <section class="content-container">
          <div className="container-fluid shopify-bg p-0 m-0 shopifyBg">
            <div className="shopify-bg-right">
              <div className="shopify-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center shopify-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <h1 className="sub-text-above-main-title title-white">
                        We offer solutions for
                      </h1>
                      <h1 className="main-title  title-white d-block">
                        UI <br />
                        Development
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <h2 className="bold-contents shopify-content-box pl-4">
                        A complete front-end makeover for your digital business
                        solutions with immersive visual effects and latest
                        technology trends.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h3 className="main-title title-orange why-bc-sec-tt">
                  Why Us?
                </h3>
                <div className="shopify-content mt-4">
                  <p className="mb-4">
                    We work on certain ethics and our UI development is a
                    reflection of the same. Which brings you unparalleled
                    quality and user experience for your fully functional
                    websites.
                  </p>
                  <p>
                    With concern for your futuristic needs and by holding latest
                    design trends, we make stunningly beautiful yet responsive
                    applications and websites with solid foundations that
                    capture high customer engagement. We believe in Agile
                    development to make sure we are providing you the best in
                    town in flexibility, scalability, quality and speed.
                  </p>
                  <h1 class="main-title">
                    <img src="../images/wordpress/wp-quoute.svg" alt="quote" />
                  </h1>
                  <div className="wp-main">
                    <p class="hash-content-col title-black why-us-hash-content">
                      <p>
                        Give Your Business The Extra Edge With Smart UI/UX That
                        Will Engage Your Audience & Boost Your Brand.
                      </p>
                    </p>
                  </div>
                  <div className="contact-form-link">
                    <a href="/contact-us">
                      {" "}
                      <div className="btn-group form-btn">
                        <button
                          type="button"
                          className="btn form-button font-12 font-bold"
                        >
                          LET`S TALK
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
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="/images/ui/uidev1.svg"
                  alt="ui_dev_img"
                  className="img-fluid shopify-image mobile-image-border storefront-img"
                />
              </div>
            </div>
          </div>

          <div class="wordpress-section-3 pb-5 ">
            <div className="container">
              <div className="row">
                <div class="col-12 wp-sec-3-content shopify-sec-3-content">
                  <h3 class="text-above-main-title text-above-main-title-c text-center mb-0">
                    tackling frontend challenges with ease
                  </h3>
                  <h3 class="main-title title-orange text-center">
                    How Does It Work
                  </h3>
                </div>
              </div>
              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/ui/interaction1.svg"
                        alt="user_experience"
                      />
                      <h4 className="text-level-5 title-black">
                        Interactive and User Experience
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        We design websites that users can connect to. A
                        real-time interaction of a site, guides users towards
                        the information they are looking for. People will get to
                        know your site and your brand better.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img src="../images/ui/software1.svg" alt="cms_designs" />
                      <h4 className="text-level-5 title-black">
                        CMS Ready Designs
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        If your business plays with creating content and
                        publishing it frequently, it needs a strong content
                        management system. Our designs will be featured in this
                        way which can be worked on any CMS services.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img src="../images/ui/startup1.svg" alt="fast" />
                      <h4 className="text-level-5 title-black">
                        Fast and Lightweight
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        When we focus on interactive websites, we've taken good
                        care to keep our page speed lightening fast. We save
                        time and deliver a quality product. We keep our code
                        both light and simple so pages don't get bogged down.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/ui/internet1.svg"
                        alt="mobile_friendly"
                      />
                      <h4 className="text-level-5 title-black">
                        Crafted For Mobile
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        Accessing websites through tablets and mobiles has
                        become trendy. Usability and mobile friendliness should
                        be at the heart of any website. If your website does not
                        provide an enhanced website experience, it's time to
                        amend.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/ui/search-engine1.svg"
                        alt="seo_friendly"
                      />
                      <h4 className="text-level-5 title-black">SEO Friendly</h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        SEO is the key for any website’s success rate. With
                        better SEO strategies and web design process, we will
                        make your website super search-engine friendly, and help
                        to achieve your online marketing goals.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/ui/backlink1.svg"
                        alt="cross_browser"
                      />
                      <h4 className="text-level-5 title-black">
                        Cross Browser Compliance
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        While working with the latest coding standards, we
                        ensure your websites will be accessible through any
                        browsers and any platforms and functions flawlessly. We
                        got it all covered.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>

              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt"></div>
            </div>
          </div>
          <div className="ui-dev-ico top-index bg-white">
            <div className="container">
              <div className="pb-5 pt-5 d-none d-sm-block">
                <div className="row justify-content-center mt-2">
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/reactJS.svg"
                      alt="react_js"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/Bootstrap_logo.svg"
                      alt="bootstrap"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/JavaScript_logo.svg"
                      alt="javascript"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/css.svg"
                      alt="css"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/html-5.svg"
                      alt="html5"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-2">
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/AJAX_logo.svg"
                      alt="ajax"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/AngularJS_logo.svg"
                      alt="angular_js"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/jquery-1.svg"
                      alt="jquery"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/foundation.svg"
                      alt="foundation"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                </div>
              </div>
              <div className="pb-5 pt-5 d-block d-sm-none">
                <div className="row justify-content-center mt-2">
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/reactJS.svg"
                      alt="react_js"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/Bootstrap_logo.svg"
                      alt="bootstrap"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/JavaScript_logo.svg"
                      alt="javascript"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/css.svg"
                      alt="css"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/html-5.svg"
                      alt="html5"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/AJAX_logo.svg"
                      alt="ajax"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/AngularJS_logo.svg"
                      alt="angular_js"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/jquery-1.svg"
                      alt="jquery"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                  <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                    <img
                      src="../images/ui/foundation.svg"
                      alt="foundation"
                      class="img-fluid mx-auto my-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ready-to-get-sec">
            <div className="container">
              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 pt-5 pb-5">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <h3 class="text-above-main-title text-above-main-title-c mb-0">
                    build better - every time
                  </h3>
                  <h3 className="main-title title-orange main-title-rd-gt">
                    Ready To Get Started ?
                  </h3>
                  <div class="col-lg-5 col-md-12 col-sm-12 text-center dp-on-sm">
                    <img
                      src="/images/ui/idea1.svg"
                      alt="idea"
                      className="img-fluid shopify-image mobile-image-border storefront-img"
                    />
                  </div>
                  <div className="shopify-content mt-4">
                    <p>
                      We are so excited to build you a perfect stunning and
                      mobile ready interactive website for you. We have a good
                      track record and extend high resourceful results to our
                      clients.Our custom built web solutions speak with your
                      customers and reflect not only your brand, but also your
                      message.
                    </p>
                    <div className="contact-form-link">
                      <a href="/contact-us">
                        {" "}
                        <div className="btn-group form-btn">
                          <button
                            type="button"
                            className="btn form-button font-12 font-bold"
                          >
                            SAY HELLO
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
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 text-center hd-on-sm">
                  <img
                    src="/images/ui/idea1.svg"
                    alt="idea"
                    className="img-fluid shopify-image mobile-image-border storefront-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <Contact></Contact>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}