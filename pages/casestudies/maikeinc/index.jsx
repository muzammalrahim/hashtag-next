import React, { Component } from "react";

import Underconstruction from "../../../components/under-construction/index.jsx";

import DocumentMeta from "react-document-meta";
import $ from "jquery";
import dynamic from "next/dynamic";
import axios from "axios";
import * as config from "../../../config.js";
const Header = dynamic(() => import("../../../components/header/index.jsx"));
const Slider = dynamic(() => import("react-slick"));
const Slide = dynamic(() => import("react-reveal/Reveal"));
const Footer = dynamic(() => import("../../../components/footer/index.jsx"));
const Contact = dynamic(() => import("../../../components/contacts/index.jsx"));

import "slick-carousel/slick/slick.css";
import "lazysizes";
// import a plugin
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
        slug: "casestudies-maikeinc",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class Maikeinc extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data.data,
    };
  }

  componentDidMount() {}

  render() {
    const { data } = this.state;
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      dots: true,
      arrows: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 4000,
      centerPadding: "23.5%",
      cssEase: "ease-in-out",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: "12%",
          },
        },
      ],
    };

    return (
      <div className="case-study maikeinc" id="maikeinc-case-study">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
        ></Header>
        <section className="content-container case-study">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="common-title-wrap px-md-3">
                    {/* <div className="case-maikeinc-size">
                      <p className="case_study_title">
                        Website development & design
                      </p>
                    </div> */}
                    <h1 className="main-title title-white">Maike Inc</h1>
                    <ul className="project-info">
                      <li>
                        <strong>Industry:</strong>Review and Shopping
                      </li>
                      <li>
                        <strong>Location:</strong>San Jose, California
                      </li>
                      <li>
                        <strong>Established:</strong>Since 2019
                      </li>
                      <li>
                        <strong>Technologies:</strong>Python, Django, Wordpress,
                        REST API, NLP
                      </li>
                    </ul>
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
                    <div className="text-above-main-title">INTRODUCTION</div>
                    <h2 class="main-title title-orange">About Maike</h2>
                  </div>
                  <p className="text-justify">
                    <strong>
                      What if you could find the best product for you by reading
                      just one review?
                    </strong>
                  </p>
                  <p className="text-justify">
                    Maike inc takes the pain out of product research by
                    providing the consumer with the results of hundreds of
                    products and thousands of customer reviews in one easy to
                    read format.
                  </p>
                  <p className="text-justify">
                    Maike takes out the traditional 5 star rating system and
                    actually looks into the words the reviewer writes.
                  </p>
                  <p className="text-justify">
                    Maike applies AI and sentiment analysis reading reviews to
                    produce a score from 1-10. It matches these to the user’s
                    specific requirement to deliver the highest recommended
                    product.
                  </p>
                </div>
                <div className="img-blk">
                  <img
                    class="lazyload"
                    data-src="/images/case-studies/maikeinc/maikeinc-laptop.svg"
                    alt="maikeinc-laptop"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="project-unique-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="project-unique-wrap">
                    <div className="project-blk-title">
                      <div className="text-above-main-title">
                        PRODUCT UNIQUENESS
                      </div>
                      <h2 class="main-title title-orange">Our Solution ?</h2>
                    </div>
                    <div className="cust-order-list">
                      <ol className="text-justify">
                        <li className="text-justify">
                          <strong>We started from the scratch, </strong>from the
                          graphic design for the customer face for Maike, the
                          portal. Our highly skilled design team, which moulded
                          the UI satisfying both our Client and Customers.
                        </li>
                        <li className="text-justify">
                          <strong>We designed an admin panel</strong> that
                          helped to ease out the data and customer handling for
                          our client.
                        </li>
                        <li className="text-justify">
                          <strong>Our Angular Minds</strong> was required to set
                          up the portal and UI.The modules were designed so as
                          to reduce the complexity for the customers.
                        </li>
                        <li className="text-justify">
                          <strong>A clean wordpress blog</strong> for providing
                          good and useful articles for our customers.
                        </li>
                        <li className="text-justify">
                          <strong>The site is set-up to succeed</strong> with
                          its up-to-date features, easy-to-use design, and
                          growing rates of traffic thanks to the technical
                          expertise that went into this project.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-self-end">
                  <Slide bottom>
                    <div className="hand-img-blk">
                      <img
                        class="lazyload"
                        data-src="/images/case-studies/maikeinc/maikeinc-mobile-mockup.svg"
                        alt="maikeinc-mobile-mockup"
                      />
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <div className="project-slider-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="project-slider-wrap">
                    <div className="project-blk-title">
                      <p className="text-above-main-title">
                        DESIGN WITH USER IN MIND
                      </p>
                      <h2 class="main-title title-orange">User Interface</h2>
                    </div>

                    <div className="ui-slider">
                      <Slider {...settings} className="slide-outer">
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/maikeinc-1.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/maikeinc-2.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/maikeinc-3.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/maikeinc-4.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="technology-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10 col-xl-8">
                  <Slide bottom>
                    <div className="technology-wrap">
                      <div className="project-blk-title">
                        <div className="text-above-main-title">
                          PROJECT STACK
                        </div>
                        <h2 class="main-title title-orange">Technologies Used</h2>
                      </div>
                      <div className="technology-list-center">
                        <ul>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/tech-icon1.svg"
                              alt="Django"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/tech-icon2.svg"
                              alt="REST"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/tech-icon3.svg"
                              alt="Angular"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/tech-icon4.svg"
                              alt="Bootstrap"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/tech-icon5.svg"
                              alt="Wordpress"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/maikeinc/tech-icon6.svg"
                              alt="NLP"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <div className="features-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="project-blk-title text-center">
                    <div className="text-above-main-title">WHAT`S INSIDE</div>
                    <h2 class="main-title title-orange">How We Helped </h2>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding  ">
                      <div
                        className="what-we-do-border-style what-we-do-responsive first-card "
                        style={{ paddingBottom: "30px", paddingTop: "30px" }}
                      >
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature1.svg"
                          alt="requirement analysis"
                        />
                        <p className="text-level-5 title-black">
                          Clear Requirement Analysis
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding maike-card">
                      <div
                        className="what-we-do-border-style what-we-do-responsive other-cards  "
                        style={{ paddingBottom: "49px", paddingTop: "49px" }}
                      >
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature2.svg"
                          alt="responsive design"
                        />
                        <p className="text-level-5 title-black">
                          Responsive Web Design
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div
                        className="what-we-do-border-style what-we-do-responsive "
                        style={{ paddingBottom: "49px", paddingTop: "49px" }}
                      >
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature3.svg"
                          alt="user experience"
                        />
                        <p className="text-level-5 title-black">
                          Excellent User Experience
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div
                        className="what-we-do-border-style what-we-do-responsive"
                        style={{ paddingBottom: "49px", paddingTop: "49px" }}
                      >
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature4.svg"
                          alt="smart work"
                        />
                        <p className="text-level-5 title-black">
                          Smart NLP Integration
                        </p>
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
                      <div
                        className="what-we-do-border-style what-we-do-responsive"
                        style={{ paddingBottom: "49px", paddingTop: "49px" }}
                      >
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature5.svg"
                          alt="seo"
                        />
                        <p className="text-level-5 title-black">
                          Seo <br />
                          Friendly{" "}
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div
                        className="what-we-do-border-style what-we-do-responsive"
                        style={{ paddingBottom: "49px", paddingTop: "49px" }}
                      >
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature6.svg"
                          alt="dashboard"
                        />
                        <p className="text-level-5 title-black">
                          Admin <br />
                          Dashboard
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                </>
              </div>
            </div>
          </div>

          <div className="orange-strip-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <Slide bottom>
                    <div className="project-blk-title">
                      <p
                        style={{ marginBottom: "2rem" }}
                        className="main-title title-white"
                      >
                        Are You In Search For A Technology Partner?
                      </p>
                      <div class="learn-more home-lm-link-vs">
                        <div className="btn-comm">
                          <a href="/contact-us">LET'S WORK TOGETHER</a>
                        </div>
                      </div>
                    </div>
                  </Slide>
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
