
import React, { Component } from "react";
import Underconstruction from "../../../components/under-construction/index.jsx";
import DocumentMeta from "react-document-meta";
import $ from "jquery";
import axios from "axios";
import * as config from "../../../config.js";
import "slick-carousel/slick/slick.css";
import dynamic from "next/dynamic";
const Header = dynamic(
  () => import("../../../components/header/index.jsx"),
  {}
);
const Footer = dynamic(
  () => import("../../../components/footer/index.jsx"),
  {}
);
const Slider = dynamic(() => import("react-slick"), {});
const Slide = dynamic(() => import("react-reveal/Reveal"), {});
const Contact = dynamic(
  () => import("../../../components/contacts/index.jsx"),
  {}
);


import "slick-carousel/slick/slick.css";
import "lazysizes";

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
        slug: "casestudies-megalot",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class Megalot extends Component {
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
      <div className="case-study megalot" id="megalot-case-study">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
        ></Header>
        <section className="content-container case-study megalot">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="common-title-wrap px-md-3">
                    {/* <div className="case-megalot-size">
                      <p className="megalot_title">
                        Website development & design
                      </p>
                    </div> */}
                    <h1 className="main-title title-white">Megalot</h1>
                    <ul className="project-info text-justify">
                      <li>
                        <strong>Industry:</strong>Lottery & Gambling
                      </li>
                      <li>
                        <strong>Location:</strong>California, US
                      </li>
                      <li>
                        <strong>Service:</strong>Blockchain development
                      </li>
                      <li>
                        <strong>Technologies:</strong>Blockchain, Solidity,
                        Metamask, ETH Smart Contract, Web3
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
                  <blockquote cite="https://www.hashtag-ca.com/">
                    <p className="text-justify ">
                      Our potential team has deep knowledge about Ethereum
                      platform based applications to develop smart contracts and
                      dApps.
                    </p>
                  </blockquote>
                  <div className="project-blk-title">
                    <div className="text-above-main-title">INTRODUCTION</div>
                    <h3 class="main-title title-orange">About Megalot</h3>
                  </div>
                  <p className="text-justify">
                    In the world of crypto and decentralized finance, gambling
                    has always been one of the ideal use cases. Crypto
                    facilitates gambling in the form of easy to use
                    decentralized applications more commonly known as Dapps. In
                    the current market where crypto and DeFi are gaining
                    popularity we here at hashtag bring our own take on gambling
                    using crypto.
                  </p>
                </div>
                <div className="img-blk">
                  <img
                    class="lazyload"
                    data-src="/images/case-studies/megalot/megalot-laptop.webp"
                    alt="megalot-laptop"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="architecture-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="project-blk-title">
                    <div className="text-above-main-title">WORKFLOW</div>
                    <h3 class="main-title title-orange">Architecture</h3>
                  </div>
                  <div className="workflow-wrap">
                    <img
                      class="lazyload"
                      data-src="/images/case-studies/megalot/workflow.svg"
                      alt="Architecture"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="orange-strip-blk white-centered">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="project-blk-title">
                    <p className="text-above-main-title text-above-main-title_margin_bottom">
                      CRACKING CHALLENGES WITH OUR TEAM OF BLOCKCHAIN EXPERTS{" "}
                    </p>
                    <h3 class="main-title">Challenges</h3>
                  </div>
                  <p className="text-justify">
                    One of the main benefits of using crypto is the security
                    features which go hand in hand with it. Traditional online
                    gambling sites require the users credit card details and
                    other personal information in order to grant entry.
                  </p>
                  <p className="text-justify">
                    While this might be ok to some, there would be others who
                    value privacy especially in this age where security is
                    lacking and credit fraud and other security breaches are
                    common.
                  </p>
                  <p className="text-justify">
                    Not to mention in traditional gambling we have to trust the
                    authority to decide the winner and there is little to no
                    transparency in the selection process.
                  </p>
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
                      <h3 class="main-title title-orange">Our Solution ?</h3>
                    </div>
                    <div className="cust-order-list">
                      <ol className="text-justify">
                        <li className="text-justify">
                          <strong>We tackled the privacy </strong>issue and
                          barrier of entry in one simple solution by
                          implementing betting using Metamask, which is an
                          ethereum based waller used by most Dapps.{" "}
                        </li>
                        <li className="text-justify">
                          <strong>The beauty of this feature </strong>is that
                          anyone with ethereum in their metamask account can
                          participate in the game with the click of a button,
                          skipping over complex signups and ensuring security by
                          remaining both anonymous and not having to enter their
                          credit details .{" "}
                        </li>
                        <li className="text-justify">
                          <strong>By using Ethereum </strong>as our currency and
                          smart contracts based on it we provide the users of
                          our Dapp with 100% transparency as all the
                          transactions and code is public on the blockchain.{" "}
                        </li>
                        <li className="text-justify">
                          <strong>
                            Even the selection of winners is done on chain{" "}
                          </strong>
                          and is easy for anyone to see.{" "}
                        </li>
                        <li className="text-justify">
                          <strong>
                            We have also implemented a simple payout{" "}
                          </strong>
                          mechanism where users are paid the winnings
                          automatically after a draw with no additional
                          transaction fee required from their end.
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
                        data-src="/images/case-studies/megalot/megalot-hand.svg"
                        alt="megalot-mobile"
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
                      <h3 class="main-title title-orange">User Interface</h3>
                    </div>

                    <div className="ui-slider">
                      <Slider {...settings} className="slide-outer">
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/megalot-1.jpg"
                              alt="design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/megalot-2.jpg"
                              alt="design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/megalot-3.jpg"
                              alt="design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/megalot-4.jpg"
                              alt="design"
                            />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/megalot-5.jpg"
                              alt="design"
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
                        <h3 class="main-title title-orange">Technologies Used</h3>
                      </div>
                      <div className="tech-desc">
                        <p className="heading5">
                          Solidity language on Ethereum :
                        </p>
                        <p className="text-justify">
                          The smart contracts used in this project are built
                          using solidity language on ethereum. The front end is
                          built using HTML and JS. Web3 integration is achieved
                          using JS. Metamask is used as the wallet and it
                          provides the users address.
                        </p>
                      </div>
                      <div className="technology-list-center">
                        <ul>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/tech-icon1.svg"
                              alt="Django"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/tech-icon2.svg"
                              alt="REST"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/tech-icon3.svg"
                              alt="Angular"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/tech-icon4.svg"
                              alt="Bootstrap"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/tech-icon5.svg"
                              alt="Wordpress"
                            />
                          </li>
                          <li>
                            <img
                              class="lazyload"
                              data-src="/images/case-studies/megalot/tech-icon6.svg"
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
                    <p className="text-above-main-title">WHAT`S INSIDE</p>
                    <h3 class="main-title title-orange">Features</h3>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5 mx-auto section-2-row pl-3 pr-3 sc-ip-pro">
                <>
                  <Slide bottom>
                    <div className="col-lg-4 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/megalot/feature1.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Ease <br />
                          Registration
                        </p>
                        <p className="text-justify">
                          The use of metamask as the user account removes any
                          unwanted steps in the registration process and
                          provides security and ease of access to users.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-4 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature2.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Secure <br />
                          Control Panel{" "}
                        </p>
                        <p className="text-justify">
                          High level security features in the control panel of
                          the management.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-4 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature3.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Multi User <br />
                          Unlock System
                        </p>
                        <p className="text-justify">
                          Multi user unlock system which involves 2 out of the 3
                          owners agreeing to access the system.{" "}
                        </p>
                      </div>
                    </div>
                  </Slide>

                  <Slide bottom>
                    <div className="col-lg-4 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature4.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Secure <br />
                          Admin Panel{" "}
                        </p>
                        <p className="text-justify">
                          Access to the admin panel is provided only based on
                          the account signed in currently in metamask.
                        </p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-4 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          class="lazyload"
                          data-src="/images/case-studies/maikeinc/feature6.svg"
                          alt="feature"
                        />
                        <p className="text-level-5 title-black">
                          Fair <br />
                          Selection
                        </p>
                        <p className="text-justify">
                          Use of an external unbiased oracle to provide the
                          unique random number in order to select the winners
                          based on the provables library previously known as
                          oraclize.
                        </p>
                      </div>
                    </div>
                  </Slide>
                </>
              </div>

              {/*<div className="row justify-content-center  section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                          <img class="lazyload" data-src="/images/case-studies/maikeinc/feature4.svg" alt="" />
                        <p className="text-level-5 title-black">Secure <br/>Admin Panel </p>
                        <p>Access to the admin panel is provided only based on the account signed in currently in metamask.</p>
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                          <img class="lazyload" data-src="/images/case-studies/maikeinc/feature6.svg" alt="" />
                        <p className="text-level-5 title-black">Fair <br/>Selection</p>
                        <p>Use of an external unbiased oracle to provide the unique random number in order to select the winners based on the provables library previously known as oraclize.</p>
                      </div>
                    </div>
                  </Slide>
                </>
              </div>*/}
            </div>
          </div>

          <div className="skillset-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-8">
                  <div className="project-blk-title text-center">
                    <div className="text-above-main-title">SKILLS</div>
                    <h3 class="main-title title-orange">Our Skillset</h3>
                  </div>
                  <div className="skillset-wrap">
                    <p className="text-justify">
                      At Hashtag Systems, We are specialized in Full-stack
                      development of blockchain based web applications. Boost
                      your efficiency, security and service with our custom
                      blockchain development services and Smart Contracts.
                    </p>
                    <ul className="skill-list">
                      <li>Ethereum</li>
                      <li>Token Development</li>
                      <li>Staking</li>
                      <li>Uniswap</li>
                      <li>ERC20</li>
                      <li>Node Creation & Setup</li>
                      <li>Flash Swap</li>
                      <li>ERC721</li>
                      <li>Web3 with Node and Python</li>
                      <li>HDWallets</li>
                      <li>Liquidity Pairs</li>
                      <li>Contract Automation</li>
                      <li>Chain Migrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="orange-strip-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <Slide bottom>
                    <div className="project-blk-title">
                      <p className="main-title title-white margin_bottom">
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

          <div className="megalot_contact"><Contact></Contact></div>
        </section>
        <div className="megalot_footer"><Footer></Footer></div>
      </div>
    );
  }
}
