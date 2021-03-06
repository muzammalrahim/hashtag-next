import React, { Component } from "react";

// import DocumentMeta from "react-document-meta";
// import Underconstruction from "../../../components/under-construction";
// import Testimonial from "../../../components/testimonial/index.jsx";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Axios from "axios";
import https from "https";

require("typeface-montserrat");
import dynamic from "next/dynamic";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Contact = dynamic(
  () => import("../../../components/contacts/index.jsx"),
  { ssr: false }
);
const Header = dynamic(() => import("../../../components/header/index.jsx"));
const Footer = dynamic(() => import("../../../components/footer/index.jsx"), {
  ssr: false,
});
const Slide = dynamic(() => import("react-reveal/Reveal"), { ssr: false });

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
        slug: "services-filemaker",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

export default class filemakerPage extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      data: response.data,
    };
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
    };

    let { data } = this.state;
    return (
      <div className="case-study filemaker-service" id="filemaker-service">
        <Header
          title={data.data.title}
          description={data.data.description}
          keywords={data.data.keywords}
          canonical_tags={data.data.canonical_tags}
        ></Header>
        {/*<Underconstruction></Underconstruction>*/}
        <section className="content-container mainSection">
          <div className="common-title-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="common-title-wrap px-md-3">
                    <div className="common-head-blk">
                      <h1 className="main-title title-white">
                        Filemaker <br />
                        Development
                      </h1>
                      <p className="text-white s-file-maker">
                        <strong>
                          <h2 className="text-justify">
                            We are Filemaker development experts located in
                            California <br /> and serving customers worldwide on
                            various filemaker <br /> solutions and integrations
                          </h2>
                        </strong>
                      </p>
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
                    <p className="text-above-main-title">
                      DETERMINE THE OPTIMAL SOLUTION FOR YOUR UNIQUE NEEDS
                    </p>
                    <h3 class="main-title title-orange">Introduction</h3>
                  </div>
                  <p className="text-justify">
                    We have been in the business of custom software development
                    solutions for several years. We???ve been serving customers
                    worldwide on various filemaker solutions and integrations
                    and many other unique needs and demands of today's
                    businesses. Apart from providing exceptional service and
                    support, we also provide filemaker integrations with third
                    party applications, filemaker migrations, training and
                    personalized coaching.
                  </p>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="img-blk">
                    <img
                      className="lazyload"
                      data-src="/images/file-maker/about-img.svg"
                      alt="filemaker_img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="outer-grey-blk">
            <div className="orange-strip-blk white-centered">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="project-blk-title">
                      <p className="main-title maintitle_two">
                        Committed to creating solutions that provide value for
                        customers.
                      </p>
                      <div className="btn-comm">
                        <a href="/contact-us">LET'S TALK</a>
                      </div>
                    </div>
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
                    <p className="text-above-main-title">
                      WE OFFER A WIDE RANGE OF
                    </p>
                    <h3 class="main-title title-orange">
                      FileMaker Development Services
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5 mx-auto section-2-row pl-3 pr-3 sc-ip-pro">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature1.svg"
                          alt="FileMaker Database Conversions"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          FileMaker Database <br />
                          Conversions
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature2.svg"
                          alt="Migration to Filemaker Pro"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          Migration <br />
                          to <br />
                          Filemaker Pro
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature3.svg"
                          alt="FileMaker Go Mobile Development"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          FileMaker Go Mobile <br />
                          Development
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature4.svg"
                          alt="Build a new Filemaker Solution"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          Build a new <br />
                          Filemaker <br />
                          Solution
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                </>
              </div>

              <div className="row justify-content-center  section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt mx-auto">
                <>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature5.svg"
                          alt="Application Optimization"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          Application <br />
                          Optimization
                          <br />
                          <br />
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature6.svg"
                          alt="Update and Ongoing Support"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          Update & Ongoing <br />
                          Support
                          <br />
                          <br />
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                  <Slide bottom>
                    <div className="col-lg-3 col-sm-6 mob-padding">
                      <div className="what-we-do-border-style what-we-do-responsive">
                        <img
                          className="lazyload"
                          data-src="/images/file-maker/feature7.svg"
                          alt="Third Party Solutions Integration"
                        />
                        <p className="text-level-5 title-black boxesHeight">
                          Third Party <br />
                          Solutions Integration
                        </p>
                        <hr class="hashtag-underline" />
                      </div>
                    </div>
                  </Slide>
                </>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="quote-centered">
                    <blockquote
                      cite="https://www.hashtag-ca.com/"
                      className="text-justify"
                    >
                      ???We can help you implement the solutions that bring
                      immediate improvements in your business workflows???
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-blk">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="project-blk-title text-center">
                    <div className="text-above-main-title  title-white">
                      WHAT CLIENT SAY ABOUT US
                    </div>
                    <h3 class="main-title title-white">Testimonials</h3>
                    <p>
                      We have built several business process automation
                      solutions that improved the
                      <br /> operational efficiency and effectiveness of several
                      business processes.{" "}
                    </p>
                  </div>
                  <div className="testimonial-wrap">
                    <div
                      class="clutch-widget"
                      data-url="https://widget.clutch.co"
                      data-widget-type="4"
                      data-expandifr="true"
                      data-height="auto"
                      data-snippets="true"
                      data-clutchcompany-id="62314"
                    >
                      <iframe
                        className="lazyload giveHeightToTestimonial"
                        width="100%"
                        height="100%"
                        data-src="https://widget.clutch.co/widgets/get/4?ref_domain=165.22.214.227&uid=62314&ref_path=/services/filemaker"
                        // height="2700px"
                        scrolling="yes"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experts-blk">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="project-blk-title text-center">
                    <div className="text-above-main-title">
                      PROFFESSIONAL TEAM
                    </div>
                    <h3 class="main-title title-orange">Our Experts</h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-around pt-4">
                <div className="col-md-3">
                  <div className="expert-col">
                    <p>
                      Carlos <br />
                      Machado
                    </p>
                    <img
                      className="lazyload"
                      data-src="/images/file-maker/man-profile.svg"
                      alt="male profile"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" expert-col">
                    <p>Selva V</p>
                    <img
                      className="lazyload"
                      data-src="/images/file-maker/woman-profile.svg"
                      alt="female profile"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="btn-comm orange-btn">
                    <a href="/contact-us">LET'S TALK</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_blk"><Contact></Contact></div>
        </section>
       <div className="footer_blk"> <Footer></Footer></div>
      </div>
    );
  }
}
