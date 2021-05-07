import React, { Component } from 'react';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import Underconstruction from '../../components/under-construction/index.jsx';
import BlogCategories from '../../components/post-category/index.jsx';
import BlogRecentPosts from '../../components/post-recent/index.jsx';
import DocumentMeta from 'react-document-meta';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import axios from 'axios';
import * as config from '../../config.js';

require('typeface-montserrat')

export default class Singlepost extends Component {


  constructor(props) {
    super(props);

    this.state = {
      postData: {
        categories: [{ "name": "", "slug": "" }]
      },
      postUrl: this.props.match.params.slug,
      loader: true
    };

    this.shiftContent = this.shiftContent.bind(this);

  }


  componentDidMount() {
    this.shiftContent();
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.shiftContent);
    }
    this.get_postData();
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.shiftContent);
    }

  }

  //Search div shift
  shiftContent() {
    if ($(".mob-visible").is(":visible")) {
      $('.widget_search').insertBefore($('.blog-list'));
    }
    else {
      $('.widget_search').insertBefore($('.widget_recent_entries'));
    }
  }

  //Get post data
  get_postData() {
    let postUrl = this.state.postUrl;
    axios.get(config.myConfig.apiUrl + 'blog/posts/single', { params: { post_url: postUrl } })
      .then((response) => {
        // console.log(response.data);
        const postData = response.data.data;
        this.setState({
          postData: postData,
          loader: false
        })
      }).catch(error => {
        console.log(error.response);
        toast.error("Something went wrong.");
      });
  }


  render() {
    const meta = {
      title: 'Blogs - FullStack Web Development| Bay area, California',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Web development company,software development company,web development kochi,web development company kochi,software development kochi,web development company kochi,software development kochi,web design and development kochi,full stack development company,wordpress customisation company kerala,shopify theme development company kerala,ecommerce development company kerala,woocommerce development company kerala,web development company California,software development california,wordpress development california,wordpress development kochi,shopify development kochi,shopify development california,wordpress customisation company,shopify theme development company,ecommerce development company kochi,ecommerce development company california'
        }
      }
    };

    const loader = <div className="loader"><div className="spinner"><div></div><div></div><div></div><div></div></div>Loading</div>;
    let postData = this.state.postData;

    return (
      <div className="single-blog-main" id="single-blog-main">
        <DocumentMeta {...meta} />
        <Header></Header>

        <section class="content-container">
          <div className="container-fluid service-bg p-0 m-0 ">
            <div className="service-bg-right">
              <div className="service-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center service-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <ul className="breadcrumbs">
                        <li><a href="/blogs">Blogs</a></li>
                        <li>{postData.title}</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <p className="bold-contents service-content-box pl-4">
                        We are seeking brilliant minds to join our dynamic team and make it even better.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-section">
            <div className="container">
              <div className="row b-row-1">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="blog-wrap">
                    <div className="blog-list">
                      <div className="card">
                        {(this.state.loader == true) ? (
                          loader
                        ) : (
                          <>
                            <h5 className="card-title text-level-4 title-orange">{postData.title}</h5>
                            <div className="blog-meta">
                              <ul>
                                {(postData.published != null) &&
                                  <li><i className="fa fa-clock-o" aria-hidden="true"></i> {postData.published}</li>
                                }
                                <li>
                                  <i className="fa fa-th-large" aria-hidden="true"></i>
                                  {postData.categories.map((cat, i) => {
                                    return (
                                      <span key={i}>{cat.name} {i < (postData.categories).length - 1 ? ', ' : ''}</span>
                                    )
                                  })}
                                </li>
                              </ul>
                            </div>
                            <div className="blog-img">
                              <div className="blog-thumb" style={{ backgroundImage: (postData.image == null) ? '/images/blogs/writing-good-blog.jpg' : `url(${postData.image})` }}>
                              </div>
                              {/*{ (postData.image == null) ? <img src="/images/blogs/writing-good-blog.jpg" alt={postData.image_alt} /> : <img src={postData.image} alt={postData.image_alt} /> }*/}
                            </div>
                            <div className="card-body">
                              <small className="text-muted cat text-above-main-title">
                                <i className="fas fa-users text-info"></i> Hashtag systems
                              </small>
                              <div className="card-text blog-detail-page" dangerouslySetInnerHTML={{ __html: postData.content }}></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    {/*<div className="blog-nav">
                      <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i>Prev</a>
                      <a href="#" className="next">Next<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </div>*/}
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="blog-sidebar">
                    <aside>
                      <BlogRecentPosts></BlogRecentPosts>
                      <BlogCategories></BlogCategories>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mob-visible"></div>
        <Footer></Footer>
      </div>
    )
  }
}
