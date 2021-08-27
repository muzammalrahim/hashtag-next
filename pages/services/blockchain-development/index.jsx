import React, { Component } from "react";
import DocumentMeta from "react-document-meta";

import Axios from "axios";
import https from "https";

import dynamic from "next/dynamic";
require("typeface-montserrat");
const Slide = dynamic(() => import("react-reveal/Reveal"));
const Header = dynamic(() => import("../../../components/header/index.jsx"));
const Footer = dynamic(() => import("../../../components/footer/index.jsx"));
const Contact = dynamic(() => import("../../../components/contacts/index.jsx"));
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
        slug: "services-blockchain",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

export default class BlockChain extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data,
    };
  }
  render() {
    let { data } = this.state;
    return (
      <div className="contact-main" id="Blcnbanner">
        <div className="wp-main" id="wp-main">
          <Header
            title={data.data.title}
            description={data.data.description}
            keywords={data.data.keywords}
            canonical_tags={data.data.canonical_tags}
          ></Header>
        </div>
        <section class="content-container">
          <div className="container-fluid shopify-bg p-0 m-0 shopifyBg">
            <div className="shopify-bg-right">
              <div className="shopify-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center shopify-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="sub-text-above-main-title title-white">
                        We offer Solutions for
                      </p>
                      <h1 className="main-title  title-white d-block">
                        Blockchain <br />
                        development
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <h2 className="bold-contents shopify-content-box pl-4 text-justify">
                        With the introduction of the Bitcoin protocol, the
                        internet has been obsessed with the technological marvel
                        that is blockchain technology. We at hashtag being no
                        stranger to advanced technology are among the forefront
                        in blockchain adoption and implementation.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h3 className="main-title title-orange why-bc-sec-tt">
                  Why Blockchain Technology?
                </h3>
                <div className="shopify-content mt-4">
                  <p className="mb-4 text-justify">
                    In this digital age where trust is hard to come by,
                    blockchain technology brings to the table that which is most
                    sought after, the ability to trust in a trustless
                    environment. Its main selling point is that it is
                    incorruptible. In a world where power is being consolidated
                    more and more in small sectors, the ability to decentralize
                    is being increasingly sought after and blockchain is the way
                    to deliver on that need. The data stored on the blockchain
                    is immutable i.e., it can never be modified or changed by
                    any actor, good or bad.This enables us to leverage
                    blockchain technology to conduct transactions between
                    various groups in an easy, secure and transparent manner.
                  </p>
                  <p className="text-justify">
                    Though blockchain technology has existed for a while, it is
                    now that it has come to the forefront of the tech industry.
                    This is due to the fact that the industry has realised the
                    potential of this technology and that it can leverage this
                    technology to simplify tasks which were otherwise done in a
                    much more complex manner in various industries.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="/images/blockchain/blockchain.svg"
                  alt="blockchain"
                  className="img-fluid shopify-image mobile-image-border storefront-img"
                />
              </div>
            </div>
          </div>
          <div class="wordpress-section-3 pb-5 ">
            <div className="container">
              <div className="row">
                <div class="col-12 wp-sec-3-content shopify-sec-3-content">
                  <p class="text-above-main-title text-above-main-title-c text-center mb-0">
                    You Dream It: We Build It
                  </p>
                  <h3 class="main-title title-orange text-center">
                    What We Offer
                  </h3>
                </div>
              </div>
              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/blockchainconsult1.svg"
                        alt="consulting"
                      />
                      <p className="text-level-5 title-black">
                        Blockchain Consulting
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        We sit down with you and discuss your objectives,
                        limitations and objectives to choose the best possible
                        roadmap of a solution to delivering you with what you
                        need..
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/contract1.svg"
                        alt="smart_contract"
                      />
                      <p className="text-level-5 title-black">
                        Smart Contract Development
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        We build smart contracts that can once deployed, exist
                        on the chain and in an autonomous manner while remaining
                        secure and reliable.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/ethereum1.svg"
                        alt="ethereum_dev"
                      />
                      <p className="text-level-5 title-black">
                        Ethereum Development
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        We at hashtag are experts on ethereum development and
                        can help you use the second largest blockchain to
                        enhance your business by building applications that run
                        on the ethereum blockchain.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/blockchainphone1.svg"
                        alt="dapp_dev"
                      />
                      <p className="text-level-5 title-black">
                        Dapp Development
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        We at hashtag are experts on ethereum development and
                        can help you use the second largest blockchain to
                        enhance your business by building applications that run
                        on the ethereum blockchain.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>

              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt">
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/api1.svg"
                        alt="api_integration"
                      />
                      <p className="text-level-5 title-black">
                        API Integration
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        We offer services which enable us to incorporate
                        advanced blockchain protocols and API’s into your
                        existing business model to drive your business forward.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/blockchain1.svg"
                        alt="private_blockchain_dev"
                      />
                      <p className="text-level-5 title-black">
                        Private Blockchain Development
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        Setting up a private blockchain network both locally and
                        on the cloud can have various benefits to your business
                        model. Enable your business to grow and evolve by
                        relying on a private network designed specifically for
                        your benefit.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-3 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="/images/blockchain/concept1.svg"
                        alt="proof"
                      />
                      <p className="text-level-5 title-black">
                        Proof of Concept
                      </p>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p className="text-justify">
                        We understand your needs and help you realise and verify
                        your idea and its effectiveness within your organization
                        and beyond by building an efficient model capable of
                        proof of concept.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>

          <div className="container top-index bg-white">
            <div className="row justify-content-center pt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <p class="text-above-main-title text-above-main-title-c mb-0">
                  We Build Digital Solutions
                </p>
                <h3 className="main-title title-orange">Why Choose Hashtag?</h3>
                <div className="dp-on-sm">
                  <img
                    src="/images/blockchain/etherium 1.svg"
                    alt="etherium_img"
                    className="img-fluid shopify-image mobile-image-border storefront-img"
                  />
                </div>
                <div className="shopify-content mt-4">
                  <p className="text-justify">
                    Our creative specialists and expert minds are building
                    decentralized apps based on solid and customizable Ethereum.
                    Get in touch with us to use the most sophisticated tools and
                    techniques to develop your own decentralized application.
                  </p>
                  <div className="contact-form-link">
                    <a href="/contact-us">
                      {" "}
                      <div className="btn-group form-btn">
                        <button
                          type="button"
                          className="btn form-button font-12 font-bold"
                        >
                          LET'S TALK
                        </button>
                        <button
                          type="button"
                          className="btn form-button-child px-3"
                        >
                          <span className="">
                            <span className="form-btn-arrow btn-right-arrow"></span>
                          </span>
                        </button>
                        <div className="dropdown-menu"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center hd-on-sm">
                <img
                  src="/images/blockchain/etherium 1.svg"
                  alt="etherium_img"
                  className="img-fluid shopify-image mobile-image-border storefront-img"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid ask-expert-section expert-resume-container why-choose-bc-sec">
            <div className="row m-0">
              <div className="col-12 col-lg-10 col-sm-10 col-md-12 expert-resume-section text-center">
                <p class="main-title title-white text-center main-title-bc-sec-h">
                  <div className="main-title-sub-bc">Come Join Our</div>
                  BLOCKCHAIN HACKATHON
                </p>
                <div className="contact-form-link">
                  <a href="/careers">
                    <div className="btn-group form-btn why-choose-bc-sec-btn">
                      <button
                        type="button"
                        className="btn form-button font-12 font-bold"
                      >
                        JOIN US
                      </button>
                      <button
                        type="button"
                        className="btn form-button-child px-3"
                      >
                        <span className="">
                          <span className="form-btn-arrow btn-right-arrow form-btn-arrowbc-sec"></span>
                        </span>
                      </button>
                      <div className="dropdown-menu"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bc_contact">
          <Contact></Contact>
          </div>
        </section>
        <div className="bc_footer">
        <Footer></Footer>
        </div>
      </div>
    );
  }
}
