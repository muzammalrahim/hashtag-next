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
        slug: "casestudies-filemaker",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class Filemaker extends Component {
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
      <div className="case-study filemaker" id="filemaker-case-study">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
        ></Header>
        <section className="content-container case-study">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <div className="common-title-wrap px-md-3">
                    <div className="common-head-blk">
                      <h6>Website development &amp; design</h6>
                      <h2 className="main-title title-white">
                        Filemaker in Action
                      </h2>
                      <div className="intro-desc title-white">
                        <p>
                          <b>
                            The FileMaker Platform empowers problem solvers to
                            <br />
                            create, share, and integrate custom apps to address
                            their
                            <br />
                            ever changing business challenges.
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filemakerintrologo-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-11 col-lg-6">
                  <div className="filemaker-int-logo">
                    <ul>
                      <li>
                        <img
                          src="/images/case-studies/filemaker/intro-logo-1.svg"
                          alt="File Maker"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/case-studies/filemaker/intro-logo-2.svg"
                          alt="mysql"
                        />
                      </li>
                      <li>
                        <img
                          src="/images/case-studies/filemaker/intro-logo-4.svg"
                          alt="hubspot"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="img-blk">
                  <img
                    src="/images/case-studies/filemaker/header-files.svg"
                    alt="file-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="project-about-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="project-unique-wrap">
                    <div className="project-blk-title">
                      <h6 className="text-above-main-title">Description</h6>
                      <h3 className="main-title title-orange">Introduction</h3>
                    </div>
                    <p>
                      <strong>
                        SpeakInc is a No 1 US based speakers booking platform
                      </strong>
                    </p>
                    <p>
                      It helps in searching and booking keynote speakers or
                      entertainers for different conventions, conferences or
                      events. Speakinc has exceptional expertise matching
                      keynote speakers to client events.
                    </p>
                  </div>

                  <div className="project-unique-wrap challenge-sec">
                    <div className="project-blk-title">
                      <h6 className="text-above-main-title">Challenges</h6>
                      <h3 className="main-title title-orange">
                        Business Challenge
                      </h3>
                    </div>
                    <p>
                      Processing client queries and keeping track of it manually
                      in
                      <br /> <b>Hubspot</b> and <b>Filemaker</b> was literally a
                      full-time job for the owners and limited business growth.
                      They needed a secure and user friendly way to sync the
                      queries and manage marketing leads and proposals.
                    </p>
                    <p>
                      <b>FileMaker DB</b> has huge client records and it has
                      been used for many years. Another challenge was to upload
                      only active clients on this Web application. So we created
                      an option to mark clients as ACTIVE so that only active
                      clients will get synced with the Web application.
                    </p>
                  </div>

                  <div className="project-unique-wrap challenge-sec">
                    <div className="project-blk-title">
                      <h6 className="text-above-main-title">What We Do</h6>
                      <h3 className="main-title title-orange">Solution</h3>
                    </div>
                    <p>
                      <b>The solution</b> was to upgrade the database to the
                      current version of FileMaker systems and deploy a new
                      simple interface that could better support their marketing
                      department’s workflow.
                    </p>
                    <p>
                      <b>We built</b> a modern solution with REST API for
                      syncing leads in Filemaker to Hubspot CRM. Hubspot plays a
                      role in managing leads and clients. These leads, client
                      handling, proposals and bids are then synced automatically
                      to their Hubspot application with all the information
                      validated so that their business can be processed in a
                      timely manner.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 sticky-image-section">
                  <div className="speakinc-img sticky-img">
                    <img
                      src="/images/case-studies/filemaker/speakinc-img.svg"
                      alt="Speakinc Intro Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="architecture-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10 col-xl-10">
                  <div className="project-blk-title text-center">
                    <h6 className="text-above-main-title">How It Works</h6>
                    <h3 className="main-title title-orange">Architecture</h3>
                  </div>
                  <div className="workflow-wrap">
                    <img
                      src="/images/case-studies/filemaker/archi.svg"
                      alt="Architecture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="benefits-blk">
            <div className="container">
              <div className="row">
                <div className="benefits-lft-tag">
                  <img
                    src="/images/case-studies/filemaker/benefits-left-hashtag.svg"
                    alt="pattern-left"
                  />
                </div>
                <div className="benefits-rgt-tag">
                  <img
                    src="/images/case-studies/filemaker/benefits-right-hashtag.svg"
                    alt="pattern-right"
                  />
                </div>
                <div className="col-md-5 offset-md-1 col-lg-5 offset-lg-1">
                  <div className="project-blk-title">
                    <h3 className="main-title title-white">Benefits</h3>
                  </div>
                  <div className="benefit-para">
                    <p>
                      <b>
                        With the new Filemake now in the place they have <br />a
                        modern dahsboard that makes it a easy for access and
                        <br />
                        manage data in different databases, third party apis.
                      </b>
                    </p>
                    <p>
                      This system uses Filemaker to communicate with a mysql
                      database that is connected with multiple web based
                      applications. Primary call was to centralise a UI for
                      accessing all different modules.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="img-blk">
                    <img
                      src="/images/case-studies/filemaker/benefits-img.svg"
                      alt="Architecture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-blk">
            <div className="container">
              <h3 className="main-title title-orange text-center mb-5">
                Features
              </h3>

              <div className="row justify-content-center section-2-row pl-3 pr-3 sc-ip-pro">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/filemaker/featured1.svg"
                          alt="File Maker"
                        />
                        <h4 className="text-level-5 title-black">
                          Easy to <br />
                          use
                        </h4>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/filemaker/featured2.svg"
                          alt="File Maker"
                        />
                        <h4 className="text-level-5 title-black">
                          Redesigned <br />
                          the interface
                        </h4>
                        <hr className="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/filemaker/featured3.svg"
                          alt="File Maker"
                        />
                        <h4 className="text-level-5 title-black">
                          Automatic data synchronization
                        </h4>
                        <hr className="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/filemaker/featured4.svg"
                          alt="File Maker"
                        />
                        <h4 className="text-level-5 title-black">
                          Available offline
                          <br />
                          and Online
                        </h4>
                        <hr className="hashtag-underline" />
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
                          src="/images/case-studies/filemaker/featured5.svg"
                          alt="File Maker"
                        />
                        <h4 className="text-level-5 title-black">
                          Centralised
                          <br />
                          data
                        </h4>
                        <hr className="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          src="/images/case-studies/filemaker/featured6.svg"
                          alt="File Maker"
                        />
                        <h4 className="text-level-5 title-black">
                          Flexible for future requirements
                        </h4>
                        <hr className="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                </>
              </div>
            </div>
          </div>

          <div className="expert-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10 col-xl-8">
                  <div className="project-blk-title text-center">
                    <h6 className="text-above-main-title">Our Skillsets</h6>
                    <h3 className="main-title title-orange">
                      We are experts in
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-4 col-lg-4">
                  <ul className="exp-ul">
                    <li>Filemaker Database Conversions</li>
                    <li>Migration to Filemaker Pro</li>
                    <li>Filemaker Go Mobile Development</li>
                    <li>Build a new Filemaker solution</li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4">
                  <ul className="exp-ul">
                    <li>Application optimization</li>
                    <li>Update & Ongoing support</li>
                    <li>Third Party Solution Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="orange-strip-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-sm-12">
                  <Slide bottom>
                    <div className="project-blk-title">
                      <h3 className="main-title title-white">
                        Committed to creating solutions
                        <br />
                        that provide value for customers
                      </h3>
                      <div className="learn-more home-lm-link-vs">
                        <div className="btn-comm">
                          <a href="/contact-us">LET'S TALK</a>
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
