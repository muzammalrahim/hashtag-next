import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Underconstruction from '../../../components/under-construction/index.jsx';
import BlogCategories from '../../../components/post-category/index.jsx';
import BlogRecentPosts from '../../../components/post-recent/index.jsx';
import DocumentMeta from 'react-document-meta';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import Axios from 'axios';
import https from "https";
import * as config from '../../../config';
import Link from 'next/link'

import axios from "axios";
import { withRouter } from "next/router";

require('typeface-montserrat')

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
        slug: "blog-home",
      },
    })
    .then((response) => {
      data = response.data;
    });
  return {
    props: { data },
  };
}

 class Singlepost extends Component {
  constructor(props) {
    super(props);
    if (typeof window === "undefined") {
      global.window = {};
    }
    let response = this.props;
    this.state = {
      recentPosts: [],
      data: response.data.data,
      postData: {
        categories: [{ name: "", slug: "" }],
      },
      postUrl: this.props?.match?.params?.slug,
      loader: true,
    };

    this.shiftContent = this.shiftContent.bind(this);
  }

  componentDidMount() {
    this.shiftContent();
    this.get_recentPosts();
    if (typeof window !== undefined) {
      window.addEventListener("resize", this.shiftContent);
    }
    if (window.location.pathname) {
      let pathNames = window.location.pathname.split("/");
      console.log("path", pathNames);
      let singlePost = pathNames[3];
      this.setState({ postUrl: singlePost });
      this.get_postData(singlePost);
    }
    
  }

  componentWillUnmount() {
    if (typeof window !== undefined) {
      window.removeEventListener("resize", this.shiftContent);
    }
  }

  //Search div shift
  shiftContent() {
    if ($(".mob-visible").is(":visible")) {
      $(".widget_search").insertBefore($(".blog-list"));
    } else {
      $(".widget_search").insertBefore($(".widget_recent_entries"));
    }
  }

  //Get post data
  get_postData(singlePost) {
    let postUrl = singlePost;
    Axios.get(config.myConfig.apiUrl + "blog/posts/single", {
      params: { post_url: postUrl },
    })
      .then((response) => {
        // console.log(response.data);
        const postData = response.data.data;
        this.setState({
          postData: postData,
          loader: false,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Something went wrong.");
      });
  }

  get_recentPosts(){
    var category;
    if(this.props.category != undefined){
      category = this.props.category;
    } else {
      category = '';
    }
    axios.get(config.myConfig.apiUrl+'blog/posts/recent', {params: {category: category}})
    .then((response) => {
      // console.log(response.data);
      const recentPosts = response.data.data.posts;
      this.setState({ 
        recentPosts: recentPosts
      })
    }).catch(error =>{
      toast.error("Something went wrong.");
    });
  }

  navigate = (id) => {
    this.props.router.push({
      pathname: id,
      // query: { id }
    });
    }

    changeCat = (singlePost) => {

      let postUrl = singlePost;
      this.setState({ postData: {} });
      Axios.get(config.myConfig.apiUrl + "blog/posts/single", {
        params: { post_url: postUrl },
      })
        .then((response) => {
          // console.log(response.data);
          const postData = response.data.data;
          this.setState({
            postData: postData,
            loader: false,
          });
        })
        .catch((error) => {
          console.log(error.response);
          toast.error("Something went wrong.");
        });
    };


  render() {
    

    const loader = (
      <div className="loader">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        Loading
      </div>
    );
    let { postData, data } = this.state;
    if(postData.image){
      postData.image = postData.image.replace('http://','https://');
    }

    //console.log(data)
    return (
      <div className="single-blog-main" id="single-blog-main">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
        ></Header>

        <section class="content-container">
          <div className="container-fluid service-bg p-0 m-0 ">
            <div className="service-bg-right">
              <div className="service-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center service-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <ul className="breadcrumbs">
                        <li>
                          <Link href="/blogs">Blogs</Link>
                        </li>
                        <li>{postData.title}</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 text-white  ">
                      <p className="bold-contents service-content-box pl-4">
                        We are seeking brilliant minds to join our dynamic team
                        and make it even better.
                      </p>
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
                        {this.state.loader == true ? (
                          loader
                        ) : (
                          <>
                            <h5 className="card-title text-level-4 title-orange">
                              {postData.title}
                            </h5>
                            <div className="blog-meta">
                              <ul>
                                {postData.published != null && (
                                  <li>
                                    <i
                                      className="fa fa-clock-o"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    {postData.published}
                                  </li>
                                )}
                                <li>
                                  <i
                                    className="fa fa-th-large"
                                    aria-hidden="true"
                                  ></i>
                                  {postData?.categories?.map((cat, i) => {
                                    return (
                                      <span key={i}>
                                        {cat.name}{" "}
                                        {i < postData.categories.length - 1
                                          ? ", "
                                          : ""}
                                      </span>
                                    );
                                  })}
                                </li>
                              </ul>
                            </div>
                            <div className="blog-img">
                              <div
                                className="blog-thumb"
                                style={{
                                  backgroundImage:
                                    postData.image == null
                                      ? "/images/blogs/writing-good-blog.jpg"
                                      : `url(${postData.image})`,
                                }}
                              ></div>
                              {/*{ (postData.image == null) ? <img src="/images/blogs/writing-good-blog.jpg" alt={postData.image_alt} /> : <img src={postData.image} alt={postData.image_alt} /> }*/}
                            </div>
                            <div className="card-body">
                              <small className="text-muted cat text-above-main-title">
                                <i className="fas fa-users text-info"></i>{" "}
                                Hashtag systems
                              </small>
                              <div
                                className="card-text blog-detail-page"
                                dangerouslySetInnerHTML={{
                                  __html: postData.content,
                                }}
                              ></div>
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


                    <div id="recent-posts-4" className="widget widget_recent_entries posts_holder">    
        <h5 className="title-level-6 title-level-mobile text-left b-recent-posts">Recent Posts</h5>    
        <ul>
          {this.state.recentPosts.map((post, index) => { 
            return(
              <li key={index}>
              <a href="#" style={{cursor:"pointer"}} 
              
              onClick={() => {
                this.navigate(
                  "/blogs/single/"+post.url
                )
                  this.changeCat(post.url);
              }}

              > {post.title}</a> 
              </li>
            )
          })}
        </ul>
      </div>
                    {/*<BlogRecentPosts></BlogRecentPosts>*/}  
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
    );
  }
}

export default withRouter(Singlepost);