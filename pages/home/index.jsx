import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";

const Carousel = dynamic(() => import("../../components/carousel/index.jsx"), { ssr: false,});
const Header = dynamic(() => import("../../components/header/index.jsx"));
const Footer = dynamic(() => import("../../components/footer/index.jsx"), {ssr: false,});
const Contact = dynamic(() => import("../../components/contacts/index.jsx"), {ssr: false,});
const Slide = dynamic(() => import("react-reveal/Reveal"), { ssr: false });

import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
require("typeface-montserrat");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabindex: 1,
    };
  }
  render() {
    let { tabindex } = this.state;
    return (
      <div className="home-main" id="home-main">
        {/*<div className="container-fluid section-one-bg p-0">*/}

        <Header
          title={this.props.title}
          description={this.props.description}
          keywords={this.props.keywords}
          canonical_tags={this.props.canonical}
        />

        <div className="section-one-bg">
          <div className="section-one-bg-small-device m-0 d-none d-xl-block">
            <div className="container section-one-content ">
              <div className="row justify-content-center  pl-3 pr-3">
                <div className="col-12 section-one-text">
                  <h1 className="sub-text-above-main-title">
                    A Full stack development company
                  </h1>
                  <p className="banner-main-title">
                    <span
                      className="mobile-white title-orange d-block"
                      id="banner"
                    >
                      Solutions on
                    </span>
                    <span className="title-black">
                      {" "}
                      Web, Mobile &amp; Cloud
                    </span>
                    <p className="home-dev sub-text-above-main-title title-orange">
                      <span className="fullstack-dev">
                        # Full Stack Development
                      </span>
                      <span className="blockchain-dev">
                        # Blockchain Development
                      </span>
                      <span className="filemaker-dev">
                        # FileMaker Development
                      </span>{" "}
                    </p>
                  </p>

                  <div className="learn-more home-lm-link-vs">
                    <Link href="/services" className="sol-but-ab">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-hashtag font-bold"
                        >
                          LEARN MORE
                        </button>
                        <button type="button" className="btn  px-3">
                          <span className="">
                            <span className="hashtag-arrow btn-down-arrow"></span>
                          </span>
                        </button>
                        <div className="dropdown-menu"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block d-xl-none">
          <div className="container-fluid mobile-banner">
            <div className="row justify-content-center">
              <div className="col-12 section-one-text">
                <h1 className="text-above-main-title-first-mob text-center">
                  A Full stack development company
                </h1>
                <p className="main-title-first-mob text-center">
                  <span
                    className="mobile-white title-orange-first-mob d-block"
                    id="banner"
                  >
                    Solutions on
                  </span>
                  <span className="title-black-first-mob">
                    {" "}
                    Web, Mobile &amp; Cloud
                  </span>
                </p>
                <div className="text-center">
                  <a className="sol-but-ab" href="/services">
                    <div className="btn-group text-center">
                      <button
                        type="button "
                        className="btn btn-hashtag font-bold"
                      >
                        LEARN MORE
                      </button>
                      <button type="button" className="btn  px-3">
                        <span className="">
                          <span className="hashtag-arrow btn-down-arrow"></span>
                        </span>
                      </button>
                      <div className="dropdown-menu"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*</div>*/}
        <div className="container-fluid who-we-section">
          <div className="row who-we-section-content">
            <div
              className="col-12 col-sm-12 col-lg-4 col-xxl-3 who-we-left-bg d-none d-md-none d-lg-block"
              id="who-we-section"
            >
            </div>
            <div className="col-12 col-sm-12 col-lg-2 col-xxl-3 who-we-are-middle-text-1">
              <p className="text-above-main-title" id="section02">
                SHORTLY ABOUT US
              </p>
              <h2 className="main-title">
                <span className="title-orange d-block">Who&nbsp;</span>
                <span className="title-orange">we are</span>
              </h2>
              <hr className="hashtag-underline" />
            </div>
            <div className="col-12 col-sm-12 col-lg-4 col-xxl-3 who-we-are-middle-text-2">
              <p className="hash-content-col text-justify">
                Hashtag Systems Inc, an international Software development and
                outsourcing company with its headquarters in Sunnyvale,
                California and development centers in San Diego, California &
                Kochi
              </p>
              <p
                className="nj-who-we-are-sub-content mt-5 text-justify
              "
              >
                Our team is set to chase innovation in every stride and
                revolutionize the world of software in order to deliver the best
                to our clients worldwide. <br />
                We deliver custom software development projects geared to
                surpass the expectations of our clients. Lets create responsive
                applications that adapt to your customers’ habits
              </p>
              <a
                href="/about-us"
                className="nj-who-we-are-button float-right font-12 font-bold mt-4"
              >
                read more{" "}
                <span className="nj-arrow">
                  <span className="hashtag-arrow btn-right-arrow"></span>
                </span>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-lg-2 col-xxl-3 who-we-right-bg d-none d-md-none d-lg-block"></div>
          </div>
        </div>

        <div className="container-fluid section-three-bg mb-5">
          <div className="container section-three-content ">
            <div className="row justify-content-center  pl-3 pr-3 mob-padding">
              <div className="col-12  section-three-text">
                <h3 className="main-title">
                  <span className="title-orange d-block mob-left text-center">
                    What we do
                  </span>
                  <div className="horizontal-line-middle mob-left mob-line-margin"></div>
                </h3>

                <p className="hash-content-col mob-left  text-center mt-3 text-justify">
                  We work with businesses of all sizes in a wide range of
                  industries and niches.
                </p>

                <div className="row mt-5">
                  <div className="col-lg-4 col-sm-12 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        class="lazyload"
                        data-src="images/business-process-automation.svg"
                        alt="business-process-automation"
                      />
                      <p className="text-level-4">
                        Business process automation
                      </p>
                      <hr className="hashtag-underline ml-2" />
                      <p className="text-justify">
                        We'll automate your business processes means that you
                        will no longer have to deal with them. You just let the
                        software take care of it.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        class="lazyload"
                        data-src="images/web-application.svg"
                        alt="web-application"
                      />
                      <p className="text-level-4">Web applications</p>
                      <hr className="hashtag-underline ml-2" />
                      <p className="text-justify">
                        We'll create and deploy mission-critical, Robust Web
                        apps that scale with your business needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 mob-padding">
                    <div className="what-we-do-border-style ">
                      <img
                        class="lazyload"
                        data-src="images/e-commerce.svg"
                        alt="e-commerce"
                      />
                      <p className="text-level-4">E-commerce</p>
                      <hr className="hashtag-underline ml-2" />
                      <p className="text-justify">
                        Turn your products into money by selling them on your
                        own online store. We'll help you become a leading
                        eCommerce player in your industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-5 mob-padding res-bottom-margin ">
                  <div className="col-offset-lg-2 col-lg-4 col-sm-12 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        class="lazyload"
                        data-src="images/Monitoring.svg"
                        alt="monitoring"
                      />
                      <p className="text-level-4">
                        Monitoring <br />& support
                      </p>
                      <hr className="hashtag-underline ml-2" />
                      <p className="text-justify">
                        We run a dedicated IT infrastructure monitoring to
                        ensure that applications, devices, and infrastructure
                        are performing as they should be.
                      </p>
                    </div>
                  </div>
                  <div className="col-offset-lg-2 col-lg-4 col-sm-12  mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        class="lazyload"
                        data-src="images/Creative conceptual.svg"
                        alt="creative_design"
                      />
                      <p className="text-level-4">
                        Creative & conceptual design
                      </p>
                      <hr className="hashtag-underline ml-2" />
                      <p className="text-justify">
                        Our creative designers will turn the spark of an idea
                        into an innovative new design concept. Let's
                        collaborate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid section-four-bg mb-5">
          <div classname="section-four-left-bg">
            <div className="container section-four-content">
              <div className="row justify-content-center pl-3 pr-3">
                <div className="col-12 col-lg-5 col-md-12 content-four-section">
                  <p className="text-above-main-title title-white">
                    WHY CLIENTS CHOOSE US
                  </p>

                  <h4 className="main-title">
                    <span className="title-white d-block">Why us?</span>
                  </h4>

                  <p className="hash-content-col title-white why-us-hash-content">
                    <p className="pt-4">
                      We believe our customers deserve the best and quality is
                      something we dare not to compromise!{" "}
                    </p>
                    <p className="pt-2 text-justify">
                      We ensure impeccable service right from the second we
                      receive the demand from our valuable customer.{" "}
                    </p>
                    <p className="pt-2 text-justify">
                      {" "}
                      Our maintenance and support team would ensure the same
                      even after we deliver the product.{" "}
                    </p>
                  </p>
                </div>
                {/* <div className="col-12 col-lg-1 col-md-12"></div> */}
                <div className="col-12 col-lg-3 col-md-6 why-us-first-section">
                  <Slide bottom>
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          class="lazyload"
                          data-src="images/home/why-us/team.svg"
                          alt="team"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Dedicated
                        <br />
                        teams!
                      </p>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          class="lazyload"
                          data-src="images/home/why-us/chat.svg"
                          alt="communication"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Effective <br />
                        communication!
                      </p>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          class="lazyload"
                          data-src="images/home/why-us/group.svg"
                          alt="agile"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Agile - watch your
                        <br />
                        dreams grow!
                      </p>
                    </div>
                  </Slide>
                </div>
                <div className="col-12 col-lg-3 col-md-6 why-us-second-section">
                  <Slide bottom>
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          className="equality-image lazyload"
                          data-src="images/home/why-us/equality.svg"
                          alt="quality"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Quality in <br />
                        every stride!
                      </p>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          class="lazyload"
                          data-src="images/home/why-us/process.svg"
                          alt="process"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Impeccably
                        <br />
                        process oriented!
                      </p>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          class="lazyload"
                          data-src="images/home/why-us/support.svg"
                          alt="support"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Constant
                        <br />
                        support!
                      </p>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid section-five-bg  pb-5">
          <div className="container">
            <div className="row justify-content-center pt-5 pl-3 pr-3">
              <div className="col-12">
                <div className="text-above-main-title text-center">
                  WE ARE PROFESSIONALS
                </div>
                <div className="main-title">
                  <span className="title-orange d-block text-center">
                    Our Expertise
                  </span>
                </div>
              </div>
              <div className="horizontal-line-middle"></div>
            </div>
            <div className="d-block d-sm-none">
              {" "}
              <Carousel> </Carousel>
            </div>

            <div className="desktop-only-expertise d-none d-sm-block">
              {" "}
              <div className="row justify-content-center mt-2">
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/html5.svg"
                    alt="html5"
                    className="img-fluid mx-auto my-auto  lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/mysql.svg"
                    alt="mysql"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/amazon.svg"
                    alt="amazon"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/shopify.svg"
                    alt="shopify"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/php.svg"
                    alt="php"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
              </div>
              {/* next set images */}
              <div className="row justify-content-center  mt-2">
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/bootstrap.svg"
                    alt="bootstrap"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/node-js.svg"
                    alt="node_js"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/angular-js.svg"
                    alt="angular_js"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/ethereum.svg"
                    alt="ethereum"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/react-js.svg"
                    alt="react_js"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
              </div>
              {/* next set images */}
              <div className="row justify-content-center  mt-2">
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/wordpress.svg"
                    alt="wordpress"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/jquery.svg"
                    alt="jquery"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/codeigniter.svg"
                    alt="codeigniter"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/django.svg"
                    alt="django"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/python.svg"
                    alt="python"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
              </div>
              {/* next set images */}
              <div className="row justify-content-center  mt-2">
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/mongodb.svg"
                    alt="mongodb"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5 ">
                  <img
                    data-src="images/home/truffle.svg"
                    alt="truffle"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/solidity.svg"
                    alt="solidity"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/docker.svg"
                    alt="docker"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                  <img
                    data-src="images/home/ionic.svg"
                    alt="ionic"
                    className="img-fluid mx-auto my-auto lazyload"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid section-six-bg pt-5 pb-md-5 pb-sm-3">
          <div className="container">
            <div className="row justify-content-center pl-3 pr-3">
              <div className="col-12">
                <p className="text-above-main-title mob-left text-center">
                  WE ARE PROFESSIONALS
                </p>
                <p className="main-title">
                  <span className="title-orange d-block mob-left text-center">
                    Contacts
                  </span>
                </p>
              </div>
              <div className="horizontal-line-middle mob-left mob-line-margin"></div>
            </div>
            <div className="row justify-content-center mt-5 mb-md-5 mb-sm-0">
              &nbsp;
              <div className="col-12" id="tabs">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className={`nav-item nav-link ${
                          tabindex === 1 ? "active" : ""
                        }`}
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        onClick={(e) => {
                          e.preventDefault(), this.setState({ tabindex: 1 });
                        }}
                      >
                        Sunnyvale
                      </a>
                      <a
                        className={`nav-item nav-link ${
                          tabindex === 2 ? "active" : ""
                        }`}
                        id="nav-sanjose-tab"
                        data-toggle="tab"
                        href="#nav-sanjose"
                        role="tab"
                        aria-controls="nav-sanjose"
                        aria-selected="true"
                        onClick={(e) => {
                          e.preventDefault(), this.setState({ tabindex: 2 });
                        }}
                      >
                        San Jose
                      </a>
                      <a
                        className={`nav-item nav-link ${
                          tabindex === 3 ? "active" : ""
                        }`}
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                        onClick={(e) => {
                          e.preventDefault(), this.setState({ tabindex: 3 });
                        }}
                      >
                        San Diego
                      </a>
                      <a
                        className={`nav-item nav-link ${
                          tabindex === 4 ? "active" : ""
                        }`}
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                        onClick={(e) => {
                          e.preventDefault(), this.setState({ tabindex: 4 });
                        }}
                      >
                        Kochi
                      </a>
                    </div>
                  </nav>
                </div>
                <div
                  className="tab-content py-3 px-3 px-sm-0"
                  id="nav-tabContent"
                >
                  <div
                    className={`tab-pane fade  text-left pl-3 ${
                      tabindex === 1 ? "show active" : ""
                    }`}
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row tab-content">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="address-content">
                          <img
                            data-src="images/home/location.svg"
                            alt="location"
                            className="address-icons lazyload"
                          />{" "}
                          <span className="address-content">Sunnyvale</span>
                        </h5>
                        <h5 className="adress-text">
                          <address className="address-text">
                            100 S. Murphy Ave. Suite 200
                            <br />
                            Sunnyvale, CA 94086
                            <br />
                            USA
                          </address>
                        </h5>
                        <img
                          data-src="images/home/phone.svg"
                          alt="phone"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">PHONE</span>
                        <p className="address-text">
                          <a href="tel:+1-408-596-2525">+1 408 596 2525</a>
                        </p>
                        <img
                          data-src="images/home/email.svg"
                          alt="email"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">EMAIL</span>
                        <p className="address-text">
                          {" "}
                          <a
                            href="mailto:info@hashtag-ca.com"
                            className="link-mail"
                          >
                            info@hashtag-ca.com
                          </a>
                        </p>
                        <span className="address-content">FOLLOW US </span>
                        <a
                          href="https://www.linkedin.com/company/hashtag-systems-inc/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/linkedin.svg"
                            alt="linkedin"
                            className="pl-2 pr-2 contact-linkedin lazyload"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/hashtagsystemsca/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/facebook-logo.svg"
                            className="conatct-fb lazyload"
                            alt="facebook"
                          />
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="hash-map h-100">
                          <iframe
                            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5289063403397!2d-122.03185048529588!3d37.37732237983374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb65cf6471b75%3A0x8a1d78f6bdfb3110!2sHashtag%20Systems%20Inc%20-%20Web%20development%20company!5e0!3m2!1sen!2sin!4v1599470282095!5m2!1sen!2sin"
                            className="map-image lazyload"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade  text-left pl-3 ${
                      tabindex === 2 ? "show active" : ""
                    }`}
                    id="nav-sanjose"
                    role="tabpanel"
                    aria-labelledby="nav-sanjose-tab"
                  >
                    <div className="row tab-content">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="address-content">
                          <img
                            data-src="images/home/location.svg"
                            alt="location"
                            className="address-icons lazyload"
                          />{" "}
                          <span className="address-content">San Jose</span>
                        </h5>
                        <h5 className="address-text">
                          99 S Almaden Blvd Suite
                          <br />
                          600 San Jose, CA 95113
                          <br />
                          USA
                          <br />
                        </h5>
                        <img
                          data-src="images/home/phone.svg"
                          alt="phone"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">PHONE</span>
                        <p className="address-text">
                          <a href="tel:+1-408-404-7323">+1 408 404 7323</a>
                        </p>
                        <img
                          data-src="images/home/email.svg"
                          alt="email"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">EMAIL</span>
                        <p className="address-text">
                          <a
                            href="mailto:sjc@hashtag-ca.com"
                            className="link-mail"
                          >
                            sjc@hashtag-ca.com
                          </a>
                        </p>
                        <span className="address-content">FOLLOW US </span>
                        <a
                          href="https://www.linkedin.com/company/hashtag-systems-inc/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/linkedin.svg"
                            className="pl-2 pr-2 contact-linkedin lazyload"
                            alt="linkedin"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/hashtagsystemsca/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/facebook-logo.svg"
                            className="conatct-fb lazyload"
                            alt="facebook"
                          />
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="hash-map h-100">
                          <iframe
                            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.428428473099!2d-121.89654558515603!3d37.332364645262906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca46fe2751d%3A0xac22cd23368a6885!2s99%20S%20Almaden%20Blvd%20%23600%2C%20San%20Jose%2C%20CA%2095113%2C%20USA!5e0!3m2!1sen!2sin!4v1604491251986!5m2!1sen!2sin"
                            className="map-image lazyload"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade  text-left pl-3 ${
                      tabindex === 3 ? "show active" : ""
                    }`}
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row tab-content">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="class-content">
                          <img
                            data-src="images/home/location.svg"
                            alt="location"
                            className="address-icons lazyload"
                          />{" "}
                          <span className="address-content">San Diego</span>
                        </h5>
                        <h5 className="address-text">
                          7770 Regents Rd. #113-385
                          <br />
                          San Diego, CA 92122, <br />
                          USA
                        </h5>
                        <img
                          data-src="images/home/email.svg"
                          alt="email"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">EMAIL</span>
                        <p className="address-text">
                          <a
                            href="mailto:info.SD@hashtag-ca.com"
                            className="link-mail"
                          >
                            info.SD@hashtag-ca.com
                          </a>
                        </p>
                        <span className="address-content">FOLLOW US </span>
                        <a
                          href="https://www.linkedin.com/company/hashtag-systems-inc/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/linkedin.svg"
                            alt="linkedin"
                            className="pl-2 pr-2 contact-linkedin lazyload"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/hashtagsystemsca/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/facebook-logo.svg"
                            className="conatct-fb lazyload"
                            alt="facebook"
                          />
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="hash-map h-100">
                          <iframe
                            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3362449183883!2d-117.22655108533353!3d32.8628218869136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc012bd2a9e523%3A0x9bf6efa5cf00201d!2s7770%20Regents%20Rd%2C%20San%20Diego%2C%20CA%2092122%2C%20USA!5e0!3m2!1sen!2sin!4v1599480789688!5m2!1sen!2sin"
                            className="map-image lazyload"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade  text-left pl-3 ${
                      tabindex === 4 ? "show active" : ""
                    }`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row tab-content">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <h5 className="address-content">
                          <img
                            data-src="images/home/location.svg"
                            alt="location"
                            className="address-icons lazyload"
                          />{" "}
                          <span className="address-content">Kochi</span>
                        </h5>
                        <h5 className="address-text ">
                          Infopark Technology Business Center JNI Stadium,{" "}
                          <br />
                          Kaloor,
                          <br /> Kerala, India
                          <br />
                        </h5>
                        <img
                          data-src="images/home/phone.svg"
                          alt="phone"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">PHONE</span>
                        <p className="address-text">
                          <a href="tel:+91-9207749168">+91 9207749168</a>
                        </p>
                        <img
                          data-src="images/home/email.svg"
                          alt="email"
                          className="address-icons lazyload"
                        />{" "}
                        <span className="address-content">EMAIL</span>
                        <p className="address-text">
                          <a
                            href="mailto:info.kochi@hashtag-ca.com"
                            className="link-mail"
                          >
                            info.kochi@hashtag-ca.com
                          </a>
                        </p>
                        <span className="address-content">FOLLOW US </span>
                        <a
                          href="https://www.linkedin.com/company/hashtag-systems-inc/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/linkedin.svg"
                            className="pl-2 pr-2 contact-linkedin lazyload"
                            alt="linkedin"
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/hashtagsystemsca/"
                          target="_blank"
                        >
                          <img
                            data-src="images/home/facebook-logo.svg"
                            className="conatct-fb lazyload"
                            alt="facebook"
                          />
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="hash-map h-100">
                          <iframe
                            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.262837900139!2d76.29727491404789!3d9.995134242854492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1642da3df1%3A0xbe327fe6330aebf3!2sHashtag%20Systems%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1599470444577!5m2!1sen!2sin"
                            className="map-image lazyload"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              &nbsp; &nbsp; &nbsp;
            </div>
          </div>
        </div>
        {/* contact form */}
        <Contact />
        <Footer />
      </div>
    );
  }
}