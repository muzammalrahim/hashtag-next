import React, { Component, useEffect } from "react";


// import Underconstruction from '../../../components/under-construction/index.jsx';
import Contact from "../../components/contacts/index.jsx";
import DocumentMeta from "react-document-meta";
// import $ from "jquery";
import axios from "axios";
import * as config from "../../config.js";
import Slide from "react-reveal/Reveal";
import Link from 'next/link'
import dynamic from "next/dynamic";
require("typeface-montserrat");
// require('paroller.js');
import Axios from "axios";
import https from "https";

import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";



const Header = dynamic(() => import("../../components/header/index.jsx"), {
  // ssr: false,
});
const Footer = dynamic(() => import("../../components/footer/index.jsx"), {
  ssr: false,
});

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
        slug: "casestudies",
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

    /*useEffect(() => {
        window.jQuery = require('jquery');
        window.paroller = require('paroller.js');

        window.jQuery(".parallax-block'").paroller({
            factor: 0.2,
            factorMd: 0.2,
            factorSm: 0.2,
            type: 'background',
            direction: 'vertical'
        });
    }, []);*/

    //
    // $(".list-banner-text .btn-comm a").click(function (e) {
    // e.preventDefault();
    // var target = $(this).attr('href');
    // var HeaderHeight;
    //
    // if ($('.header-container').length) {
    // HeaderHeight = $('.header-container').outerHeight();
    // }
    //
    // $('html, body').animate({
    // scrollTop: $(target).offset().top-HeaderHeight
    // }, 2000);
    // });
  }

  componentDidMount() {
      window.jQuery = require('jquery');
      window.paroller = require('paroller.js');

      window.jQuery(".parallax-block").paroller({
          factor: 0.2,
          factorMd: 0.2,
          factorSm: 0.2,
          type: 'background',
          direction: 'vertical'
      });
    // $('.parallax-block').paroller({
    // factor: 0.2,
    // factorMd: 0.2,
    // factorSm: 0.2,
    // type: 'background',
    // direction: 'vertical'
    // });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="case-study-list" id="case-study-list">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
        ></Header>
        {/*<Underconstruction></Underconstruction>*/}
        <section className="content-container">
          <div className="listing-banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <Slide bottom>
                    <div className="list-banner-text">
                      <h1>
                        <span className="title-orange case_Studies">Case Studies</span>{" "}
                      </h1>
                        <br />
                        <h2 className="case_para">We Let Our Portfolio Do The Talk!</h2>
                      
                      <div className="btn-comm">
                        <a href="#contact">Say Hello</a>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax-outer">
            <div
              className="parallax-block"
              style={{
                background:
                  "url('/images/case-studies/Parallax-maikeinc-background.webp') center -32px / cover repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5 offset-md-7">
                    <Slide right>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <Link href="/casestudies/maikeinc">Maike Inc</Link>
                        </h3>
                        <span>Full Stack Development</span>
                        <p>
                          Maike inc takes the pain out of product research by
                          providing the consumer with the results of hundreds of
                          products and thousands of customer reviews in one easy
                          to read format.
                        </p>
                        <div className="list-tech">
                          <ul>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  
                                  data-src="/images/case-studies/maikeinc/tech-icon7.svg"
                                  alt="Python"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/maikeinc/tech-icon1.svg"
                                  alt="Django"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/maikeinc/tech-icon3.svg"
                                  alt="Angular"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/maikeinc/tech-icon4.svg"
                                  alt="Bootstrap"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/speakinc/tech-icon2.svg"
                                  alt="MySQL"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/maikeinc">
                          Learn more{""}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax-outer">
            <div
              className="parallax-block"
              style={{
                background:
                  "url('/images/case-studies/Parallax-speakinc-Background.webp') center -17px / cover repeat",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Slide left>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <Link href="/casestudies/speakinc">Speakinc</Link>
                        </h3>
                        <span>Full Stack Development</span>
                        <p>
                          SpeakInc is a No 1 US based speakers booking platform,
                          which helps in searching and booking keynote speakers
                          or entertainers for different conventions, conferences
                          or events.
                        </p>
                        <div className="list-tech">
                          <ul>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/speakinc/tech-icon7.svg"
                                  alt="Python"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/speakinc/tech-icon1.svg"
                                  alt="Django"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/speakinc/tech-icon4.svg"
                                  alt="Filemaker"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/speakinc/tech-icon2.svg"
                                  alt="MySQL"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/speakinc/tech-icon6.svg"
                                  alt="Hubspot"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/speakinc">
                          Learn more{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax-outer">
            <div
              className="parallax-block"
              style={{
                background:
                  "url('/images/case-studies/Parallax-megalot-background.webp') center -25px / cover repeat",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5 offset-md-7">
                    <Slide right>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          {/* <a> */}
                            <Link href="/casestudies/megalot">Megalot</Link>
                          {/* </a> */}
                        </h3>
                        <span>Full Stack Development</span>
                        <p>
                          In the world of crypto and decentralized finance,
                          gambling has always been one of the ideal use cases.
                          Crypto facilitates gambling in the form of easy to use
                          decentralized applications more commonly known as
                          Dapps. In the current market where crypto and DeFi are
                          gaining popularity we here at hashtag bring our own
                          take on gambling using crypto.
                        </p>
                        <div className="list-tech">
                          <ul>
                            <li>
                              <div className="ico-blk small">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/megalot/tech-icon1.svg"
                                  alt="Web3"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk small">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/megalot/tech-icon2.svg"
                                  alt="HTML"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk small">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/megalot/tech-icon3.svg"
                                  alt="JS"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk small">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/megalot/tech-icon4.svg"
                                  alt="Metamask"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/megalot/tech-icon5.svg"
                                  alt="Solidity"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/megalot/tech-icon6.svg"
                                  alt="Ethereum"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/megalot">
                          Learn more{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax-outer">
            <div
              className="parallax-block"
              style={{
                background:
                  "url('/images/case-studies/Parallax-filemaker-Background.webp') center -21px / cover repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Slide left>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <Link href="/casestudies/filemaker">Filemaker</Link>
                        </h3>
                        <span>Full Stack Development</span>
                        <p>
                          It helps in searching and booking keynote speakers or
                          entertainers for different conventions, conferences or
                          events. Speakinc has exceptional expertise matching
                          keynote speakers to client events.
                        </p>
                        <div className="list-tech">
                          <ul>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/filemaker/intro-logo-1.svg"
                                  alt="FileMaker"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/filemaker/intro-logo-2.svg"
                                  alt="MySQL"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/filemaker/intro-logo-4.svg"
                                  alt="Hubspot"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/filemaker">
                          Learn more{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax-outer">
            <div
              className="parallax-block"
              style={{
                background:
                  "url('/images/case-studies/Parallax-easylevel-background.webp') center -19px / cover repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5 offset-md-7">
                    <Slide right>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <Link href="/casestudies/easy-level">Easy-Level</Link>
                        </h3>
                        <span>Full Stack Development</span>
                        <p>
                          We offer a p2p decentralized system in which all
                          participants are rewarded based on the degree of
                          participation in the system with the native ADV token
                          which can be redeemed for ETH which can be converted
                          to USD.{" "}
                        </p>
                        <div className="list-tech">
                          <ul>
                            <li>
                              <div className="ico-blk small">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/easylevel/tech-icon1.svg"
                                  alt="Web3"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/easylevel/tech-icon2.svg"
                                  alt="Ethereum"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/easylevel/tech-icon5.svg"
                                  alt="Solidity"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/easy-level">
                          Learn more{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="parallax-outer">
            <div
              className="parallax-block"
              style={{
                background:
                  "url('/images/case-studies/Parallax-multi-token-Background.webp') center -40px / cover repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Slide left>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <Link href="/casestudies/multitoken">
                            Multi Token Wallet
                          </Link>
                        </h3>
                        <span>Full Stack Development</span>
                        <p>
                          This project allows a variety of uses in practice.
                          Real world assets like cars can be tokenized and added
                          to the blockchain. We employ the ERC1155 standard
                          which has fungible tokens represented by an id and is
                          similar to ERC20 but does not have a way to store a
                          symbol to represent the tokens.
                        </p>
                        <div className="list-tech">
                          <ul>
                            <li>
                              <div className="ico-blk small">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/multitoken/tech-icon1.svg"
                                  alt="Web3"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/multitoken/tech-icon2.svg"
                                  alt="Ethereum"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img  class="lazyload"
                                  data-src="/images/case-studies/multitoken/tech-icon5.svg"
                                  alt="Solidity"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/multitoken">
                          Learn more{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="contact">
            <Contact></Contact>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
