import React, { Component } from "react";
import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Contact from "../../components/contacts/index.jsx";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
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
        slug: "careers",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class Careers extends Component {
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
      <div className="careers-main" id="careers-main">
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
                      <h1>
                        <span className="sub-text-above-main-title title-white">
                          Join Us
                        </span>
                        <span className="main-title title-white d-block">
                          Careers
                        </span>{" "}
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <h2 className="bold-contents service-content-box pl-4">
                        We're seeking brilliant minds to join our dynamic team
                        and make it even better.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* section 2 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div class="col-sm-10 text-center ipad-pro-only">
                <h3 className="main-title  title-orange">
                  Weare looking for future leaders!
                </h3>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 ">
                <p className="main-title title-orange ipad-pro-none ">
                  We are looking for future leaders!{" "}
                </p>
                <div className="shopify-content mt-4">
                  <p className="text-justify">
                    <span className="d-xxl-block text-justify">
                      Are you a person with a creative approach to problem
                      solving? Do you have the ability to thrive in a fast-paced
                      environment, a desire to learn and be passionate about
                      technology? We might just be looking for someone exactly
                      like you to work with. Lets see what we can create with it
                      by working together.
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="images/careers/job-interview-conversation.svg"
                  alt="interview-image"
                  className="img-fluid shopify-image mobile-image-border storefront-img lazyload"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid career-join-bg justify-content-center">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col-12 join-team-title-row">
                    <p className="text-above-main-title text-center">
                      ARE YOU READY TO STEP INTO THE LOUNGE?
                    </p>
                    {/*<h1 className="main-title title-orange text-center">Join Team</h1>*/}
                  </div>
                </div>

                <div className="row  mt-5 section-2-row pl-3 pr-3 first-career-row justify-content-center">
                  {/*<div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                       
                        <h4 className="text-level-5 title-black">Snr. Visual Designer</h4>
                        <p className="job-location"><img src="images/home/location.svg" alt="location" class="address-icons"/>Kochi, KL </p>
                        <hr className="hashtag-underline ml-2"/>
                         <p>Contract</p>
                        
                    </div>
                </div>*/}
                  <div className="col-lg-4 col-sm-6 mob-padding c-height">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="images/careers/software-engineers-d.svg"
                        alt="interview-image"
                        className="img-fluid vacancy-section-image lazyload"
                      />
                      <p className=" title-black hashtag-careers-vacancies ">
                        EXPERIENCED PROFESSIONALS
                      </p>
                      <hr className="hashtag-underline-new ml-2" />
                      <p className="pt-4 pb-4 first-para text-justify">
                        Are you a person with a creative approach to problem
                        solving? Do you have the ability to thrive in a
                        fast-paced environment.
                      </p>
                      <div class="contact-form-link">
                        <a href="/contact-us">
                          <div class="btn-group form-btn">
                            <button
                              type="button"
                              class="btn form-button font-12 font-bold"
                            >
                              JOIN US
                            </button>
                            <button
                              type="button"
                              class="btn form-button-child px-3"
                            >
                              <span class="">
                                <span class="form-btn-arrow btn-right-arrow"></span>
                              </span>
                            </button>
                            <div class="dropdown-menu"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 mob-padding ">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="images/careers/fresher-developer.svg"
                        alt="interview-image"
                        className="img-fluid vacancy-section-image lazyload"
                      />
                      <p className=" title-black hashtag-careers-vacancies">
                        FRESHERS AND ENTRY LEVEL PROFESSIONALS
                      </p>
                      <hr className="hashtag-underline-new ml-2 " />
                      <p className="pt-2 pb-2 first-para text-justify">
                        Are you a person with a creative approach to problem
                        solving? Do you have the ability to thrive in a
                        fast-paced environment.{" "}
                      </p>
                      <div class="contact-form-link">
                        <a href="/contact-us">
                          <div class="btn-group form-btn">
                            <button
                              type="button"
                              class="btn form-button font-12 font-bold"
                            >
                              JOIN US
                            </button>
                            <button
                              type="button"
                              class="btn form-button-child px-3"
                            >
                              <span class="">
                                <span class="form-btn-arrow btn-right-arrow"></span>
                              </span>
                            </button>
                            <div class="dropdown-menu"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* two column list section */}

          <div className="container shopify-benifits-section">
            <div className="row">
              <div class="col-12 coming__soon">
                <p class="text-above-main-title text-center">
                  THERE IS ALWAYS ROOM FOR MOTIVATED TECH ENTHUSIASTS
                </p>
                <h3 class="main-title title-orange text-center">Coming Soon</h3>
              </div>
            </div>
            {/* section 1 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <p className="shopify-title text-level-4">Coding Club</p>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list text-justify">
                      <li>A channel for people who want to get into coding.</li>
                      <li>
                        A 360 degree learning experience for anyone who is
                        interested.
                      </li>
                      <li>
                        Grow your skills at an industry leading web development
                        firm.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="images/careers/coding-club.svg"
                  alt="coding-club"
                  className="img-fluid shopify-image mobile-image-border lazyload"
                />
              </div>
            </div>

            {/* section 2 */}
          </div>

          <div className="container-fluid ask-expert-section hire-expert">
            <div className="row">
              <div className="container">
                <div className="row justify-content-center about-row pl-3 pr-3">
                  <div className="col-sm-10">
                    <h3 className="main-title title-orange text-center">
                      Equal Opportunities
                    </h3>

                    <p className="nj-who-we-are-sub-content text-center">
                      <p class="font-normal text-justify">
                        We are an equal opportunities employer and do not
                        discriminate on the basis of race, religion, color,
                        national origin, gender, sexual orientation, age,
                        marital status, or disability status. We are committed
                        to creating a diverse environment that every team member
                        feels proud to be part of, and welcome applications from
                        any people in any country across the world
                      </p>
                      <img
                        src="images/careers/orange-arrow.png"
                        alt="arrow"
                        className="lazyload"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}

          <Contact page="careers"></Contact>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
