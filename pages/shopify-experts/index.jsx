import React, { Component } from "react";
import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";
import Contact from "../../components/contacts/index.jsx";
// import Slider from "../../components/slider/index.jsx";
import DocumentMeta from "react-document-meta";
import Link from "next/link";

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
export default class Shopify extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data.data,
    };
  }
  render() {
    const meta = {
      title: "Shopify Development-BayArea, California",

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
      <div className="shopify-main" id="shopify-main">
        <DocumentMeta {...meta} />

        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
        ></Header>
        <section class="content-container">
          <div className="container-fluid shopifyBg p-0 m-0 ">
            <div className="shopify-bg-right">
              <div className="shopify-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center shopify-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="sub-text-above-main-title title-white">
                        E-commerce platform{" "}
                      </p>
                      <h1 className="main-title  title-white d-block">
                        Shopify
                      </h1>
                      <div>
                        <img
                          id="shopify-page-experts-logo"
                          src="images/shopify/shopify-experts.svg"
                          alt="shopify-experts"
                        />
                        <img
                          id="shopify-page-partner-logo shopify-logo-left"
                          src="images/shopify/shopify-partner.svg"
                          alt="shopify-partner"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <p className="bold-contents shopify-content-box pl-4">
                        We Design & Set-Up Beautiful E-commerce Store in
                        Shopify. We are official Shopify Partners and Shopify
                        Experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            {/* section 2 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h1 className="main-title title-orange">
                  Let us help you with
                </h1>
                <span className="shopify-sub-title">
                  <span>
                    Theme Customization | Store Setup | Migration to Shopify
                  </span>
                  <br />
                  <span className="d-xl-block d-xxl-block">
                    SEO and Google integration | Support{" "}
                  </span>
                </span>
                <div className="shopify-content mt-4">
                  <p>
                    <span className="d-xxl-block">
                      We are official Shopify setup experts and Shopify Partners
                      from
                    </span>

                    <span className="d-xxl-block">
                      California. We specialize in the design & development of
                      custom{" "}
                    </span>
                    <span className="d-xxl-block">
                      e-commerce experiences. Our team can partner with you to
                      build a
                    </span>
                    <span className="d-xxl-block">
                      {" "}
                      beautiful online store for your business. Let us assist
                      you every step
                    </span>
                    <span className="d-xxl-block">
                      {" "}
                      of the way and grow your brand for the long-term.
                    </span>
                  </p>

                 
                  <div className="contact-form-link">
                    <Link href="/contact-us">
                      <a className="nav-link p-0">
                      {" "}
                      <div className="btn-group form-btn">
                        <button
                          type="button"
                          className="btn form-button font-12 font-bold"
                        >
                           LET'S TALK{" "}
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
            </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="images/shopify/shopify-buy-now-banner.svg"
                  alt="shopify-image"
                  className="img-fluid shopify-image mobile-image-border storefront-img"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid shopify-section-3">
            <div className="row">
              <div class="col-12 shopify-sec-3-content">
                <p class="text-above-main-title text-center">OUR EXPERIENCE</p>
                <h1 class="main-title title-orange text-center">
                  Latest Works
                </h1>
              </div>
            </div>
            {/*section 3 */}

            {/* <Slider> </Slider>*/}
          </div>

          <div className="shopify-section-4-main">
            <div className="container-fluid shopify-section-4">
              <div className="container">
                {/*section 4 */}

                <div className="row justify-content-center  pl-3 pr-3">
                  <div className="col-12 col-lg-5 col-xxl-5 col-md-12 content-four-section">
                    <p className="text-above-main-title title-white">
                      THE BEST E-COMMERCE PLATFORM
                    </p>

                    <h1 className="shopify-title">
                      <span className="main-title title-white d-block">
                        Why Shopify?
                        <br />
                        <img
                          src="images/shopify/shopify-quoute.svg"
                          alt="quote"
                        />
                      </span>
                    </h1>

                    <p class="hash-content-col title-white why-us-hash-content">
                      <p>
                        We recommend Shopify because its world leading
                        E-Commerce platform that's great in performance and easy
                        to manage. We are official Shopify setup experts and
                        Shopify Partners from California.
                      </p>
                    </p>
                     <div className="contact-form-link">
                      <Link href="/contact-us" className="contact-form-link"><a>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-hashtag font-bold"
                          >
                            LET'S TALK{" "}
                          </button>
                          <button type="button" className="btn  px-3">
                            <span className="">
                              <span className="hashtag-arrow btn-right-arrow"></span>
                            </span>
                          </button>
                          <div className="dropdown-menu"></div>
                        </div>
						</a>
            </Link>
                    </div>
                  </div>

                  <div className="col-12 col-lg-3 col-md-12"></div>
                  <div className="col-12 col-lg-3 col-md-12"></div>
                </div>
              </div>{" "}
            </div>
          </div>

          {/* two column list section */}

          <div className="container shopify-benifits-section">
            <div className="row">
              <div class="col-12">
                <p class="text-above-main-title text-center">
                  PERFECT SOLUTION FOR BUSINESS
                </p>
                <h1 class="main-title title-orange text-center">
                  Shopify Benefits
                </h1>
              </div>
            </div>
            {/* section 1 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h1 className="shopify-title text-level-4">
                  Beautiful Storefront
                </h1>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list">
                      <li>500+ Professional themes to choose from </li>
                      <li>Customize for your own brand </li>
                      <li>All mobile-ready</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="images/shopify/storefront.svg"
                  alt="storefront"
                  className="img-fluid shopify-image mobile-image-border"
                />
              </div>
            </div>

            {/* section 2 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12  order-2 order-lg-12 order-md-2 order-sm-2">
                <h1 className="shopify-title text-level-4">
                  Great Shopping Experience
                </h1>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list">
                      <li>Highly secure transactions</li>
                      <li>Integrated shipping rates</li>
                      <li>Multiple payment options</li>
                      <li>Free Shipping & COD features</li>
                      <li>Easy tax calculation</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 order-3 text-center ">
                <img
                  src="images/shopify/experience.svg"
                  alt="shopping-experience"
                  className="img-fluid shopify-image mobile-image-border"
                />
              </div>
            </div>

            {/* section 3 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h1 className="shopify-title text-level-4">
                  Professional
                  <br /> Admin Dashboard
                </h1>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list">
                      <li>Easy product management</li>
                      <li>Customer database</li>
                      <li>Easy order management and refunds</li>
                      <li>Multiple email templates</li>
                      <li>Professional reports and growth metrics</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="images/shopify/dashboard.svg"
                  alt="dashboard"
                  className="img-fluid shopify-image mobile-image-border"
                />
              </div>
            </div>

            {/* section 4 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12  order-2 order-lg-12 order-md-2 order-sm-2">
                <h1 className="shopify-title text-level-4">
                  Sales and Marketing
                </h1>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list">
                      <li>Highly optimized and Google-Ready</li>
                      <li>Discounts and gift card features</li>
                      <li>Sell on social media</li>
                      <li>Product reviews to improve sales</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 order-3 text-center">
                <img
                  src="images/shopify/marketing.svg"
                  alt="sales"
                  className="img-fluid shopify-image mobile-image-border"
                />
              </div>
            </div>

            {/* section 5 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h1 className="shopify-title text-level-4">High Performance</h1>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list">
                      <li>Faster than any other E-Commerce store</li>
                      <li>Unlimited data bandwidth</li>
                      <li>99.98% uptime guaranteed</li>
                      <li>Auto store updates</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="images/shopify/perfomance.svg"
                  alt="performance"
                  className="img-fluid shopify-image mobile-image-border"
                />
              </div>
            </div>

            {/* section 6 */}
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              {/* <div className="col-lg-6 col-md-12 col-sm-12 order-2 order-lg-12 order-md-12 order-sm-12"> */}
              <div className="col-lg-5 col-md-12 col-sm-12  order-2 order-lg-12 order-md-2 order-sm-2">
                <h1 className="shopify-title text-level-4">
                  Enjoy the FREE Admin App
                </h1>
                <div className="shopify-content mt-4">
                  <p>
                    <ul className="shopify-benifits-list">
                      <li>Run business on the go</li>
                      <li>Manage orders</li>
                      <li>Manage inventory</li>
                      <li>Email customers</li>
                      <li>Auto sync with your web store</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 order-3 text-center ">
                <img
                  src="images/shopify/admin-app.svg"
                  alt="admin_app"
                  className="img-fluid shopify-image mobile-image-border"
                />
              </div>
            </div>
          </div>

          {/* contact form */}

          <Contact></Contact>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
