import React, { Component } from "react";
import Header from "../../../components/header/index.jsx";
import Footer from "../../../components/footer/index.jsx";
import Underconstruction from "../../../components/under-construction/index.jsx";
import Contact from "../../../components/contacts/index.jsx";
import DocumentMeta from "react-document-meta";
import $ from "jquery";
import axios from "axios";
import * as config from "../../../config.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Slide from "react-reveal/Reveal";

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
        slug: "casestudies-multitoken",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}
export default class Multitoken extends Component {
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
      <div className="case-study multi-token" id="case-study">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
        ></Header>
        <section className="multi_token content-container case-study">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="common-title-wrap px-md-3">
                    <div className="case-multitoken-size">
                      <p className="multi_token_title">
                        Full Stack Development
                      </p>
                    </div>
                    <h1 className="main-title title-white">
                      Multi Token Wallet In Gaming
                    </h1>
                    <ul className="project-info">
                      <li className="text-justify">
                        <strong>Industry: </strong>Owning game assets/real world
                        assets on the blockchain
                        <br /> with DEX to sell them and/or Staking/Betting
                        contractng
                      </li>
                      <li className="text-justify">
                        <strong>Technology: </strong>Ethereum/Solidity,
                        Metamask, Web3, Truffle
                      </li>
                      <li className="text-justify">
                        <strong>Smart Contracts: </strong>ERC20, ERC1155
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="technology-blk no-sticky">
            <div className="container">
              <div className="row">
                <div className="col-md-11 offset-md-1 col-lg-5 offset-lg-1">
                  <Slide bottom>
                    <div className="technology-wrap">
                      <div className="project-blk-title">
                        <div className="text-above-main-title">
                          INTRODUCTION
                        </div>
                        <h2 class="main-title title-orange">Summary</h2>
                      </div>
                      <div className="technology-list">
                        <div className="tech-item">
                          <p className="text-justify">
                            This project allows a variety of uses in practice.
                            Real world assets like cars can be tokenized and
                            added to the blockchain. We employ the ERC1155
                            standard which has fungible tokens represented by an
                            id and is similar to ERC20 but does not have a way
                            to store a symbol to represent the tokens.
                          </p>
                          <p className="text-justify">
                            ERC1155 standard can create NFT tokens similar to
                            ERC721 but has lower fees to deploy due to the fact
                            that the non-fungible item is a token and not
                            another contract therefore eliminating the
                            redundancy of the code and saving deploying and
                            minting cost.
                          </p>
                          <p className="text-justify">
                            Thereby when a realworld asset like a car is
                            tokenized using an ERC1155 token standard, we can
                            create a corresponding non fungible or fungible
                            asset on the blockchain to represent it and store
                            its value by means of rarity. This is most often
                            seen in gaming where lets say a game asset like a
                            trading card is non fungible and unique.
                          </p>
                          <p className="text-justify">
                            But it has its own value or cost depending upon how
                            rare it is. This project can capture both those
                            aspects of that card or any other item the developer
                            chooses.
                          </p>
                          <p className="text-justify">
                            If we used an ERC20 and ERC721 standard separately
                            then it would add a lot of redundant code to the
                            chain and hence we substitute it with the
                            combination of the two which is ERC1155. By
                            employing this standard we also enable the
                            tradability of these tokens on all major DEX which
                            support ERC1155 and increase its scale.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="sticky-img custom-sticky-image">
                    <img
                      src="/images/case-studies/multitoken/summary-1.svg"
                      alt="multitoken-intro"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="diagram-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <div className="project-blk-title text-center">
                    <div className="text-above-main-title">HOW IT WORKS</div>
                    <h2 class="main-title title-orange">Architecture</h2>
                  </div>
                  <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                    <img
                      src="/images/case-studies/multitoken/summary-2.svg"
                      alt="architecture"
                      className="img-fluid shopify-image mobile-image-border storefront-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="technology-blk technology-custom">
            <div className="container">
              <div className="row">
                <div className="col-md-11 offset-md-1 col-lg-5 offset-lg-1">
                  <Slide bottom>
                    <div className="technology-wrap">
                      <div className="project-blk-title">
                        <div className="text-above-main-title">DESCRIPTION</div>
                        <h2 class="main-title title-orange">How it works</h2>
                      </div>
                      <div className="technology-list">
                        <div className="tech-item">
                          <p className="text-justify">
                            Every gaming asset or real world asset is tokenized
                            and added to the blockchain. Every token is fungible
                            so you can own increments of each asset. Assets are
                            allowed to be traded on different platforms based on
                            current value or a native DEX can be provided that
                            will allow for buying and selling of tokenized
                            assets. Each tokenized asset can have metadata to
                            specify special attributes on the front end.
                          </p>
                          <p className="text-justify">
                            Only the owner can create additional assets. All
                            assets can be minted and sold directly on to the DEX
                            provided.<br></br>
                            Optional membership token: All users that want to
                            purchase assets have to purchase membership token to
                            have access to the buy and sell functionality. And
                            optional market fee for every market order trade can
                            be implemented. Asset companies can have revenue
                            from tokenized assets, membership tokens and market
                            order fees (1%).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="technology-wrap">
                      <div className="project-blk-title">
                        <div className="text-above-main-title">PROCESS</div>
                        <h2 class="main-title title-orange">Use Case</h2>
                      </div>
                      <div className="technology-list">
                        <div className="tech-item">
                          <p className="text-justify">
                            Game/Asset companies will receive contracts that
                            will allow for tokenization of their assets and
                            track every item all in one wallet. And also
                            allowing functionality to add additional tokens at
                            any moment they want. Tokens will be compatible with
                            larger exchanges that allow for trading of ERC155
                            tokens and an optional DEX contract can be provided
                            to allow for buying and selling of native game
                            tokens. Companies can sell tokens for a steady
                            source of revenue.
                          </p>
                          <p className="text-justify">
                            A staking contract can be implemented alongside this
                            ecosystem to allow users to stake ERC1155 tokens and
                            earn rewards for participating. We can also alter
                            the code to allow for betting This will create a
                            more dynamic token economy ecosystem.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="technology-wrap">
                      <div className="project-blk-title">
                        <div className="text-above-main-title">TAGLINE</div>
                        <h2 class="main-title title-orange">
                          Resolution/ Technology{" "}
                        </h2>
                      </div>
                      <div className="technology-list">
                        <div className="tech-item">
                          <p className="text-justify">
                            ERC1155 mixed with ERC20 will make for a secure
                            asset minting contract rewards/betting system that
                            will allow for tokenization of assets on the
                            blockchain. They used technology called Ethereum
                            Smart Contract. It excludes any possibility of
                            cheating; besides it offers a fast and secure
                            payment method without additional fees.
                          </p>
                          <p className="text-justify">
                            The security is in the well-tested contracts on the
                            Ethereum network and every token has a special id
                            that can be identified and verified allowing for
                            unique or rare assets to be created. Users can
                            trade, place a bet or stake the assets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="sticky-img custom-sticky-image">
                    <img
                      src="/images/case-studies/multitoken/multi-token3.svg"
                      alt="multi-token-sticky"
                    />
                  </div>
                </div>
                {/*<div className="sticky-img">
                  <img src="/images/case-studies/multitoken/multi-token3.svg" alt="" />
                </div>*/}
              </div>
            </div>
          </div>

