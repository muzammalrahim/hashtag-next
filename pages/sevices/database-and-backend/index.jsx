import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Contact from '../../../components/contacts/index.jsx';
import DocumentMeta from 'react-document-meta';
import Slide from 'react-reveal/Reveal';

export default class DatabasePage extends Component {
    render() {
        const meta = {
            title: 'DB and Backend Development - FullStack Web Development| Bay area, California',


            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california'
                }


            }
        };
        return (

            <div className="contact-main" id="Dbdevbanner">
                <DocumentMeta {...meta} />
                <div className="wp-main" id="wp-main">
                    <Header></Header>
                </div>
                <section class="content-container">
                    <div className="container-fluid shopify-bg p-0 m-0 shopifyBg">
                        <div className="shopify-bg-right">
                            <div className="shopify-banner-frame">
                                <div className="container ">

                                    <div className="row justify-content-center shopify-banner-content pl-3 pr-3">
                                        <div className="col-lg-6 col-md-12">
                                            <p className="sub-text-above-main-title title-white">We offer Solutions for</p>
                                            <h1 className="main-title  title-white d-block">DB & Backend<br />Development</h1>


                                        </div>
                                        <div className="col-lg-6 col-md-12 text-white  ">
                                            <p className="bold-contents shopify-content-box pl-4">
                                            We build feature-rich applications with the help of best industry practices and agile principles and aim at speed, performance and accuracy.
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
                                <div className="shopify-content mt-4">
                                    <p className="mb-4">
                                        The Internet is going through changes every second. When we think about an application or website running on the internet, its backbone is still a database built years back - the key to store data. It is crucial to take care not only of its appearance but also of high performance. For a user, raw data stored in a database doesn't make any sense. 
                                    </p>
                                    <p>
                                        Our customer-oriented approach drives us to work only by the latest methodologies. We have to process, protect, present the data in a way that is convenient for an end user. This is achieved by a strong backend built on modern development platforms and scripts. Backend is the nerve centre of an application that focuses on improving performance.
                                    </p>
                                </div>
                                <h1 class="main-title"><img src="../images/wordpress/wp-quoute.svg" alt="quote"/></h1>
                                <div class="wp-main">
                                    <p class="hash-content-col title-black why-us-hash-content">
                                        <p>
                                            Developing the core of any product.
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                                <img src="/images/database/database.svg" alt="database" className="img-fluid shopify-image mobile-image-border storefront-img" />
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid expert-resume-container full-cycle-sec mt-5">
                        <div className="row justify-content-center mt-0 section-2-row pl-3 pr-3">
                            <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                                <img src="/images/database/backend.svg" alt="backend" className="img-fluid shopify-image mobile-image-border storefront-img" />
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="shopify-content mt-4">
                                    <p className="mb-4 full-cycle-sec-par">
                                        Full-Cycle Backend Development Services <br></br>with Modern Architectural Platforms 
                                    </p>
                                </div>
                                <div class="contact-form-link full-cycle-sec-par-contact">
                                    <a href="/contact-us">
                                        <div class="btn-group form-btn why-choose-bc-sec-btn">
                                        <button type="button" class="btn form-button font-12 font-bold">GET IN TOUCH</button>
                                        <button type="button" class="btn form-button-child px-3"><span class=""><span class="form-btn-arrow btn-right-arrow form-btn-arrowbc-sec"></span></span></button>
                                        <div class="dropdown-menu">
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <div className="container">
                            <div className="row">
                                <div class="col-12 wp-sec-3-content shopify-sec-3-content">
                                    <p class="text-above-main-title text-above-main-title-c text-center mb-0">YOU ARE IN GOOD TECH HANDS</p>
                                    <h1 class="main-title title-orange text-center">Development Services</h1>
                                    <div class="col-md-9 mx-auto sw-service-dev-sub">
                                    <p>
                                        Backend development is one of the vital components of the application. We at Hashtag Systems, provide 80 % of our backend development solutions in python and related frameworks.
                                    </p>
                                    <p>
                                        We are using django along with rest framework to build sustainable apis for web and mobile applications. Through AI-driven NLP services, we build systems that recognize the underlying meaning behind the words, by extracting valuable information and insights and understanding unstructured “big data”.    
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro">
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/web-programming1.svg" alt="web_app" />
                                            <h4 className="text-level-5 title-black">Web Application Development</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/mobileprogramming 1.svg" alt="mobile_app" />
                                            <h4 className="text-level-5 title-black">Mobile Application Development</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/web-site1.svg" alt="website_dev" />
                                            <h4 className="text-level-5 title-black">Website Development</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/web-site2.svg" alt="Software_dev" />
                                            <h4 className="text-level-5 title-black">Custom Software Development</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                
                            </div>

                            <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3 sc-ip-pro sc-ip-pro-mt">
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/export1.svg" alt="database_design" />
                                            <h4 className="text-level-5 title-black">Database Design</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/api1.svg" alt="api_dev" />
                                            <h4 className="text-level-5 title-black">API Development</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/web-programming2.svg" alt="NLP" />
                                            <h4 className="text-level-5 title-black">Natural Language Processing Solutions</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide bottom>
                                    <div className="col-lg-3 col-sm-6 mob-padding">
                                        <div className="what-we-do-border-style what-we-do-responsive">
                                            <img src="../images/database/web-programming-anlys.svg" alt="quality" />
                                            <h4 className="text-level-5 title-black">Quality Analysis and Maintenance</h4>
                                            <hr class="hashtag-underline ml-2"></hr>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                    <div className="ui-dev-ico wordpress-section-3 pb-4 min-height-auto top-index">
                        <div className="container">
                            <div class="row">
                                <div class="col-12 wp-sec-3-content shopify-sec-3-content">
                                    <p class="text-above-main-title text-above-main-title-c text-center mb-0">BACK-END TECH STACK</p>
                                    <h1 class="main-title title-orange text-center">Our Technology Expertise</h1>
                                </div>
                            </div>
                            <div className="pb-5 pt-0 d-none d-sm-block">
                                <div className="row justify-content-center mt-2">
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/mysql-2.svg" alt="mysql" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Group-rest1.svg" alt="rest" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Vector-larave.svg" alt="laravel" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/php-1.svg" alt="php" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Node.js_logo.svg" alt="node" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/AmazonWebservices1.svg" alt="amazon" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/selenium-logo1.svg" alt="selenium" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/selenium-logo 2.svg" alt="git" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/MongoDB_Logo.svg" alt="mongo_db" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Group389.svg" alt="codeigniter" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Frame400.svg" alt="django" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/python-3.svg" alt="python" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5 pt-0 d-block d-sm-none">
                                <div className="row justify-content-center mt-2">
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/mysql-2.svg" alt="mysql" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Group-rest1.svg" alt="rest" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Vector-larave.svg" alt="laravel" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/php-1.svg" alt="php" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Node.js_logo.svg" alt="node" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/AmazonWebservices1.svg" alt="amazon" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/selenium-logo1.svg" alt="selenium" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/selenium-logo 2.svg" alt="git" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/MongoDB_Logo.svg" alt="mongo_db" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Group389.svg" alt="codeigniter" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/Frame400.svg" alt="django" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-6 text-center my-auto d-flex pt-5">
                                        <img src="../images/database/python-3.svg" alt="python" class="img-fluid mx-auto my-auto "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center mt-5 section-2-row pl-3 pr-3">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                            <p class="text-above-main-title text-above-main-title-c text-left mb-0">we are ready for the new challenges</p>
                                <h1 className="main-title title-orange why-bc-sec-tt">Have an Idea?Let`s speak!</h1>
                                <div className="shopify-content mt-4">
                                    <h1 class="main-title"><img src="../images/database/quote-black31.svg" alt="quote"/></h1>
                                    <div className="wp-main">
                                    <p class="hash-content-col title-black why-us-hash-content">
                                        <p>
                                        Our experienced and highly versatile team of professionals 
                                        are able to build applications even faster and establish 
                                        long-lasting relationships with pleased clients.
                                        </p>
                                    </p>
                                    </div>
                                    <div className="contact-form-link contact-db-ovrlp"><a href="/contact-us"> <div className="btn-group form-btn"><button type="button" className="btn form-button font-12 font-bold contact-db-ovrlp-btn">LET’S START TALKING</button><button type="button" className="btn form-button-child px-3"><span className=""><span className="form-btn-arrow btn-right-arrow"></span></span></button><div className="dropdown-menu"></div></div></a></div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 text-center ">
                                <img src="/images/database/UIDEVELOPMENT1.svg" alt="ui_idea" className="img-fluid shopify-image mobile-image-border storefront-img" />
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