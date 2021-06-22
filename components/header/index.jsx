import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as Link } from 'react-router-hash-link';
import Link from 'next/link'
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Post from "./post.jsx"
import Dropdown from '../dropdown/index.jsx';
import $ from 'jquery';

export default class Header extends Component {

    constructor(props) {
        super(props)
        if (typeof window === "undefined") {
            global.window = {};
        }
        this.state = {
            Activetabindex: 1,
            tabindex: true,
            navonclick: false,

        }
        this.HomePage = this.HomePage.bind(this);
        this.AboutusPage = this.AboutusPage.bind(this);
        this.ServicePage = this.ServicePage.bind(this);
        this.WordpressPage = this.WordpressPage.bind(this);
        this.ShopifyPage = this.ShopifyPage.bind(this);
        this.Blog = this.Blog.bind(this);
        this.CareersPage = this.CareersPage.bind(this);
        this.ContactusPage = this.ContactusPage.bind(this);
        this.filemakerPage = this.filemakerPage.bind(this);
        this.ErrorPage = this.ErrorPage.bind(this);
    }


    changeHandler = (getindex, e) => {
        e.preventDefault()
        this.setState({Activetabindex: getindex, navonclick: true})
        localStorage.setItem("Activetabindex", getindex)
    }

  getindex = () => {

        if (localStorage.getItem("Activetabindex2")) {
            this.setState({Activetabindex: localStorage.getItem("Activetabindex2")})
        }

    }


    componentDidMount() {
        this.getindex()
        this.menuToggle();
// window.addEventListener("resize", this.menuToggle);
        this.setState({tabindex: false})
        if (typeof window !== undefined) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 74) {
                    $('.header-container').addClass('sticky');
                    $('.service-bg').addClass('fixed');
                } else {
                    $('.header-container').removeClass('sticky');
                    $('.service-bg').removeClass('fixed');
                }

            })
        }
        ;

    }

    componentWillUnmount() {
// window.removeEventListener("resize", this.menuToggle);
        this.setState({tabindex: false})
    }

