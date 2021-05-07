import React, { Component } from "react";
import Header from "../../../components/header/index.jsx";
import Footer from "../../../components/footer/index.jsx";
// import Underconstruction from '../../../components/under-construction/index.jsx';
import Contact from "../../../components/contacts/index.jsx";
import DocumentMeta from "react-document-meta";
import $ from "jquery";
import axios from "axios";
import * as config from "../../../config.js";
import Slide from "react-reveal/Reveal";

require("typeface-montserrat");
// require('paroller.js');
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
    // $('.parallax-block').paroller({
    // factor: 0.2,
    // factorMd: 0.2,
    // factorSm: 0.2,
    // type: 'background',
    // direction: 'vertical'
    // });
  }

  render() {
    const meta = {
      title: "Case studies - FullStack Web Development| Bay area, California",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california",
        },
      },
    };
    const { data } = this.state;
    return (
      <div className="case-study-list" id="case-study-list">
        <DocumentMeta {...meta} />
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
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
                        <span className="title-orange">Case Studies</span>{" "}
                        <br />
                        We Let Our Portfolio Do The Talk!
                      </h1>
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
                  "url('/images/case-studies/Parallax-maikeinc-background.png') repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5 offset-md-7">
                    <Slide right>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <a href="/casestudies/maikeinc">Maike Inc</a>
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
                                <img
                                  src="/images/case-studies/maikeinc/tech-icon7.svg"
                                  alt="Python"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/maikeinc/tech-icon1.svg"
                                  alt="Django"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/maikeinc/tech-icon3.svg"
                                  alt="Angular"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/maikeinc/tech-icon4.svg"
                                  alt="Bootstrap"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/speakinc/tech-icon2.svg"
                                  alt="MySQL"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a href="/casestudies/maikeinc">
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
                  "url('/images/case-studies/Parallax-speakinc-Background.png') repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Slide left>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <a href="/casestudies/speakinc">Speakinc</a>
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
                                <img
                                  src="/images/case-studies/speakinc/tech-icon7.svg"
                                  alt="Python"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/speakinc/tech-icon1.svg"
                                  alt="Django"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/speakinc/tech-icon4.svg"
                                  alt="Filemaker"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/speakinc/tech-icon2.svg"
                                  alt="MySQL"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/speakinc/tech-icon6.svg"
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
                  "url('/images/case-studies/Parallax-megalot-background.png') repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5 offset-md-7">
                    <Slide right>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <a href="/casestudies/megalot">Megalot</a>
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
                                <img
                                  src="/images/case-studies/megalot/tech-icon1.svg"
                                  alt="Web3"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk small">
                                <img
                                  src="/images/case-studies/megalot/tech-icon2.svg"
                                  alt="HTML"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk small">
                                <img
                                  src="/images/case-studies/megalot/tech-icon3.svg"
                                  alt="JS"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk small">
                                <img
                                  src="/images/case-studies/megalot/tech-icon4.svg"
                                  alt="Metamask"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/megalot/tech-icon5.svg"
                                  alt="Solidity"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/megalot/tech-icon6.svg"
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
                  "url('/images/case-studies/Parallax-filemaker-Background.jpg') repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Slide left>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <a href="/casestudies/filemaker">Filemaker</a>
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
                                <img
                                  src="/images/case-studies/filemaker/intro-logo-1.svg"
                                  alt="FileMaker"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/filemaker/intro-logo-2.svg"
                                  alt="MySQL"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/filemaker/intro-logo-4.svg"
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
                  "url('/images/case-studies/Parallax-easylevel-background.jpg') repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5 offset-md-7">
                    <Slide right>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <a href="/casestudies/easy-level">Easy-Level</a>
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
                                <img
                                  src="/images/case-studies/easylevel/tech-icon1.svg"
                                  alt="Web3"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/easylevel/tech-icon2.svg"
                                  alt="Ethereum"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/easylevel/tech-icon5.svg"
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
                  "url('/images/case-studies/Parallax-multi-token-Background.jpg') repeat center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Slide left>
                      <div className="parallax-inner-blk">
                        <h3 className="title-orange">
                          <a href="/casestudies/multitoken">
                            Multi Token Wallet
                          </a>
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
                                <img
                                  src="/images/case-studies/multitoken/tech-icon1.svg"
                                  alt="Web3"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/multitoken/tech-icon2.svg"
                                  alt="Ethereum"
                                />
                              </div>
                            </li>
                            <li>
                              <div className="ico-blk">
                                <img
                                  src="/images/case-studies/multitoken/tech-icon5.svg"
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