          <div className="skillset-blk">
            <div className="container">
              <div className="row justify-content-left">
                <div className="col-md-11 col-lg-11 col-xl-11 offset-md-1">
                  <div className="project-blk-title text-left">
                    <div className="text-above-main-title">TAGLINE HERE</div>
                    <h2 class="main-title title-orange">We Are Experts In</h2>
                  </div>
                  <div className="skillset-wrap text-left">
                    <ul className="skill-list">
                      <li>Ethereum</li>
                      <li>ERC1155 fungible tokens</li>
                      <li>Uniswap</li>
                      <li>Solidity</li>
                      <li>HDWallets</li>
                      <li>Decentralized exchange ERC20/ERC1155</li>
                      <li>ERC20</li>
                      <li>DeFi</li>
                      <li>Truffle/Ganache</li>
                      <li>ERC1155 fungible tokens</li>
                      <li>ERC721</li>
                      <li>Web3</li>
                      <li>Staking contracts</li>
                      <li>Betting/Casino contracts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="project-about-blk multi-tk-project-about-blk">
            <div class="container">
              <div class="row">
                <div class="col-md-11 offset-md-1 col-lg-7 offset-lg-1 mx-auto text-center">
                  <blockquote
                    cite="https://www.hashtag-ca.com/"
                    className="text-justify"
                  >
                    Blockchain tech will usher in a cleaner, more transparent
                    era in the gambling industry. Due to the security, inherent
                    fairness and benefits that come from the deployment of such
                    a system, more and more exciting as well as new
                    betting/gaming projects are looking at blockchain solutions
                    for the near future.
                  </blockquote>
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
                      <p class="main-title title-white multi-token_margin_bottom">
                        Try Us. Take a Minute{" "}
                      </p>
                      <div class="learn-more home-lm-link-vs">
                        <div className="btn-comm">
                          <a href="/contact-us">SAY HELLO</a>
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
