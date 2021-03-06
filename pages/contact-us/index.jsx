import React, { Component } from "react";
import DocumentMeta from "react-document-meta";
require("typeface-montserrat");
import Axios from "axios";
import https from "https";

import dynamic from "next/dynamic";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Contactusform = dynamic(
  () => import("../../components/contactusPage/index.jsx"),
  { ssr: false }
);
const Header = dynamic(() => import("../../components/header/index.jsx"));
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
        slug: "contact",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

export default class Contactus extends Component {
  constructor(props) {
    super(props);
    let response = this.props;
    this.state = {
      hideForm: false,
      data: response.data.data,
      tabindex: 1,
    };
    this.handleFormHide = this.handleFormHide.bind(this);
  }

  handleFormHide(e) {
    this.setState({
      hideForm: true,
    });
  }

  render() {
    let { tabindex } = this.state;

    const { data } = this.state;
    return (
      <div className="contact-main" id="contact-main">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
        ></Header>
        <section className="content-container">
          <div className="container-fluid service-bg p-0 m-0 ">
            <div className="service-bg-right">
              <div className="service-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center service-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <div className="sub-text-above-main-title title-white">
                        Get in touch we'd love to help{" "}
                      </div>
                      <h1 className="main-title title-white d-block">
                        Contact us
                      </h1>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <h2 className="bold-contents service-content-box pl-4 text-justify">
                        We always love to hear from potential clients. Get in
                        touch, start the conversation, and we???ll take it from
                        there.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tab section start */}
          <div className="container-fluid contact-section-two pt-3 pb-3">
            <div className="container">
              <div className="row justify-content-center mt-5 mb-5">
                <div className="col-12" id="tabs">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <nav>
                      <div
                        className="nav nav-tabs nav-fill"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          className={`nav-item nav-link ${
                            tabindex === 1 ? "active" : ""
                          }`}
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          onClick={(e) => {
                            e.preventDefault(), this.setState({ tabindex: 1 });
                          }}
                        >
                          Sunnyvale
                        </a>
                        <a
                          className={`nav-item nav-link ${
                            tabindex === 2 ? "active" : ""
                          }`}
                          id="nav-sanjose-tab"
                          data-toggle="tab"
                          href="#nav-sanjose"
                          role="tab"
                          aria-controls="nav-sanjose"
                          aria-selected="true"
                          onClick={(e) => {
                            e.preventDefault(), this.setState({ tabindex: 2 });
                          }}
                        >
                          San Jose
                        </a>
                        <a
                          className={`nav-item nav-link ${
                            tabindex === 3 ? "active" : ""
                          }`}
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                          onClick={(e) => {
                            e.preventDefault(), this.setState({ tabindex: 3 });
                          }}
                        >
                          San Diego
                        </a>
                        <a
                          className={`nav-item nav-link ${
                            tabindex === 4 ? "active" : ""
                          }`}
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          onClick={(e) => {
                            e.preventDefault(), this.setState({ tabindex: 4 });
                          }}
                        >
                          Kochi
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div
                    className="tab-content py-3 px-3 px-sm-0"
                    id="nav-tabContent"
                  >
                    <div
                      className={`tab-pane fade  text-left pl-3 ${
                        tabindex === 1 ? "show active" : ""
                      }`}
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="row tab-content">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <h3 className="address-content">
                            <img
                              data-src="/images/home/location.svg"
                              alt="location"
                              className="address-icons lazyload "
                            />{" "}
                            <span className="address-content">Sunnyvale</span>
                          </h3>
                          <h3 className="address-text">
                            100 S. Murphy Ave. Suite 200
                            <br />
                            Sunnyvale, CA 94086
                            <br />
                            USA
                          </h3>
                          <img
                            data-src="/images/home/phone.svg"
                            alt="phone"
                            className="address-icons lazyload "
                          />{" "}
                          <span className="address-content">PHONE</span>
                          <p className="address-text">
                            <a href="tel:+1-408-596-2525">+1 408 596 2525</a>
                          </p>
                          <img
                            data-src="/images/home/email.svg"
                            alt="email"
                            className="address-icons lazyload "
                          />{" "}
                          <span className="address-content">EMAIL</span>
                          <p className="address-text">
                            {" "}
                            <a
                              href="mailto:info@hashtag-ca.com"
                              className="link-mail"
                            >
                              info@hashtag-ca.com
                            </a>
                          </p>
                          <span className="address-content">FOLLOW US </span>
                          <a
                            href="https://www.linkedin.com/company/hashtag-systems-inc/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/linkedin.svg"
                              alt="linkedin"
                              className="pl-2 pr-2 contact-linkedin lazyload"
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/hashtagsystemsca/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/facebook-logo.svg"
                              alt="facebook"
                              className="conatct-fb lazyload"
                            />
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="hash-map h-100">
                            <iframe
                              data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.5289063403397!2d-122.03185048529588!3d37.37732237983374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb65cf6471b75%3A0x8a1d78f6bdfb3110!2sHashtag%20Systems%20Inc%20-%20Web%20development%20company!5e0!3m2!1sen!2sin!4v1599470282095!5m2!1sen!2sin"
                              className="map-image lazyload"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade  text-left pl-3 ${
                        tabindex === 2 ? "show active" : ""
                      }`}
                      id="nav-sanjose"
                      role="tabpanel"
                      aria-labelledby="nav-sanjose-tab"
                    >
                      <div className="row tab-content">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <h3 className="address-content">
                            <img
                              data-src="/images/home/location.svg"
                              alt="location"
                              className="address-icons lazyload "
                            />{" "}
                            <span className="address-content">San Jose</span>
                          </h3>
                          <h3 className="address-text">
                            99 S Almaden Blvd Suite
                            <br />
                            600 San Jose, CA 95113
                            <br />
                            USA
                            <br />
                          </h3>
                          <img
                            data-src="/images/home/phone.svg"
                            alt="phone"
                            className="address-icons lazyload "
                          />{" "}
                          <span className="address-content">PHONE</span>
                          <p className="address-text">
                            <a href="tel:+1-408-404-7323">+1 408 404 7323</a>
                          </p>
                          <img
                            data-src="/images/home/email.svg"
                            alt="email"
                            className="address-icons lazyload "
                          />{" "}
                          <span className="address-content">EMAIL</span>
                          <p className="address-text">
                            <a
                              href="mailto:sjc@hashtag-ca.com"
                              className="link-mail"
                            >
                              sjc@hashtag-ca.com
                            </a>
                          </p>
                          <span className="address-content">FOLLOW US </span>
                          <a
                            href="https://www.linkedin.com/company/hashtag-systems-inc/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/linkedin.svg"
                              alt="linkedin"
                              className="pl-2 pr-2 contact-linkedin lazyload"
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/hashtagsystemsca/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/facebook-logo.svg"
                              alt="facebook"
                              className="conatct-fb lazyload"
                            />
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="hash-map h-100">
                            <iframe
                              data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.428428473099!2d-121.89654558515603!3d37.332364645262906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca46fe2751d%3A0xac22cd23368a6885!2s99%20S%20Almaden%20Blvd%20%23600%2C%20San%20Jose%2C%20CA%2095113%2C%20USA!5e0!3m2!1sen!2sin!4v1604491251986!5m2!1sen!2sin"
                              className="map-image lazyload"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade  text-left pl-3 ${
                        tabindex === 3 ? "show active" : ""
                      }`}
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="row tab-content">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <h3 className="address-content">
                            <img
                              data-src="/images/home/location.svg"
                              alt="location"
                              className="address-icons lazyload "
                            />{" "}
                            <span className="address-content">San Diego</span>
                          </h3>
                          <h3 className="address-text ">
                            7770 Regents Rd. #113-385
                            <br />
                            San Diego, CA 92122, <br />
                            USA
                          </h3>
                          <img
                            data-src="/images/home/email.svg"
                            alt="email"
                            className="address-icons lazyload "
                          />{" "}
                          <span className="address-content">EMAIL</span>
                          <p className="address-text">
                            <a
                              href="mailto:info.SD@hashtag-ca.com"
                              className="link-mail"
                            >
                              info.SD@hashtag-ca.com
                            </a>
                          </p>
                          <span className="address-content">FOLLOW US </span>
                          <a
                            href="https://www.linkedin.com/company/hashtag-systems-inc/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/linkedin.svg"
                              alt="linkedin"
                              className="pl-2 pr-2 contact-linkedin lazyload"
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/hashtagsystemsca/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/facebook-logo.svg"
                              alt="facebook"
                              className="conatct-fb lazyload"
                            />
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="hash-map h-100">
                            <iframe
                              data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.3362449183883!2d-117.22655108533353!3d32.8628218869136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc012bd2a9e523%3A0x9bf6efa5cf00201d!2s7770%20Regents%20Rd%2C%20San%20Diego%2C%20CA%2092122%2C%20USA!5e0!3m2!1sen!2sin!4v1599480789688!5m2!1sen!2sin"
                              className="map-image lazyload"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane fade  text-left pl-3 ${
                        tabindex === 4 ? "show active" : ""
                      }`}
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="row tab-content">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <h3 className="address-content">
                            <img
                              data-src="/images/home/location.svg"
                              alt="location"
                              className="address-icons lazyload "
                            />{" "}
                            <span className="address-content">Kochi</span>
                          </h3>
                          <h3 className="address-text text-justify">
                            Infopark Technology Business Center JNI Stadium,{" "}
                            <br />
                            Kaloor,
                            <br /> Kerala, India
                            <br />
                          </h3>
                          <img
                            data-src="/images/home/phone.svg"
                            alt="phone"
                            className="address-icons lazyload"
                          />{" "}
                          <span className="address-content">PHONE</span>
                          <p className="address-text">
                            <a href="tel:+91-9207749168">+91 9207749168</a>
                          </p>
                          <img
                            data-src="/images/home/email.svg"
                            alt="email"
                            className="address-icons lazyload "
                          />{" "}
                          <span className="address-content">EMAIL</span>
                          <p className="address-text">
                            <a
                              href="mailto:info.kochi@hashtag-ca.com"
                              className="link-mail"
                            >
                              info.kochi@hashtag-ca.com
                            </a>
                          </p>
                          <span className="address-content">FOLLOW US </span>
                          <a
                            href="https://www.linkedin.com/company/hashtag-systems-inc/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/linkedin.svg"
                              className="pl-2 pr-2 contact-linkedin lazyload"
                              alt="linkedin"
                            />
                          </a>
                          <a
                            href="https://www.facebook.com/hashtagsystemsca/"
                            target="_blank"
                          >
                            <img
                              data-src="/images/home/facebook-logo.svg"
                              className="conatct-fb lazyload"
                              alt="facebook"
                            />
                          </a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <div className="hash-map h-100">
                            <iframe
                              data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.262837900139!2d76.29727491404789!3d9.995134242854492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1642da3df1%3A0xbe327fe6330aebf3!2sHashtag%20Systems%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1599470444577!5m2!1sen!2sin"
                              className="map-image lazyload"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tab section  end */}

          {/* form section start */}

          <div className="container-fluid contact-section-three cnt-page-form pt-5 pb-5">
            <div className="container mt-4 mb-4">
              <div className="row pl-3 pr-3">
                {this.state.hideForm == false ? (
                  <div>
                    {" "}
                    <div className="col-12">
                      <p className="text-above-main-title w-100 text-justify">
                        TELL US ABOUT YOUR BIG IDEAS AND WE'LL TELL YOU HOW WE
                        CAN HELP
                      </p>
                      <h2 className="main-title">
                        <span className="title-orange d-block mob-left">
                          Have an idea? Lets discuss
                        </span>
                      </h2>
                    </div>
                    <Contactusform
                      handleFormHide={this.handleFormHide}
                    ></Contactusform>
                  </div>
                ) : (
                  <div className="col-md-12">
                    <div className="message-box">
                      <div className="msg-bx-col">
                        <h3 className="title-orange form-title">
                          Thank you for contacting us
                        </h3>
                        <p className="text-justify">
                          We appreciate that you've taken time to write us. We
                          will get back to you soon.
                        </p>
                      </div>
                      <div className="msg-bx-col pl-3">
                        <img
                          data-src="/images/contacts/contact-success.svg"
                          alt="contact-success"
                          className="lazyload"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* form section  end */}

          {/* two clm section start */}
          <div className="container-fluid contact-section-two pt-5 pb-5">
            <div className="container">
              <div className="row justify-content-center pl-3 pr-3 ">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <img
                    data-src="/images/contacts/puzzles.svg"
                    className="img-fluid lazyload"
                    alt="join-team"
                    height="auto"
                    width="100%"
                  />
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 my-auto">
                  <h2 className="main-title">
                    <span className="title-orange d-block mob-left">
                      Join the Team
                    </span>
                  </h2>
                  <div className="contact-content mt-4">
                    <p className="text-justify">
                      We???re always looking for bright and driven individuals to
                      be part of our great team.
                    </p>
                  </div>
                  <div className="contact-form-link">
                    <a href="/careers">
                      <div className="btn-group form-btn">
                        <button
                          type="submit"
                          className="btn form-button font-12 font-bold"
                        >
                          JOIN US
                        </button>
                        <button
                          type="submit"
                          className="btn form-button-child px-3"
                        >
                          <span className="">
                            <span className="form-btn-arrow btn-right-arrow"></span>
                          </span>
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* two clm section  end */}

       <div className="contact_footer"> <Footer></Footer></div>
      </div>
    );
  }
}
