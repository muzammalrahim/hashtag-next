import React, { Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer/index.jsx";
import BlogCategories from "../../components/post-category/index.jsx";
import BlogRecentPosts from "../../components/post-recent/index.jsx";
import DocumentMeta from "react-document-meta";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import Axios from "axios";
import https from "https";
import * as config from "../../config";
import Link from "next/link";
import BlogPostFeatured from "../../components/post-featured";

require("typeface-montserrat");

export async function getServerSideProps(ctx) {
  let data = [];

  const instance = Axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  await instance
    .get("https://api.hashtag-ca.com/api/v1/metadata", {
      params: {
        page_type: "post",
        slug: ctx?.req?.url.split("/")[2],
      },
    })
    .then((response) => {
      data = response.data;
      console.log(data);
    });
  return {
    props: { data },
  };
}

export default class Singlepost extends Component {
  constructor(props) {
    super(props);
    if (typeof window === "undefined") {
      global.window = {};
    }
    let response = this.props;
    this.state = {
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
    if (typeof window !== undefined) {
      window.addEventListener("resize", this.shiftContent);
    }
    if (window.location.pathname) {
      let pathNames = window.location.pathname.split("/");
      let singlePost = pathNames[2];
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
        const postData = response.data.data;
        this.setState({
          postData: postData,
          loader: false,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong.");
      });
  }

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
    let { postData, data, postUrl } = this.state;
    if (postData.image) {
      postData.image = postData.image.replace("http://", "https://");
    }

    return (
      <div className="single-blog-main" id="single-blog-main">
        <Header
          title={data.title}
          description={data.description}
          keywords={data.keywords}
          canonical_tags={data.canonical_tags}
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
                      <h2 className="bold-contents service-content-box pl-4">
                        Highly experienced digital solutions company provide
                        best professional Web Solutions
                      </h2>
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
                              {postData?.title}
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
                                  width: "100%",

                                  backgroundImage:
                                    postData.image == null
                                      ? "/images/blogs/writing-good-blog.jpg"
                                      : `url(${postData.image})`,
                                  // backgroundSize: "cover",
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
                      <BlogRecentPosts />
                      <BlogCategories />
                      <BlogPostFeatured />
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
