import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Underconstruction from '../../../components/under-construction/index.jsx';
import Contact from '../../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import $ from 'jquery';
import axios from 'axios';
import * as config from '../../../config.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slide from 'react-reveal/Reveal';

require('typeface-montserrat')
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
    const meta = {
      title:
        "Maike Inc Case study - FullStack Web Development| Bay area, California",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california",
        },
      },
    };
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
        <DocumentMeta {...meta} />
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
                    <div className="common-head-blk">
                      <h6>Website development & design</h6>
                      <h2 className="main-title title-white">Maike Inc</h2>
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
                          <strong>Technologies:</strong>Python, Django,
                          Wordpress, REST API, NLP
                        </li>
                      </ul>
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
                    <h6 className="text-above-main-title">introduction</h6>
                    <h3 class="main-title title-orange">About Maike</h3>
                  </div>
                  <p>
                    <strong>
                      What if you could find the best product for you by reading
                      just one review?
                    </strong>
                  </p>
                  <p>
                    Maike inc takes the pain out of product research by
                    providing the consumer with the results of hundreds of
                    products and thousands of customer reviews in one easy to
                    read format.
                  </p>
                  <p>
                    Maike takes out the traditional 5 star rating system and
                    actually looks into the words the reviewer writes.
                  </p>
                  <p>
                    Maike applies AI and sentiment analysis reading reviews to
                    produce a score from 1-10. It matches these to the user’s
                    specific requirement to deliver the highest recommended
                    product.
                  </p>
                </div>
                <div className="img-blk">
                  <img
                    src="/images/case-studies/maikeinc/maikeinc-laptop.svg"
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
                      <h6 className="text-above-main-title">
                        product uniqueness
                      </h6>
                      <h3 class="main-title title-orange">Our Solution ?</h3>
                    </div>
                    <div className="cust-order-list">
                      <ol>
                        <li>
                          <strong>We started from the scratch, </strong>from the
                          graphic design for the customer face for Maike, the
                          portal. Our highly skilled design team, which moulded
                          the UI satisfying both our Client and Customers.
                        </li>
                        <li>
                          <strong>We designed an admin panel</strong> that
                          helped to ease out the data and customer handling for
                          our client.
                        </li>
                        <li>
                          <strong>Our Angular Minds</strong> was required to set
                          up the portal and UI.The modules were designed so as
                          to reduce the complexity for the customers.
                        </li>
                        <li>
                          <strong>A clean wordpress blog</strong> for providing
                          good and useful articles for our customers.
                        </li>
                        <li>
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
                        src="/images/case-studies/maikeinc/maikeinc-mobile-mockup.svg"
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
                      <h6 className="text-above-main-title">
                        Design with user in mind
                      </h6>
                      <h3 class="main-title title-orange">User Interface</h3>
                    </div>

                    <div className="ui-slider">
                      <Slider {...settings} className="slide-outer">
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/maikeinc/maikeinc-1.svg"
                              alt="maikeinc-1"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/maikeinc/maikeinc-2.svg"
                              alt="maikeinc-2"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/maikeinc/maikeinc-3.svg"
                              alt="maikeinc-3"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/maikeinc/maikeinc-4.svg"
                              alt="maikeinc-4"
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
                        <h6 className="text-above-main-title">project stack</h6>
                        <h3 class="main-title title-orange">Technogies Used</h3>
                      </div>
                      <div className="technology-list-center">
                        <ul>
                          <li>
                            <img
                              src="/images/case-studies/maikeinc/tech-icon1.svg"
                              alt="Django"
                            />
                          </li>
                          <li>
                            <img
                              src="/images/case-studies/maikeinc/tech-icon2.svg"
                              alt="REST"
                            />
                          </li>
                          <li>
                            <img
                              src="/images/case-studies/maikeinc/tech-icon3.svg"
                              alt="Angular"
                            />
                          </li>
                          <li>
                            <img
                              src="/images/case-studies/maikeinc/tech-icon4.svg"
                              alt="Bootstrap"
                            />
                          </li>
                          <li>
                            <img
                              src="/images/case-studies/maikeinc/tech-icon5.svg"
                              alt="Wordpress"
                            />
                          </li>
                          <li>
                            <img
                              src="/images/case-studies/maikeinc/tech-icon6.svg"
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
                    <h6 className="text-above-main-title">WHAT`S INSIDE</h6>
                    <h3 class="main-title title-orange">How We Helped </h3>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/maikeinc/feature1.svg"
                          alt="feature1"
                        />
                        <h4 className="text-level-5 title-black">
                          Clear Requirement Analysis
                        </h4>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/maikeinc/feature2.svg"
                          alt="feature2"
                        />
                        <h4 className="text-level-5 title-black">
                          Responsive Web Design
                        </h4>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/maikeinc/feature3.svg"
                          alt="feature3"
                        />
                        <h4 className="text-level-5 title-black">
                          Excellent User Experience
                        </h4>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/maikeinc/feature4.svg"
                          alt="feature4"
                        />
                        <h4 className="text-level-5 title-black">
                          Smart NLP Integration
                        </h4>
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
                        <img
                          src="/images/case-studies/maikeinc/feature5.svg"
                          alt="feature5"
                        />
                        <h4 className="text-level-5 title-black">
                          Seo <br />
                          Friendly{" "}
                        </h4>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/maikeinc/feature6.svg"
                          alt="feature6"
                        />
                        <h4 className="text-level-5 title-black">
                          Admin <br />
                          Dashboard
                        </h4>
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
                      <h3 class="main-title title-white">
                        Are You In Search For A Technology Partner?
                      </h3>
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