//menu toggle on mobile
    menuToggle() {
        if ($(".navbar-light .navbar-toggler").is(":visible")) {
            $(".navbar-light .navbar-nav .nav-item > i").click(function () {
                $(this).siblings('.submenu').slideToggle();
            });
        }
    }


    HomePage() {
        this.props.history.push('/');
    }

    AboutusPage() {
        this.props.history.push('/about-us');
    }

    ServicePage() {
        this.props.history.push('/sevices');
    }

    WordpressPage() {
        this.props.history.push('/wordpress');
    }

    ShopifyPage() {
        this.props.history.push('/shopify-experts');
    }

    Blog() {
        this.props.history.push('/blogs');
    }

    CareersPage() {
        this.props.history.push('careers');
    }

    ContactusPage() {
        this.props.history.push('/contact-us');
    }

    filemakerPage() {
        this.props.history.push('/filemaker');
    }

    filemakerPage() {
        this.props.history.push('/case-studies/casestudy-list');
    }

    ErrorPage() {
        this.props.history.push('/error');
    }

    render() {

        let {tabindex, Activetabindex} = this.state;
        const {title, description, keywords} = this.props
        return (
          <header className="header-container">
            <Head>
              <title>{this.props?.title}</title>
              <meta name="description" content={description} />
              <meta name="keywords" content={keywords} />
              <meta name="head title" content={title} />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:site_name" content="hashtag" />
              <meta property="twitter:card" content="hashtag" />
              <meta property="twitter:creator" content="hashtag" />
              <meta property="twitter:title" content={title} />
              <meta property="twitter:description" content={description} />
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-78643548-1"
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-78643548-1', {
                                page_path: window.location.pathname,
                                });
                             `,
                }}
              />
            </Head>
            <div className="container" id="main-section">
              <Post />

              <nav className="navbar navbar-expand-lg navbar-light bg-Light">
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={(e) => {
                    e.preventDefault(), this.setState({ tabindex: !tabindex });
                  }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu-container"></div>
                <Link href="/">
                  <a aria-current="page" class="navbar-brand active">
                    <img
                      id="logo"
                      class="logo"
                      src="/hashtag-new-logo-header.svg"
                      alt="logo"
                    />
                  </a>
                </Link>

                {/* <Link href="/" className="navbar-brand">
<img
id="logo"
className="logo"
src="/hashtag-new-logo-header.svg"
alt="logo"
/>
</Link> */}

                <div className="mob-top-email d-block d-sm-none">
                  <a href="mailto:info@hashtag-ca.com">
                    <img src="/images/mob-top-email.svg" alt="email" />
                  </a>
                </div>

                <div
                  className={`collapse navbar-collapse header-menu ${
                    tabindex ? "show" : ""
                  }`}
                  id="navbarTogglerDemo03"
                >
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                      <Link href="/sevices">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/sevices" ||
                            Activetabindex ===
                              "/sevices/wordpress-development" ||
                            Activetabindex ===
                              "/sevices/blockchain-development" ||
                            Activetabindex ===
                              "/sevices/design-and-prototyping" ||
                            Activetabindex === "/sevices/filemaker" ||
                            Activetabindex === "/sevices/ui-development"
                              ? "active"
                              : ""
                          }`}
                          activeclassName="active"
                        >
                          {" "}
                          Services{" "}
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </Link>
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                      <ul className="submenu">
                        <div className="row m-0">
                          <div className="col-md-6 p-0">
                            <li>
                              <Link href="/sevices/wordpress-development">
                                <a>Wordpress Development</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/sevices/blockchain-development">
                                Blockchain Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/sevices/design-and-prototyping">
                                Design and Prototyping
                              </Link>
                            </li>
                          </div>
                          <div className="col-md-6 p-0">
                            {/*<li><NavLink to="/services/aws">AWS</NavLink></li>*/}
                            <li>
                              <Link href="/sevices/filemaker">
                                FileMaker Pro Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/sevices/ui-development">
                                UI Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/sevices/database-and-backend">
                                DB & Backend Development
                              </Link>
                            </li>
                            {/*<li><NavLink to="/services/mobile-app">Mobile App Development</NavLink></li>*/}
                          </div>
                        </div>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/shopify-experts">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/shopify-experts"
                              ? "active"
                              : ""
                          }`}
                          activeclassName="active"
                        >
                          {" "}
                          Shopify <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blogs">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/blogs" ||
                            Activetabindex === "/blogs/category/[slug]"
                              ? "active"
                              : ""
                          }`}
                          activeclassName="active"
                        >
                          {" "}
                          Blog <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/careers">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/careers" ? "active" : ""
                          }`}
                          activeclassName="active"
                        >
                          {" "}
                          Careers <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/casestudies">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/casestudies" ||
                            Activetabindex === "/casestudies/megalot" ||
                            Activetabindex === "/casestudies/filemaker" ||
                            Activetabindex === "/casestudies/speakinc" ||
                            Activetabindex === "/casestudies/multitoken" ||
                            Activetabindex === "/casestudies/easy-level" ||
                            Activetabindex === "/casestudies/maikeinc"
                              ? "active"
                              : ""
                          }`}
                          activeclassName="active"
                        >
                          {" "}
                          Case studies{" "}
                          <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/about-us" ||
                            Activetabindex === "/about-us"
                              ? "active"
                              : ""
                          }`}
                          activeclassName="active"
                        >
                          About Us <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact-us">
                        <a
                          className={`nav-link ${
                            Activetabindex === "/contact-us" ? "active" : ""
                          }`}
                          activeclassName="active"
                        >
                          {" "}
                          Contact Us <span className="sr-only">(current)</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="form-inline my-2 my-lg-0">
                    <button className="btn-transparent btn-header-1 btn btn-outline-success my-2 my-sm-0">
                      <Link href="/" className="en-link">
                        En
                      </Link>
                    </button>
                    <Link href="/contact-us">
                      <button className="speak-btn btn-header-2 btn-white btn btn-outline-success my-2 my-sm-0">
                        <Link href="/contact-us">Let's Speak</Link>
                      </button>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        );
    }
}