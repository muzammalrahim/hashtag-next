import React, { Component } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { NavHashLink as Link } from 'react-router-hash-link';
import Link from 'next/link'
import Head from "next/head";

import Dropdown from '../dropdown/index.jsx';
import $ from 'jquery';

export default class Header extends Component {

constructor(props) {    
  super(props)
  if (typeof window === "undefined") {
    global.window = {};
  }
    this.state = {
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
    this.ErrorPage  = this.ErrorPage.bind(this);
  }

  componentDidMount() {
    this.menuToggle();
    // window.addEventListener("resize", this.menuToggle);

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
    };


  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.menuToggle);
  }

  //menu toggle on mobile
  menuToggle(){
    if($(".navbar-light .navbar-toggler").is(":visible")) { 
      $(".navbar-light .navbar-nav .nav-item > i").click(function(){
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
    this.props.history.push('/shopify');
  }
  
   Blog() {
    this.props.history.push('/blog');
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
    const {title, description, keywords} = this.props
    return (
      <header className="header-container ">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:type" content={keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content='hashtag' />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:creator" content='twitter' />
          <meta property="twitter:title" content='title' />
          <meta property="twitter:description" content={description }/>
        </Head>
        <div className="container " id="main-section">
          <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="menu-container"></div>
            <Link href="/" className="navbar-brand">
              <img
                id="logo"
                className="logo"
                src="./hashtag-new-logo-header.svg"
                alt="logo"
              />
            </Link>

            <div className="mob-top-email d-block d-sm-none">
              <a href="mailto:info@hashtag-ca.com">
                <img src="/images/mob-top-email.svg" alt="email" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse header-menu"
              id="navbarTogglerDemo03"
            >
              <ul  className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link
                    href="/about-us"
                   
                  >
                    <a   className="nav-link"  activeclassName="active">
                      {" "}
                      About Us <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/sevices"
                   
                  >
                    <a  className="nav-link"
                         activeclassName="active">
                      services
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                  </Link>
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                  <ul className="submenu">
                    <div className="row m-0">
                      <div className="col-md-6 p-0">
                        <li>
                          <Link href="/sevices/wordpress-development">
                            Wordpress Development
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
                        {/*<li><NavLink to="/sevices/aws">AWS</NavLink></li>*/}
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
                        {/*<li><NavLink to="/sevices/mobile-app">Mobile App Development</NavLink></li>*/}
                      </div>
                    </div>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/shopify"
                   
                  >
                  <a   className="nav-link"  activeclassName="active">
                  {" "}
                  Shopify <span className="sr-only">(current)</span>
                </a>
                  
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/blog"
                  
                  >
                  <a   className="nav-link"  activeclassName="active">
                  {" "}
                  Blog <span className="sr-only">(current)</span>
                </a>
                   
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/careers"
                   
                  >
                  <a   className="nav-link"  activeclassName="active">
                  {" "}
                  Careers <span className="sr-only">(current)</span>
                </a>
                   
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/case-studies/casestudy-list"
                    
                  >
                  <a   className="nav-link"  activeclassName="active">
                  {" "}
                  Case studies <span className="sr-only">(current)</span>
                </a>
                  
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact-us"
                  
                  >
                  <a   className="nav-link"  activeclassName="active">
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
