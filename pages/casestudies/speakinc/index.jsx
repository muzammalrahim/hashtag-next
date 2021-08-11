import React, { Component } from 'react';

import Underconstruction from '../../../components/under-construction/index.jsx';
import DocumentMeta from 'react-document-meta';
import $ from 'jquery';
import axios from 'axios';
import * as config from '../../../config.js';

import "slick-carousel/slick/slick.css";
const Header  = dynamic(() => import("../../../components/header/index.jsx"));
const Slider = dynamic(() => import("react-slick"));
const Slide = dynamic(() => import("react-reveal/Reveal"));
const Footer = dynamic(() => import("../../../components/footer/index.jsx"));
const Contact = dynamic(() => import("../../../components/contacts/index.jsx"));


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
        slug: "casestudies-speakinc",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class Speakinc extends Component {
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
      <div className="case-study speakinc" id="case-study">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
        ></Header>
        <section className="content-container case-study">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="common-title-wrap px-md-3">
                    <div className="case-speakinc-size">
                      <p className="speak_inc">Website development & design</p>
                      </div>
                      <h1 className="main-title title-white">SpeakInc</h1>
                      <ul className="project-info">
                        <li>
                          <strong>Industry:</strong>Event Management and
                          Consulting
                        </li>
                        <li>
                          <strong>Location:</strong>San Diego, California
                        </li>
                        <li>
                          <strong>Established:</strong>Since 1989
                        </li>
                        <li>
                          <strong>Technologies:</strong>Python, Django,
                          Filemaker, Hubspot
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
                    <h2 class="main-title title-orange">About Speakinc</h2>
                  </div>
                  <p>
                    <strong>SpeakInc</strong> is a No 1 US based speakers
                    booking platform, which helps in searching and booking
                    keynote speakers or entertainers for different conventions,
                    conferences or events.
                  </p>
                  <p>
                    They are an employee-owned and operated company, and the
                    largest speakers bureau in the western United States.
                  </p>
                  <p>
                    Speakinc has an exceptional expertise matching keynote
                    speakers to client events{" "}
                  </p>
                </div>
                <div className="img-blk">
                  <img
                    src="/images/case-studies/speakinc/speakin_laptop.svg"
                    alt="speakin_laptop"
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
                      <h2 class="main-title title-orange">What`s So Special</h2>
                    </div>
                    <div className="project-spec-grid">
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon1.svg"
                            alt="Design"
                          />
                          <span>Easy navigation</span>
                        </div>
                      </Slide>
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon2.svg"
                            alt="Design"
                          />
                          <span>Dynamic Designs</span>
                        </div>
                      </Slide>
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon3.svg"
                            alt="Design"
                          />
                          <span>Responsive Design</span>
                        </div>
                      </Slide>
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon4.svg"
                            alt="Design"
                          />
                          <span>Trendy, intuitive design</span>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <Slide bottom>
                    <div className="hand-img-blk">
                      <img
                        src="/images/case-studies/speakinc/spekinc-phone-mockup.svg"
                        alt="spekinc-phone-mockup"
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
                      <div className="text-above-main-title">
                        DESIGN WITH USER IN MIND
                      </div>
                      <h2 class="main-title title-orange">User Interface</h2>
                    </div>

                    <div className="ui-slider">
                      <Slider {...settings} className="slide-outer">
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-1.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-2.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-3.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-4.svg"
                              alt="Design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-5.svg"
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
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <Slide bottom>
                    <div className="technology-wrap">
                      <div className="project-blk-title">
                        <div className="text-above-main-title">PROJECT STACK</div>
                        <h2 class="main-title title-orange">Technogies Used</h2>
                      </div>
                      <div className="technology-list">
                        <div className="tech-item">
                          <img
                            src="/images/case-studies/speakinc/tech-icon1.svg"
                            alt="Django"
                          />
                          <p5>
                            Framework: <span>Django 2.0</span>
                          </p5>
                          <p>
                            Django is a Python-based free and open-source web
                            framework, which follows the model-template-view
                            architectural pattern.{" "}
                          </p>
                        </div>
                        <div className="tech-item">
                          <img
                            src="/images/case-studies/speakinc/tech-icon2.svg"
                            alt="MySQL"
                          />
                          <p5>
                            Database:{" "}
                            <span>
                              MySQL 8 ( Managed Databases By Digital Ocean )
                            </span>
                          </p5>
                          <p>
                            DigitalOcean’s Managed Databases are a fully
                            managed, high performance database cluster service.
                            Using managed databases is a powerful alternative to
                            installing, configuring, maintaining, and securing
                            databases by hand.{" "}
                          </p>
                        </div>
                        <div className="tech-item">
                          <img
                            src="/images/case-studies/speakinc/tech-icon3.svg"
                            alt="Nginx"
                          />
                          <p5>
                            Web Server: <span>Nginx </span>
                          </p5>
                          <p>
                            Nginx, is an open-source web server that, since its
                            initial success as a web server, is now also used as
                            a reverse proxy, HTTP cache, and load balancer.
                          </p>
                        </div>
                        <div className="tech-item">
                          <img
                            src="/images/case-studies/speakinc/tech-icon4.svg"
                            alt="Filemaker Pro"
                          />
                          <p5>
                            Filemaker <span>Pro</span>
                          </p5>
                          <p>
                            FileMaker is a cross-platform relational database
                            application which integrates a database engine with
                            a graphical user interface and security features,
                            allowing users to modify the database by dragging
                            new elements into layouts, screens, or forms.
                          </p>
                        </div>
                        <div className="tech-item">
                          <img
                            src="/images/case-studies/speakinc/tech-icon5.svg"
                            alt="Ubuntu"
                          />
                          <p5>
                            Operating System: <span>Ubuntu 18.04 </span>
                          </p5>
                          <p>
                            Ubuntu is an open source software operating system
                            that runs from the desktop, to the cloud, to all
                            your internet connected things.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="sticky-img">
                  <img
                    src="/images/case-studies/speakinc/speakin_laptop.svg"
                    alt="speakin_laptop"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="diagram-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="project-blk-title">
                    <div className="text-above-main-title">HOW ITS BUILT</div>
                    <h2 class="main-title title-orange">Systems</h2>
                  </div>
                  <div className="cust-order-list">
                    <ol>
                      <li>
                        <strong>Web application</strong> through which web users
                        can find speakers and inquire about them to the bureau
                        through inquiry forms,which are integrated to hubspot.
                      </li>
                      <li>
                        <strong>Filemaker application</strong> for the bureau
                        that enables the direct communication between the bureau
                        and users interested in speakers, and speaker handling.
                      </li>
                      <li>
                        <strong>SEO for ensuring the presence</strong> of the
                        web application on search engines and all social media.
                      </li>
                      <li>
                        <strong>Hubspot for content management</strong>, lead
                        management,sales management.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dfd-blk">
                    <img
                      src="/images/case-studies/speakinc/workflow.svg"
                      alt="workflow"
                    />
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
                    <div className="text-above-main-title">WHAT`S INSIDE</div>
                    <h2 class="main-title title-orange">Features</h2>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/speakinc/feature1.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          User Friendly <br />
                          Dashboard
                        </p>
                        <p>
                          Less complex dashboard, that can be easily handled by
                          anybody, for controlling the web application features.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/speakinc/feature2.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Easy <br />
                          Search{" "}
                        </p>
                        <p>
                          Users can easily do quick searches which shows exactly
                          what they want from the site.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/speakinc/feature3.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Portfolio <br />
                          Option
                        </p>
                        <p>
                          Users can inquire about multiple speakers at the same
                          time by adding them into a portfolio and submitting
                          them together.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/speakinc/feature4.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">Blogs</p>
                        <p>
                          Blogs that are managed through hubspot are integrated
                          to web applications through application program
                          interfaces.
                        </p>
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
                          src="/images/case-studies/speakinc/feature5.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Hubspot Form Integrations{" "}
                        </p>
                        <p>
                          Different forms configured in hubspot are integrated
                          with scripts and apis.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/speakinc/feature6.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Weekly Speakers and Slider Speakers
                        </p>
                        <p>
                          Top quality speakers are assigned as weekly speakers
                          based on their rankings and priority.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/speakinc/feature7.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Social Media integrations
                        </p>
                        <p>
                          Playlist from youtube integrated and other social
                          media plugins added to the website.
                        </p>
                      </div>
                    </div>
                  </Slide>
                </>
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
