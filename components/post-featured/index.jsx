import React, { Component } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import axios from "axios";
import * as config from "../../config";
import Link from "next/link";
import { withRouter } from "next/router";

require("typeface-montserrat");

class BlogFeaturePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      features: [],
    };
  }

  componentDidMount() {
    this.get_categories();
  }

  //Get recent posts
  get_categories() {
    axios
      .get(config.myConfig.apiUrl + "blog/posts/featured")
      .then((response) => {
          const featured = response.data.data.posts;
        this.setState({
          features: featured,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong.");
      });
  }

  navigate = (id) => {
    this.props.router.push({
      pathname: id,
      // query: { id }
    });
  };
  render() {
    return (
      <div id="categories-3" className="widget widget_categories posts_holder">
            {this.state.features.length >0 &&<h4 className="title-level-6 text-left title-level-mobile b-categories">
                Featured Posts
            </h4>}
        <ul>
          {this.state.features?.map((cat, index) => {
            return (
              <li className="cat-item cat-item-51 current-cat" key={index}>
                <a
                  href={cat.url}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.navigate("/blogs/" + cat.url);
                  }}
                >
                  {" "}
                  {cat.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(BlogFeaturePost);
