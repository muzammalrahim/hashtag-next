import React, { Component } from 'react';
import Header from '../../../components/header/index.jsx';
import Footer from '../../../components/footer/index.jsx';
import Underconstruction from '../../../components/under-construction/index.jsx';
import BlogCategories from '../../../components/post-category/index.jsx';
import BlogRecentPosts from '../../../components/post-recent/index.jsx';
import DocumentMeta from 'react-document-meta';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfiniteScroll from 'react-infinite-scroller';
import $ from 'jquery';
import Axios from "axios";
import https from "https";
import * as config from '../../../config';
import queryString from 'query-string';
import Flip from 'react-reveal/Reveal';
import Link from 'next/link'

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

export default class BlogCategory extends Component {


  constructor(props) {
    super(props);
if (typeof window === "undefined") {
  global.window = {};
    }
    let response = this.props
    this.state = {
      allPosts: [],
      hasMoreItems: true,
      page:1,
      no_items: '',
      category: this.props?.match?.params?.slug,
      search_val: '',
      keyword: '',
      data: response.data.data,
    };


    this.shiftContent = this.shiftContent.bind(this);
    this.get_allPosts = this.get_allPosts.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.shiftContent();
    if (typeof window !== undefined) {
      window.addEventListener("resize", this.shiftContent);
    }
    if (window.location.pathname) {
      let pathNames = window.location.pathname.split("/");
      // console.log("path", pathNames);
      let singlePost = decodeURI(pathNames[3]);
      // console.log(decodeURI(singlePost))
      this.setState({ category: singlePost });
      this.get_allPosts(singlePost);
    }
  }

  componentWillMount(){
    if (this.props.location && this.props.location.search) {
      const values = queryString.parse(this.props.location.search);
      this.setState({
        keyword: values.keyword,
        search_val: values.keyword,
      });
    }
  }

  componentWillUnmount() {
    if (typeof window !== undefined) {
      window.removeEventListener("resize", this.shiftContent);
    }
  }

  handleChange(e) {
    this.setState({
      search_val: e.target.value
    });

  }

  onSubmit(e) {
      e.preventDefault();
      const values = this.state.search_val;
      this.setState({
        keyword: values,
        page: 1,
        allPosts: [],
        hasMoreItems: true,
        no_items: ''
      });
      this.props.history.push('/blogs/category/'+this.state.category+'?keyword='+this.state.search_val);
      
  }

  //Search div shift
  shiftContent(){
    if($(".mob-visible").is(":visible")) { 
      $('.widget_search').insertBefore($('.blog-list'));
    }
    else {
      $('.widget_search').insertBefore($('.widget_recent_entries'));
    }
  }


  //Get posts
  get_allPosts(catSlug){
    var url = config.myConfig.apiUrl+'blog/posts';
    var page = this.state.page;
    var category = catSlug;
    var keyword = this.state.keyword;

    Axios.get(url, {params: {page: page, category: category, keyword: keyword}})
    .then((response) => {
      const allPosts = this.state.allPosts;
      // console.log("respnes",response)
      response.data.data.posts.map((data) => {
          allPosts.push(data);
      });

      if(response.data.data.more_exists == true) {
          this.setState({
            allPosts: allPosts,
            hasMoreItems: true,
            page: page+1
          });
      } else {
        if(allPosts.length == 0) {
          // console.log('No posts found.');
          this.setState({
            hasMoreItems: false,
            no_items: 'No posts found.'
          });
        } else {
          this.setState({
            hasMoreItems: false,
          });
        }
      }

    }).catch(error =>{
      // console.log(error.response);
      // console.log('API error.');
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

    var post_lists = [];
    this.state.allPosts.map((post, index) => {
      post.image = post.image.replace('http://','https://');
      post_lists.push(
        <Flip bottom>
          <div className="card" key={index}>
            <h5 className="card-title text-level-4 title-orange">
              <Link
                href={"/blogs/single/[slug]"}
                as={"/blogs/single/" + post.url}
              >
                {post.title}
              </Link>
            </h5>
            <div className="blog-img">
              <Link
                href={"/blogs/single/[slug]"}
                as={"/blogs/single/" + post.url}
              >
                <div
                  className="blog-thumb"
                  style={{
                    backgroundImage:
                      post.image == null
                        ? "/images/blogs/writing-good-blog.jpg"
                        : `url(${post.image})`,
                  }}
                ></div>
              </Link>
              <div className="card-img-overlay">
                {post.categories.map((cat, i) => {
                  return (
                    <Link
                      href={"/blogs/category/[slug]"}
                      as={"/blogs/category/" + cat.slug}
                      className="btn btn-light btn-sm"
                      key={i}
                    >
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title text-level-4 title-orange">
                <Link
                  href={"/blogs/single/[slug]"}
                  as={"/blogs/single/" + post.url}
                >
                  {post.title}
                </Link>
              </h4>
              <small className="text-muted cat text-above-main-title author-blk">
                <i className="fa fa-hashtag" aria-hidden="true"></i>{" "}
                {post.author}
              </small>
              <p className="card-text">{post.excerpt}</p>
              <span className="cta-link">
                <Link
                  href={"/blogs/single/[slug]"}
                  as={"/blogs/single/" + post.url}
                  className="shopify-sub-title"
                >
                  <a>
                    <span>Read More</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </Flip>
      );
    });
const {data} = this.state
    return (
      <div className="blog-main" id="blog-main">
        <ToastContainer transition={Slide} />
        <DocumentMeta {...meta} />
        <Header title={data.title} description={data.description} keywords={data.keywords}></Header>
        <section class="content-container">
          <div className="container-fluid service-bg p-0 m-0 ">
            <div className="service-bg-right">
              <div className="service-banner-frame">
                <div className="container ">
                  <div className="row justify-content-center service-banner-content pl-3 pr-3">
                    <div className="col-lg-6 col-md-12">
                      <p className="sub-text-above-main-title title-white">
                        Blogs
                      </p>
                      <h1
                        className="main-title title-white d-block"
                        style={{ textTransform: "capitalize" }}
                      >
                        {this.state.category}
                      </h1>
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
                      <InfiniteScroll
                        initialLoad={true}
                        loadMore={this.get_allPosts}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}
                      >
                        {post_lists}
                      </InfiniteScroll>
                      <p>{this.state.no_items}</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="blog-sidebar">
                    <aside>
                      <div
                        id="search-4"
                        className="widget widget_search posts_holder"
                      >
                        <form
                          role="search"
                          id="searchform"
                          className="searchform"
                          onSubmit={this.onSubmit}
                        >
                          <div>
                            <input
                              type="text"
                              name="s"
                              id="blog-search"
                              placeholder="Search"
                              className="placeholder"
                              value={this.state.search_val}
                              onChange={this.handleChange}
                            />
                            <button type="submit" name="search-submit">
                              <i
                                className="fa fa-search"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      <BlogRecentPosts
                        category={this.state.category}
                      ></BlogRecentPosts>
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
