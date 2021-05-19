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

export default class Easylevel extends Component {


  constructor(props) {
    super(props);

    this.state = {
      
    };


    
  }

  componentDidMount() {
    
  }

  


  render() {
    const meta = {
      title: 'Easy level Case study - FullStack Web Development| Bay area, California',
      meta: {
        charset: 'utf-8',
          name: {
            keywords: 'Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california'
        }
      }
    };

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
      cssEase:'ease-in-out',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: "12%",
          }
        }
      ]
    };

    return (
      <div className="case-study easylevel" id="easylevel-case-study">
        <DocumentMeta {...meta} />
        <Header></Header>
        <section className="content-container case-study">

          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="common-title-wrap px-md-3">
                    <div className="common-head-blk">
                      <h6>Full Stack Development</h6>
                      <h2 className="main-title title-white">Easy-Level</h2>
                      <ul className="project-info">
                        <li><strong>Industry:</strong>Decentralized P2P payment & Advertising</li>
                        <li><strong>Location:</strong>Italy</li>
                        <li><strong>Technology/Blockchain:</strong>Solidity, Metamask, ETH Smart Contract/ERC20/ERC721</li>
                        <li><strong>Technology/DApp:</strong> React/Redux/Web3, Python/Django/Web3, NodeJS/Web3/SocketIO, MySQL, Linux, Git CI/CD pipeline with Docker</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="project-about-blk project-about-blk-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-11 offset-md-1 col-lg-5 offset-lg-1">
                  <div className="project-blk-title">
                    <h6 className="text-above-main-title">A Descentralized Platform</h6>
                    <h3 class="main-title title-orange">Introduction</h3>
                  </div>
                  <p>In the current system of online advertising it is impossible for viewers to make any revenue though they generate the bulk of it. </p>
                  <p>We offer a p2p decentralized system in which all participants are rewarded based on the degree of participation in the system with the native ADV token which can be redeemed for ETH which can be converted to USD. </p>
                  <p>This incentivises viewers to participate and promote the system which offers them a reward for their views and clicks.</p>
                </div>
                <div className="img-blk">
                  <img src="/images/case-studies/easylevel/easy-level-banner.svg" alt="easy-level-banner" />
                </div>
              </div>
            </div>
          </div>
   <div className="architecture-blk architecture-blk-white">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10 col-xl-10">
                  <div className="project-blk-title text-center">
                    <h6 className="text-above-main-title">How It Works</h6>
                    <h3 className="main-title title-orange">Architecture</h3>
                  <p className="title-black">P2P payment</p>
                  </div>
                  <div className="workflow-wrap">
                    <img src="/images/case-studies/easylevel/archi1.svg" alt="Architecture" />
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
                    <p className="title-black">Advertising platform</p>

                  </div>
                  <div className="workflow-wrap">
                    <img src="/images/case-studies/easylevel/archi2.svg" alt="Architecture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
 <div className="project-about-blk product-work">
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="project-unique-wrap">
                    <div className="project-blk-title">
                      <h6 className="text-above-main-title">product work</h6>
                      <h3 className="main-title title-orange">How it works</h3>
                    </div>
                      <p>EasyLevel works on 16 Advertising platforms, and gets its profits from the 
spread generated between Publisher and Advertiser, and from all views 
and clicks performed by visitors:</p>

<div className="cust-order-list">
<ol>
<li><strong>
Profits division table: </strong>

<p>10% to the clickers </p>
<p>10% to the Publisher </p>
<p> 80% to the Smart Contract which benefits all EL users. </p>



</li>
<li><strong>The division of those 15 USD is as follows: </strong> 
<p> 1.5 USD to the Sponsor</p>
<p> 1.5 USD to Marketing</p>
<p>  12 USD pays the advertising space. </p>
</li>
<li><strong>
Within a 15 USD DRAFT the system purchases an advertising space to publish banners,which generates a cash income of 22.5 USD:</strong> 
<p>7.5$ x 3 consecutively in 90 DAYS</p>
</li>
</ol></div>





                  </div>

                  <div className="project-unique-wrap challenge-sec">
                    <div className="project-blk-title">
                      <h6 className="text-above-main-title">Process</h6>
                      <h3 className="main-title title-orange">Use Case</h3>
                    </div>
                    <p>Founders buy drafts(like packages) and get ADV tokens.
Moderators buy ADV tokens directly.<br/>
Founders and Moderators can sell ADV tokens to Advertisers.<br/>
Advertisers can post ad banners on Easy-Level faucets.<br/>
Viewers and Clickers can get ADV tokens whenever they view or click banners. They also can withdraw ADV tokens in ETH after they get an expected amount that Easy-Level prefers.<br/>
All Founders, Moderators, Advertisers, and Users can all feature on Easy-Level with Metamask or private key on Mobile devices.
</p>
                    
                  </div>
                </div>
                <div className="col-md-6 sticky-image-section">
                  <div className="speakinc-img sticky-img">
                    <img src="/images/case-studies/easylevel/easy-level-sticky.svg" alt="easy-level-sticky" />
                  </div>
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
                      <h6 className="text-above-main-title">Design with user in mind</h6>
                      <h3 class="main-title title-orange">User Interface</h3>
                    </div>

                    <div className="ui-slider">
                      <Slider {...settings} className="slide-outer">

                        <div className="slide-div">
                          <div className="slider-img">
                            <img src="/images/case-studies/easylevel/easy-level-slider.svg" alt="easy-level1" />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img src="/images/case-studies/easylevel/easy-level-slider2.svg" alt="easy-level2" />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img src="/images/case-studies/easylevel/easy-level-slider3.svg" alt="easy-level3" />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img src="/images/case-studies/easylevel/easy-level-slider4.svg" alt="easy-level4" />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img src="/images/case-studies/easylevel/easy-level-slider5.svg" alt="easy-level5" />
                          </div>
                        </div>
                        <div className="slide-div">
                          <div className="slider-img">
                            <img src="/images/case-studies/easylevel/easy-level-slider6.svg" alt="easy-level6" />
                          </div>
                        </div>
                       
                      </Slider>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="multi-token skillset-blk">
            <div className="container">
              <div className="row justify-content-left">
                <div className="col-md-11 col-lg-11 col-xl-11 offset-md-1">
                  <div className="project-blk-title text-center">
                    <h6 className="text-above-main-title">SKILLS</h6>
                    <h3 class="main-title title-orange">Our skillsets</h3>
                  </div>
                  <div className="skillset-wrap text-left">
                    <ul className="skill-list">
                       <li>Ethereum</li>
                      <li>ERC721</li>
                      <li>Decentralized exchange</li>
                      <li>Solidity</li>
                      <li>Uniswap</li>
                      <li>Arbitrage Bot</li>
                      <li>ERC20</li>
                      <li>HDWallets</li>
                      <li>Strategy based Bot</li>
                      <li>ERC223</li>
                      <li>P2P exchange</li>
                      <li>Web3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

           <div className="project-unique-blk">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12 offset-lg-1">
                  <div className="project-unique-wrap">
                    <div className="project-blk-title">
                      <h6 className="text-above-main-title">project PROCESS</h6>
                      <h3 class="main-title title-orange">Agile development process</h3>
                    </div>
                    <div className="cust-order-list cust-order-list-no-count">
                      <ul>
                        <li className="pb-3"><strong><span className="title-orange">Front-end</span>  Front-end  React/Redux-thunk, Web3 </strong><p className="mt-2">Front-end with React/Redux-thunk, Web3(integration between the smart contracts and website)</p> </li>
                        <li className="pb-3"><strong><span className="title-orange">Back-end</span>  Python/Django, Web3 </strong><p className="mt-2">Back-end with Python/Django, Web3(integration between the smart contracts and the private keys from users)</p></li>
                        <li className="pb-3"><strong> <span className="title-orange">Back-end</span>  NodeJS/SocketIO</strong><p className="mt-2">Easy-Level updates transaction info real time. SocketIO is being broadcasted to the UI whenever there is an update on Easy-Level.</p> </li>
                        <li className="pb-3"><strong><span className="title-orange">Database</span>  MySQL</strong><p className="mt-2">Transaction history, activities from viewers and clickers and registered users are being managed by DB. </p></li>
                        <li className="pb-3"><strong><span className="title-orange">DevOps</span>  Git CI/CD pipeline and Docker</strong><p className="mt-2">On gitlab, I have built a CI/CD pipeline based on Docker repositories. DevOps works automatically passing `dev` and `test` stages to update `production` server.</p> </li>
                        <li className="pb-3"><strong><span className="title-orange">Smart Contracts</span>  Solidity</strong><p className="mt-2">We have used Provable and Oracle to integrate 3rd party API to fetch data like price rate, allowance from Easy-Level, and so on.</p> </li>
                        <li className="pb-3"><strong><span className="title-orange">Audit</span>  Zeppelin </strong><p className="mt-2">We also have used Zeppelin to audit Smart Contracts. I have implemented test cases on it and always ran them to audit Smart Contracts.</p> </li>
                      

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-12 align-self-end">
                  <Slide bottom>
                  <div className="hand-img-blk">
                    <img src="/images/case-studies/easylevel/easy-level-phone-mockup.svg" alt="easy-level-phone" />
                  </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
           <div className="orange-strip-blk white-centered">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="project-blk-title">
                    <h6 className="text-above-main-title">project achievements</h6>
                    <h3 className="main-title mb-2">What We Achieved</h3>
                    <img className="mb-2" src="../images/shopify/shopify-quoute.svg" alt="quote"/>
                  </div>
                  <p>By leveraging smart contracts and the ethereum blockchain, we have successfully implemented a system of decentralized p2p advertising that is capable of sharing the revenue generated among all the participants of the system , even the viewers with no limitation based on their location.</p>
                </div>
              </div>
            </div>
          </div>

          <Contact></Contact>

        </section>
        <Footer></Footer>
      </div>
    )
  }
}
