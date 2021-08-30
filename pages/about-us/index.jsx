import React, { Component } from "react";

import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Contact from "../../components/contacts/index.jsx";
require("typeface-montserrat");

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
        slug: "about",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

export default class About extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data.data,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="about-main" id="about-main">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
        ></Header>
        <section class="content-container">
          <div className="container-fluid service-bg p-0 m-0 ">
            <div className="service-bg-right">
              <div className="service-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center service-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="sub-text-above-main-title title-white">
                        Who we are
                      </p>
                      <h1 className="main-title title-white d-block">
                        About us
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <h2 className="bold-contents service-content-box pl-4 text-justify">
                        Hashtag Systems Inc., is an international Web
                        development company, headquartered in California,
                        provides cutting edge engineering solutions for
                        world-class brands.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            {/* section 2 */}
            <div className="row justify-content-center mt-5 section-2-row">
              <div class="col-12">
                <div class="text-above-main-title text-center">
                  PERFECT SOLUTION FOR BUSINESS
                </div>
                <h3 class="main-title title-orange text-center">Our values</h3>
                <div class="shopify-sub-title text-center">
                  Dedicated to provide best professional Web Solutions
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="about-section-2">
                  <div className="about-section-2-left">
                    <img
                      src="/images/about/web.svg"
                      alt="Full Stack Web Application Development"
                    />
                  </div>
                  <div className="about-section-2-middle"></div>
                  <div className="about-section-2-content">
                    <p
                      class="text-level-4 title-orange "
                      style={{ marginTop: "20px" }}
                    >
                      # Does it all!{" "}
                    </p>
                    <hr class="hashtag-underline ml-2 " />
                    <p className="text-justify">
                      If you’re looking for custom and complex web development
                      ideas, you have come to the right place. Our talented team
                      with proven figure out the best way to take your business
                      to new heights without ever compromising on the quality.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="about-section-2">
                  <div className="about-section-2-left">
                    <img
                      src="/images/about/value.svg"
                      alt="Full Stack Development Company"
                    />
                  </div>
                  <div className="about-section-2-middle"></div>
                  <div className="about-section-2-content">
                    <p class="text-level-4 title-orange">We value you! </p>
                    <hr class="hashtag-underline ml-2" />
                    <p className="text-justify">
                      We do not classify our customers into various priority
                      list! We respect our customer’s dream and we believe its
                      importance is immeasurable and incomparable!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className=" col-xxl-6 col-lg-6 col-md-12 col-sm-12 ab-v-right">
                <div className="about-section-2 about-section-2-last">
                  <div className="about-section-2-left">
                    <img
                      src="/images/about/global.svg"
                      alt="Full Stack Application"
                    />
                  </div>
                  <div className="about-section-2-middle"></div>
                  <div className="about-section-2-content">
                    <p class="text-level-4 title-orange">Global presence</p>
                    <hr class="hashtag-underline ml-2" />
                    <p className="text-justify">
                      We already have a presence in the United States(San
                      Jose,California) and India (Kochi) and we are happily
                      serving our customers worldwide!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid about-third-section">
            <div className="row">
              <div class="container">
                <div className="row about-row justify-content-center  pl-3 pr-3">
                  <div className="col-12 col-lg-5 col-md-12 hash-team-content">
                    <div className="text-above-main-title title-black">
                      OUR DREAM TEAM
                    </div>
                    <h3 className="main-title">
                      <span class="title-orange d-block"># Team</span>
                    </h3>

                    <p class="hash-content-col title-black why-us-hash-content">
                      <p className="font-normal text-justify">
                        From designers, developers to UX specialists, our
                        talented team of experts work together to build
                        beautiful digital presences for your business. We always
                        aim to provide technical excellence, professional
                        service and value for money to our clients
                      </p>
                      <p>We are looking for future leaders! </p>
                    </p>
                    <div className="contact-form-link">
                      <a href="/careers">
                        <div className="btn-group form-btn">
                          <button
                            type="submit"
                            className="btn form-button font-12 font-bold"
                          >
                            JOIN US
                          </button>
                          <button
                            type="submit"
                            className="btn form-button-child px-3"
                          >
                            <span className="">
                              <span className="form-btn-arrow btn-right-arrow border-orange"></span>
                            </span>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="col-12 col-lg-1 col-md-12"></div>

                  <div className="col-12 col-lg-3 col-md-6 hash-team-first-right">
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          src="/images/about/bas.svg"
                          alt="About Our Company"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        BAs &
                        <br />
                        Architects
                      </p>
                    </div>

                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img src="/images/about/mobapp.svg" alt="mobile_app" />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        {" "}
                        Mobile App
                        <br />
                        Developers
                      </p>
                    </div>

                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img src="/images/about/uiux.svg" alt="ui/ux" />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        {" "}
                        UI \ UX
                        <br />
                        Designers
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 col-md-6 hash-team-second-right">
                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img src="/images/about/webapp.svg" alt="webapp" />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Web App
                        <br />
                        Developers
                      </p>
                    </div>

                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img src="/images/about/qa.svg" alt="qa" />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        {" "}
                        QA
                        <br />
                        Engineers
                      </p>
                    </div>

                    <div className="why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img
                          src="/images/about/performance.svg"
                          alt="performance"
                        />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Performance
                        <br />
                        Engineers
                      </p>
                    </div>

                    <div className="why-us-box last-why-us-box">
                      <div className="why-us-icon why-icon-mobile">
                        <img src="/images/about/support.svg" alt="support" />
                      </div>
                      <p className="title-level-6 title-level-mobile">
                        Customer
                        <br />
                        Support Engineers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}

          <Contact></Contact>
        </section>
       <div className="about__footer">
       <Footer></Footer>
       </div>
      </div>
    );
  }
}
