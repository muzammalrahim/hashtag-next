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
    const meta = {
      title:
        "Speakinc Case study - FullStack Web Development| Bay area, California",
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
      <div className="case-study" id="case-study">
        <Header
          title={meta?.title}
          keywords={meta?.name?.keywords}
        ></Header>
        <section className="content-container case-study">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="common-title-wrap px-md-3">
                    <div className="common-head-blk">
                      <h6>Website development & design</h6>
                      <h2 className="main-title title-white">SpeakInc</h2>
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
          </div>

          <div className="project-about-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-11 offset-md-1 col-lg-5 offset-lg-1">
                  <div className="project-blk-title">
                    <h6 className="text-above-main-title">introduction</h6>
                    <h3 class="main-title title-orange">About Speakinc</h3>
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
                      <h6 className="text-above-main-title">
                        product uniqueness
                      </h6>
                      <h3 class="main-title title-orange">What`s So Special</h3>
                    </div>
                    <div className="project-spec-grid">
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon1.svg"
                            alt="feature-icon1"
                          />
                          <span>Easy navigation</span>
                        </div>
                      </Slide>
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon2.svg"
                            alt="feature-icon2"
                          />
                          <span>Dynamic Designs</span>
                        </div>
                      </Slide>
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon3.svg"
                            alt="feature-icon3"
                          />
                          <span>Responsive Design</span>
                        </div>
                      </Slide>
                      <Slide bottom>
                        <div className="project-spec-col">
                          <img
                            src="/images/case-studies/speakinc/feature-icon4.svg"
                            alt="feature-icon4"
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
                              src="/images/case-studies/speakinc/speakinc-1.svg"
                              alt="speakinc-1"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-2.svg"
                              alt="speakinc-2"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-3.svg"
                              alt="speakinc-3"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-4.svg"
                              alt="speakinc-4"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              src="/images/case-studies/speakinc/speakinc-5.svg"
                              alt="speakinc-5"
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
                        <h6 className="text-above-main-title">project stack</h6>
                        <h3 class="main-title title-orange">Technogies Used</h3>
                      </div>
                      <div className="technology-list">
                        <div className="tech-item">
                          <img
                            src="/images/case-studies/speakinc/tech-icon1.svg"
                            alt="Django"
                          />
                          <h5>
                            Framework: <span>Django 2.0</span>
                          </h5>
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
                          <h5>
                            Database:{" "}
                            <span>
                              MySQL 8 ( Managed Databases By Digital Ocean )
                            </span>
                          </h5>
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
                          <h5>
                            Web Server: <span>Nginx </span>
                          </h5>
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
                          <h5>
                            Filemaker <span>Pro</span>
                          </h5>
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
                          <h5>
                            Operating System: <span>Ubuntu 18.04 </span>
                          </h5>
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
                    <h6 className="text-above-main-title">how its built</h6>
                    <h3 class="main-title title-orange">Systems</h3>
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
                    <h6 className="text-above-main-title">WHAT`S INSIDE</h6>
                    <h3 class="main-title title-orange">Features</h3>
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
                          alt="feature1"
                        />
                        <h4 className="text-level-5 title-black">
                          User Friendly <br />
                          Dashboard
                        </h4>
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
                          alt="feature2"
                        />
                        <h4 className="text-level-5 title-black">
                          Easy <br />
                          Search{" "}
                        </h4>
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
                          alt="feature3"
                        />
                        <h4 className="text-level-5 title-black">
                          Portfolio <br />
                          Option
                        </h4>
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
                          alt="feature4"
                        />
                        <h4 className="text-level-5 title-black">Blogs</h4>
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
                          alt="feature5"
                        />
                        <h4 className="text-level-5 title-black">
                          Hubspot Form Integrations{" "}
                        </h4>
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
                          alt="feature6"
                        />
                        <h4 className="text-level-5 title-black">
                          Weekly Speakers and Slider Speakers
                        </h4>
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
                          alt="feature7"
                        />
                        <h4 className="text-level-5 title-black">
                          Social Media integrations
                        </h4>
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
