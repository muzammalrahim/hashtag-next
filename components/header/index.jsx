import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
const Post = dynamic(() => import("./post"));
import $ from "jquery";
// import Post from "./post.jsx"
// import "@fortawesome/fontawesome-free/css/all.min.css";
// dynamic(() => import("@fortawesome/fontawesome-free/css/all.min.css"));


const Header = ({ title, description, keywords, canonical_tags }) => {
  const [tabindex, setTabindex] = useState(false);
  const [Activetabindex, setActiveTabIndex] = useState(1);

  const getindex = () => {
    if (localStorage.getItem("Activetabindex2")) {
      setActiveTabIndex(localStorage.getItem("Activetabindex2"));
    }
  };

  // useEffect(() => {
  //   window.onload = function () {
  //     setTimeout(function () {
  //       var scriptElement = document.createElement("script");
  //       scriptElement.type = "text/javascript";
  //       // scriptElement.src =
  //       //   "https://www.googletagmanager.com/gtag/js?id=UA-78643548-1";
  //       document.head.appendChild(scriptElement);
  //     }, 10);
  //   };
  // }, []);

  useEffect(() => {
    getindex();
    menuToggle();
    setTabindex(false);
    if (typeof window !== undefined) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 74) {
          $(".header-container").addClass("sticky");
          $(".service-bg").addClass("fixed");
        } else {
          $(".header-container").removeClass("sticky");
          $(".service-bg").removeClass("fixed");
        }
      });
    }
  }, []);

  //menu toggle on mobile
  const menuToggle = () => {
    if ($(".navbar-light .navbar-toggler").is(":visible")) {
      $(".navbar-light .navbar-nav .nav-item > i").click(function () {
        $(this).siblings(".submenu").slideToggle();
      });
    }
  };
  let router = useRouter();
  let canonicalUrl = "https://www.hashtag-ca.com" + router.asPath;
  let canonical =
    canonical_tags === null || canonical_tags === undefined
      ? canonicalUrl
      : canonical_tags;
  return (
    <header className="header-container">
      <title>{title}</title>
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
      <link rel="canonical" href={canonical}></link>

      {/* <script
      //  src="https://www.googletagmanager.com/gtag/js?id=UA-78643548-1"
        // local gtm
        src="gtm?id=UA-78643548-1"
        async
        defer
      ></script> */}
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205601286-1"></script> */}
<script async src="gtm?id=UA-78643548-1"></script>
      
<script
  dangerouslySetInnerHTML={{
    __html: `

                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-205601286-1', {
                        page_path: window.location.pathname,
                        });
                     `,
        }}
        async
        defer
      />

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
              e.preventDefault(), setTabindex(!tabindex);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="menu-container"></div>
          <Link href="/">
            <a aria-current="page" className="navbar-brand active">
              <img
                id="logo"
                class="logo"
                src="/hashtag-new-logo-header.svg"
                alt="logo"
              />
            </a>
          </Link>

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
              <li className="nav-item services">
                <Link href="/services">
                  <a
                    className={`nav-link ${
                      Activetabindex === "/services" ||
                      Activetabindex === "/services/wordpress-development" ||
                      Activetabindex === "/services/blockchain-development" ||
                      Activetabindex === "/services/design-and-prototyping" ||
                      Activetabindex === "/services/filemaker" ||
                      Activetabindex === "/services/ui-development"
                        ? "active"
                        : ""
                    }`}
                    activeclassName="active"
                  >
                    {" "}
                    Services{" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                </Link>
                <i className="fa fa-angle-down" aria-hidden="true"></i>

                <ul className="submenu">
                  <div className="row m-0">
                    <div className="col-md-6 p-0">
                      <li>
                        <Link href="/services/wordpress-development">
                          <a>Wordpress Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/blockchain-development">
                          Blockchain Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/design-and-prototyping">
                          Design and Prototyping
                        </Link>
                      </li>
                    </div>
                    <div className="col-md-6 p-0">
                      {/*<li><NavLink to="/services/aws">AWS</NavLink></li>*/}
                      <li>
                        <Link href="/services/filemaker">
                          FileMaker Pro Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ui-development">
                          UI Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/database-and-backend">
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
                      Activetabindex === "/shopify-experts" ? "active" : ""
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
              <li className="nav-item case__Studies">
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
                    Case studies <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item about__us">
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
              <li className="nav-item contact__us">
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
};

export default Header;
