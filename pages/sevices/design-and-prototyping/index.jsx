import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Contact from '../../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import Slide from 'react-reveal/Reveal';
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
        slug: "sevices-design",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

export default class DesignPage extends Component {
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
      <div className="contact-main" id="Dnpbanner">
        <div className="wp-main" id="wp-main">
          <Header
            title={data.data.title}
            description={data.data.description}
            keywords={data.data.keywords}
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
                        Design and
                        <br />
                        Prototyping
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <p className="bold-contents shopify-content-box pl-4">
                        Story telling, Branding, User Research, Prototyping -
                        you name it!. We do everything to visually feel the
                        website structure before making decisions on in-depth
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <h1 className="main-title title-orange why-bc-sec-tt">
                  Showcase Of Your Business
                </h1>
                <div className="shopify-content mt-4">
                  <p className="mb-4">
                    Your website is the first storefront of your brand. Every
                    business needs a custom website and that should be
                    user-friendly and attractive which represents your business
                    identity and style.
                  </p>
                  <p>
                    We are passionate about crafting an engaging and unique
                    online presence that we can provide that will set you apart
                    from your competitors. Refresh and boost your website look
                    and feel by bringing a new shiny design.
                  </p>
                  <h1 class="main-title">
                    <img src="../images/wordpress/wp-quoute.svg" alt="quote" />
                  </h1>
                  <div className="wp-main">
                    <p class="hash-content-col title-black why-us-hash-content">
                      <p>
                        We Create Beautiful Engaging Experience For Your
                        <br></br>
                        Business To Stand Out From The Crowd
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                <img
                  src="/images/design/showcase1.svg"
                  alt="Showcase Of Your Business"
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
                    OUR stack
                  </p>
                  <h1 class="main-title title-orange text-center">
                    Our Expertise
                  </h1>
                </div>
              </div>
              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/design/expertise-1.svg"
                        alt="Research and Unique Strategy"
                      />
                      <h4 className="text-level-5 title-black">
                        Research & Unique Strategy
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        Our creative minds will help you build a unique
                        strategic direction for both your business objective and
                        your target audience. We’ll help to transform your idea
                        into an inspiring user experience.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/design/expertise-2.svg"
                        alt="Design Thinking"
                      />
                      <h4 className="text-level-5 title-black">
                        Design Thinking
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        This allows us to understand your brand’s story and
                        identifies the message that your business wants to
                        broadcast through the online presence. We architect your
                        product by analyzing this business model strategy.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/design/expertise-3.svg"
                        alt="Architecture"
                      />
                      <h4 className="text-level-5 title-black">Architecture</h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        We can help you in building an architecture for your
                        brand and organise your content, navigation structure
                        which will influence your audience to meet their goals
                        and engage on your website.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/design/expertise-4.svg"
                        alt="Wireframing"
                      />
                      <h4 className="text-level-5 title-black">Wireframing</h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        Being a graphical skeleton, wireframe and storyboards
                        guides the content and concepts of a page. With the help
                        of it, we’ll lead you to visualize and finalize the
                        layout structure of your website.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/design/expertise7.svg"
                        alt="Prototyping"
                      />
                      <h4 className="text-level-5 title-black">Prototyping</h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        Prototyping helps to develop an interactive and high
                        fidelity design which works and looks exactly like your
                        website/app. Now we are so close to building your
                        awesome product.
                      </p>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="col-lg-4 col-sm-6 mob-padding">
                    <div className="what-we-do-border-style what-we-do-responsive">
                      <img
                        src="../images/design/expertise-5.svg"
                        alt="Graphic Designing"
                      />
                      <h4 className="text-level-5 title-black">
                        Graphic Designing
                      </h4>
                      <hr class="hashtag-underline ml-2"></hr>
                      <p>
                        Our expert designers are technology conscious and can
                        take care of your website and your entire brand story in
                        a visually appealing way. Our desire to create something
                        that has a spirit and soul of your business.
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>

              <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt"></div>
            </div>
          </div>

          <div className="container top-index bg-white">
            <div className="row justify-content-center pt-5 section-2-row pl-3 pr-3">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <p class="text-above-main-title text-above-main-title-c mb-0">
                  achieve the turning point of your business
                </p>
                <h1 className="main-title title-orange">Why Choose Hashtag</h1>
                <div className="dp-on-sm">
                  <img
                    src="/images/design/showcase.svg"
                    alt="showcase"
                    className="img-fluid shopify-image mobile-image-border storefront-img"
                  />
                </div>
                <div className="shopify-content mt-4">
                  <p>
                    We have a passion for innovation and bright ideas. We have
                    the knack of conveying the essence of your brand in the
                    design. It doesn't matter if you don't have one. We can even
                    create a brand and create an identity for you.With our
                    expertise and experience, we tailor technology to fit your
                    business needs. We always love to be your long-term
                    strategic partner.
                  </p>
                  <div class="wp-main">
                    <p class="hash-content-col title-black why-us-hash-content">
                      <p>
                        It's time to choose a custom web development
                        <br></br>
                        company to partner on your new business.
                      </p>
                    </p>
                  </div>
                  <div className="contact-form-link">
                    <a href="/contact-us">
                      {" "}
                      <div className="btn-group form-btn">
                        <button
                          type="button"
                          className="btn form-button font-12 font-bold"
                        >
                          SAY HELLO
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
                  src="/images/design/showcase.svg"
                  alt="showcase"
                  className="img-fluid shopify-image mobile-image-border storefront-img"
                />
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